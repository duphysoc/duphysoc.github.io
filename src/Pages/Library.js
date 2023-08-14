import React from 'react';
import Layout from '../Components/Layout';
import { Container, Heading, Text, Box } from '@chakra-ui/react';


function Contact() {
  return (
    <Layout>
      <Container maxW='xl' mt={10} mb={10} display="flex" alignItems="center">
        <Box mr="auto" ml="auto">
          <Heading as='h1' size='xl' align="center" mb={5}>The Library Page is still under construction!</Heading>

          <Text fontSize='xl' mb={5}>In the meantime, please feel free to reach out to us if you would like to sponsor our society or an event, or if you have any questions, comments, or concerns! </Text>

          <Text fontSize='lg' fontWeight='bold' mb={3}>Email:</Text>
          <Text fontSize='lg' mb={5}> <a href='mailto:physical@csc.tcd.ie' target='_blank' rel="noreferrer noopener">physical@csc.tcd.ie</a> </Text>


          <Text fontSize='lg' fontWeight='bold' mb={3}>Address:</Text>
          <Text fontSize='lg' mb={5}>Dublin University Physics Society, <br/> Trinity College,<br/> University of Dublin,<br/>College Green,<br/> Dublin 2.</Text>

        </Box>
      </Container>

      {/* <Container maxW='xl' mt={10} mb={10} display="flex" alignItems="center">
        <Box ml={-0}>
          <Image src={contactImage} alt="Contact us" w="250px" />
        </Box>
      </Container> */}

    </Layout>
  );
}

export default Contact;


// import { google } from 'googleapis';

// const SPREADSHEET_ID = '';
// const RANGE = 'Sheet1!A1:B10';

// function Library() {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     async function fetchBooks() {
//       const auth = await google.auth.getClient({
//         scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
//       });

//       const sheets = google.sheets({ version: 'v4', auth });

//       const { data } = await sheets.spreadsheets.values.get({
//         spreadsheetId: SPREADSHEET_ID,
//         range: RANGE,
//       });

//       setBooks(data.values);
//     }

//     fetchBooks();
//   }, []);

//   return (
//     <div>
//       {books.map(([name, author]) => (
//         <div key={`${name}-${author}`}>
//           <h2>{name}</h2>
//           <p>{author}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Library;
