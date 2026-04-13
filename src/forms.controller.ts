import { Controller, Post, Body } from '@nestjs/common';
import { SheetsService } from './sheets.service';

@Controller('forms')
export class FormsController {
  constructor(private sheetsService: SheetsService) {}

  @Post('submit')
  async submitForm(@Body() data: any): Promise<any> {
    const timestamp = new Date().toLocaleString('pt-BR');
    const values = [
      timestamp,
      data.name || '',
      data.email || '',
      data.phone || '',
      data.message || '',
    ];

    const result = await this.sheetsService.appendRow(values);
    return { success: true, message: 'Dados salvos com sucesso', data: result };
  }
}
