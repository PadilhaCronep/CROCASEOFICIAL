# CROCase Official API

API para integrar formulários Popoline com Google Sheets.

## Setup

1. Clone o repositório
2. Instale dependências: `npm install`
3. Configure `.env` com suas credenciais Google
4. Build: `npm run build`
5. Inicie: `npm start`

## Obter Credenciais Google Sheets

1. Acesse [Google Cloud Console](https://console.cloud.google.com)
2. Crie um novo projeto
3. Ative a API Google Sheets
4. Crie uma Service Account
5. Baixe a chave JSON
6. Cole o conteúdo da chave em `GOOGLE_CREDENTIALS`
7. Copie o `GOOGLE_SHEETS_ID` da sua planilha

## Usar no Popoline

No formulário Popoline, configure o webhook:
- URL: `https://seu-dominio.com/forms/submit`
- Método: POST
- Body (JSON):
```json
{
  "name": "{{name}}",
  "email": "{{email}}",
  "phone": "{{phone}}",
  "message": "{{message}}"
}
```

## Estrutura Google Sheets

Crie as colunas:
- Data/Hora
- Nome
- Email
- Telefone
- Mensagem
