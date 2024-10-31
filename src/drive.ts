import * as google from '@googleapis/drive';

let service;

export const getDriveService = async () => {
  if (service) {
    return service;
  }
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_ID,
      private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
    },
    scopes: [
      'https://www.googleapis.com/auth/drive',
    ],
  });
  
  service = google.drive({
    version: 'v3',
    auth
  });

  return service;
}