import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { DatabaseModule } from "./common/database.module";

@Module({
  imports: [DatabaseModule, AuthModule],
})
export class AppModule {}
