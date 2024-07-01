import { google } from 'googleapis';


export async function POST(request) {
  const {
    firstName,
    lastName,
    phone,
    email,
    organization,
    inquiryType,
    message,
  } = await request.json();

  try {
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: authClient });

    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    const range = 'Sheet1!A:G';

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [firstName, lastName, phone, email, organization, inquiryType, message],
        ],
      },
    });

    return Response.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Error submitting form:', error);
    return Response.json({ success: false }, { status: 500 });
  }
}
