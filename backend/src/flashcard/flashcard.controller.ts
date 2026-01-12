import { Controller, Get } from '@nestjs/common';

@Controller('flashcard')
export class FlashcardController {
  @Get()
  getAllFlashcards() {
    return 'All flashcards';
  }
}
