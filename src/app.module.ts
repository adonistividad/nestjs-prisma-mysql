import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { AuthService } from './auth/auth.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { LocalStrategy } from './auth/local.strategy';

@Module({ 
  imports: [PrismaModule, ArticlesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, AuthService, LocalStrategy],
})
export class AppModule {}
