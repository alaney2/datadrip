import { google } from 'googleapis';
import { readFileSync } from 'fs';
import { join } from 'path';


async function authorize() {
  const keyFile = join(process.cwd(), 'credentials.json');
  const keyFileContents = readFileSync(keyFile, 'utf-8');
  const serviceAccountCredentials = JSON.parse(keyFileContents);

  const jwtClient = new google.auth.JWT(
    serviceAccountCredentials.client_email,
    null,
    serviceAccountCredentials.private_key,
    ['https://www.googleapis.com/auth/spreadsheets'],
  );

  await jwtClient.authorize();

  return jwtClient;
}

export default authorize;
