import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { AtGuard } from './common/guards';
import { PrismaModule } from './prisma/prisma.module';
import { AddCategoryModule } from './add-category/add-category.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, PrismaModule, AddCategoryModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
})
export class AppModule {}
