import { prisma } from "./prisma/prisma.client";

async function main() {
  try {
    console.log("Trying DB query...");
    const result = await prisma.$queryRaw`SELECT 1`;
    console.log("✅ DB connection successful:", result);
  } catch (err) {
    console.error("❌ DB connection failed:", err);
  } finally {
    await prisma.$disconnect();
  }
}

main();