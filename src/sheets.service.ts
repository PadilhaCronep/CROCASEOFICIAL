import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';

@Injectable()
export class SheetsService {
  private sheets: any;
  private spreadsheetId = process.env.GOOGLE_SHEETS_ID;

  constructor() {
    const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS || '{}');
    
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    this.sheets = google.sheets({ version: 'v4', auth });
  }

  async appendRow(values: any[]): Promise<any> {
    try {
      const response = await this.sheets.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range: 'Sheet1!A:Z',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [values],
        },
      });

      return { success: true, data: response.data };
    } catch (error) {
      console.error('Sheets API error:', error);
      throw new Error('Failed to save to Google Sheets');
    }
  }
}
