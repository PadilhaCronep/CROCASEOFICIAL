import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormsController } from './forms.controller';
import { SheetsService } from './sheets.service';

@Module({
  controllers: [AppController, FormsController],
  providers: [AppService, SheetsService],
})
export class AppModule {}
