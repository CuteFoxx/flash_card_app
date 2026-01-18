import { Module } from '@nestjs/common';
import { FlashcardModule } from './flashcard/flashcard.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [FlashcardModule, UsersModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
