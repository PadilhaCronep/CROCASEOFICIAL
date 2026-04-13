# Integração Google Sheets + Formulário Popoline

## ✅ Configuração Realizada

O formulário modal do `index.html` agora conecta com a API Google Sheets do NestJS.

### Próximas Etapas:

1. **Atualize a URL da API no index.html (linha ~495)**
   ```javascript
   const response = await fetch('https://seu-dominio.com/forms/submit', {
   ```
   Substitua `https://seu-dominio.com` pelo endereço do seu servidor Hostgator.

2. **Configure as credenciais Google no servidor**
   - Copie as credenciais JSON da Google Cloud
   - Adicione ao `.env` do servidor:
     ```
     GOOGLE_SHEETS_ID=ID_DA_SUA_PLANILHA
     GOOGLE_CREDENTIALS={"type":"service_account",...}
     ```

3. **Teste o fluxo**
   - Abra o site
   - Preencha o formulário modal
   - Verifique se os dados aparecem no Google Sheets

## Estrutura do Formulário

Os campos mapeados são:
- **name** → Nome Completo
- **email** → E-mail Profissional
- **phone** → Telefone (WhatsApp)
- **message** → Capital Disponível

Isso é adicionado automaticamente no Google Sheets com timestamp.

