import {
    Injectable,
    BadRequestException,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common';
import { prisma } from '../../prisma/prisma.client';
import { Prisma } from '@prisma/client';
import { UUID } from 'crypto';

@Injectable()
export class IncidentService {

    async getIncidents() {
        return prisma.incident.findMany();
    }

    async getIncident(incidentId: string) {
        return prisma.incident.findUnique({
            where: {
                id: incidentId
            }
        })
    }

    async createIncident(payload: any, userId: any) {

        try {
            const incident = await prisma.incident.create({
                data: {
                    title: payload.title,
                    description: payload.description,
                    status: 'OPEN',
                    severity: payload.severity,
                    userId: userId,
                },
            });

            return {
                message: 'Incident created successfully',
                incident,
            };
        } catch (error) {
            // Known Prisma errors
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                // Foreign key violation (invalid userId)
                if (error.code === 'P2003') {
                    throw new BadRequestException('Invalid userId provided');
                }
            }

            // Fallback error
            throw new InternalServerErrorException(
                'Failed to create incident. Please try again later.',
            );
        }
    }

    async updateIncident(id: string, data: any) {
            console.log('this is data', data)

        try {

            const incident = await prisma.incident.update({
                where: { id },
                data
            });

            return {
                message: 'Incident updated successfully',
                incident
            }

        } catch (error) {
            console.log('this is error', error)
            if (error.code === 'P2025') { // record not found
                throw new NotFoundException('Incident not found');
            }
            throw new InternalServerErrorException(
                'Failed to update incident. Please try again later.',
            );
        }
    }
};