// import { GoogleSpreadsheet } from 'google-spreadsheet';
// const doc = new GoogleSpreadsheet('SPREADSHEET_ID');

// // Authenticate with the Google API using your service account key file
// await doc.useServiceAccountAuth({
//   client_email: process.env.CLIENT_EMAIL,
//   private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
// });

// // Load the data from the spreadsheet
// await doc.loadInfo(); // loads document properties and worksheets
// const sheet = doc.sheetsByIndex[0]; // Get the first sheet
// const rows = await sheet.getRows(); // Get all the rows

// // Do something with the data
// console.log(rows);
