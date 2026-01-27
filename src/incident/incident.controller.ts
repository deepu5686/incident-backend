import { Body, Controller, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { IncidentService } from "./incident.service";
import { JwtAuthGuard } from '../auth/jwt-auth.guard' 

@Controller('incident')
export class IncidentController {

    constructor(private readonly incidentService: IncidentService) {}

    @Get('get-incidents')
    getIncidents() {
        return this.incidentService.getIncidents();
    }

    @Get('get-incident/:id')
    getIncident(@Param('id') id: string) {
        return this.incidentService.getIncident(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post('create-incident')
    createIncident(@Body() body: any, @Req() req: any) {
        return this.incidentService.createIncident(body, req.user.sub);
    }

    @Put('update-incident/:id')
    updateIncident(
        @Param('id') id: string,
        @Body() body: any
        ) {
            return this.incidentService.updateIncident(id, body);
    }
}