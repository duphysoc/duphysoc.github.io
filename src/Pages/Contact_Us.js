import React from 'react';
import Layout from '../Components/Layout';
import { Container, Heading, Text, Box, useColorMode, VStack } from '@chakra-ui/react';

function Contact() {
  const { colorMode } = useColorMode(); // Extract colorMode from the hook
  
  return (
    <Layout>
      <Container maxW='xl' mt={10} mb={10} display="flex" flexDirection="column" alignItems="center">
        
        <VStack width="100%" spacing={5}>
          <Heading as='h1' size='xl'>Contact Us</Heading>
          <Text fontSize='xl' textAlign="center">Please feel free to reach out to us if you would like to sponsor our society or an event, or if you have any questions, comments, or concerns!</Text>
        </VStack>
        
        <Box
            width={["100%", "75%"]}
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            my={5}
            backgroundColor={colorMode === 'light' ? "gray.100" : "gray.700"}
            color={colorMode === 'light' ? "black" : "white"}
        >
            <VStack align="start" spacing={3}>
                <Text fontSize='lg' fontWeight='bold'>Email:</Text>
                <Text fontSize='lg' mb={0}>
                    <a href='mailto:physical@csc.tcd.ie' target='_blank' rel="noreferrer noopener">physical@csc.tcd.ie</a>
                </Text>

                <Text>
                  {/* Just a line here to space things out. Sorry I'm not very good at js */}
                </Text>

                <Text fontSize='lg' fontWeight='bold' mb={3}>Address:</Text>
                <Text fontSize='lg'>
                    Dublin University Physics Society, <br/> 
                    Trinity College,<br/> 
                    University of Dublin,<br/>
                    College Green,<br/> 
                    Dublin 2.
                </Text>
            </VStack>
        </Box>

      </Container>
    </Layout>
  );
}

export default Contact;
