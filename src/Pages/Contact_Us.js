import React from 'react';
import Layout from '../Components/Layout';
import { Container, Heading, Text, Box } from '@chakra-ui/react';


function Contact() {
  return (
    <Layout>
      <Container maxW='xl' mt={10} mb={10} display="flex" alignItems="center">
        <Box mr="auto" ml="auto">
          <Heading as='h1' size='xl' align="center" mb={5}>Contact Us</Heading>

          <Text fontSize='xl' mb={5}>Please feel free to reach out to us if you would like to sponsor our society or an event, or if you have any questions, comments, or concerns! </Text>

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
