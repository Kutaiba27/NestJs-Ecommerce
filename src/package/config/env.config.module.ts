import { ConfigModule } from "@nestjs/config";


export const AppEnvConfig = ConfigModule.forRoot({
   envFilePath: ['.env', '.env.development', '.env.production'],
   isGlobal: true,
   load: [
      () => ({
         POSTGRES_USERNAME: process.env.POSTGRES_USERNAME,
         POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
         POSTGRES_HOST: process.env.POSTGRES_HOST,
         POSTGRES_PORT: process.env.POSTGRES_PORT,
         POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
         JWT_SECRET: process.env.JWT_SECRET,
         JWT_EXPIRES_IN:process.env.JWT_EXPIRES_IN,
         JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN,
         PORT: process.env.PORT
      }),
   ],
})