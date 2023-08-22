import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Container, Heading, Text, Center, useColorMode, LinkBox, LinkOverlay } from '@chakra-ui/react';
import Layout from '../Components/Layout';

function Library() {
    const [data, setData] = useState([]);
    const { colorMode } = useColorMode(); // Using Chakra's useColorMode hook

    useEffect(() => {
        // Parse CSV file
        Papa.parse(process.env.PUBLIC_URL + '/Physoc_Library_Spreadsheet.csv', {
            download: true,
            header: true,
            complete: (result) => {
                setData(result.data);
            },
        });
    }, []);

    return (
        <Layout>
            <Container maxW='xl' mt={10} mb={10} display="flex" alignItems="center">
                <Box mr="auto" ml="auto">
                    <Heading as='h1' size='xl' align="center" mb={5}>Library</Heading>
                    <Text fontSize='xl' mb={5}>Here's our collection! If you're interested in borrowing any of our books, email our Librarian!</Text>

                    {/* Centered Librarian Email Box */}
                    <LinkBox as={Center}
                        borderWidth="1px"
                        borderRadius="lg"
                        p={4}
                        my={5}
                        backgroundColor={colorMode === 'light' ? "gray.100" : "gray.700"} // Adjust background color based on theme
                        color={colorMode === 'light' ? "black" : "white"} // Adjust text color based on theme
                    >
                        <LinkOverlay href='mailto:duphysoclibrarian@gmail.com?subject=Request%20to%20Borrow%20%3CInsert%20Book%20Name%20Here%3E' target='_blank' rel="noreferrer noopener">
                            <Text fontSize='lg' fontWeight='bold'>Librarian Email: duphysoclibrarian@gmail.com</Text>
                        </LinkOverlay>

                    </LinkBox>

                    {/* The CSV Data Table */}
                    <Box mb={5} overflowX="auto">
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    {data[0] && Object.keys(data[0]).map((key) => <Th key={key}>{key}</Th>)}
                                </Tr>
                            </Thead>
                            <Tbody>
                                {data.map((row, idx) => (
                                    <Tr key={idx}>
                                        {Object.values(row).map((value, i) => <Td key={i}>{value}</Td>)}
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </Box>
                </Box>
            </Container>
        </Layout>
    );
}

export default Library;
