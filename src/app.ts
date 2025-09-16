import "dotenv/config";

const { PORT } = process.env;

async function bootstrap() {
  try {
    console.log("[APP] Starting Connivo application...", PORT);
  } catch (error) {
    console.error(`[APP] Startup error: ${(error as Error).message}`);
    process.exit(1);
  }
}

bootstrap();
