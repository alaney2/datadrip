import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

async function authorize() {
  const jwtClient = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/spreadsheets'],
  );

  await jwtClient.authorize();

  return jwtClient;
}

export default authorize;
