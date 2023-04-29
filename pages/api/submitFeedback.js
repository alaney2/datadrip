import { google } from 'googleapis';
import authorize from '@/utils/googleAuth';

const SPREADSHEET_ID = '1GGXQP1xH0bj0v6qnBRe688taLwPG8kHZvJ4bQXm33Q4';
const SHEET_NAME = 'Sheet1';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { name, email, feedback } = req.body;

  try {
    const auth = await authorize();
    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A2:C2`,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [[name, email, feedback]],
      },
    });

    res.status(200).json({ message: 'Feedback submitted' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Failed to submit feedback' });
  }
};

export default handler;
