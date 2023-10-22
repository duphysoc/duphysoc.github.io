import React, { useState } from 'react';
import Layout from '../Components/Layout';
import { Button } from "@chakra-ui/react";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Image,
  Center,
} from '@chakra-ui/react';
import './Gallery.css';

// Import events data from external file
import { eventsData } from './Gallery_Images_directories.js';

function Gallery() {
  const bgColor = useColorModeValue('white', '#3a3a3a');
  const borderColor = useColorModeValue('gray.300', 'gray.700');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <Layout>
      <Container maxW="container.lg" mt={5}>
        <Heading as="h1" size="xl" textAlign="center">
          Gallery
        </Heading>
        <Center>
          <Text fontSize="lg" textAlign="center">
          <br />
            Always check our <Button as="a" href="https://www.instagram.com/du_physoc/" variant="outline" colorScheme="blue" target="_blank">Instagram</Button> and other socials for the latest photos!
          </Text>
        </Center>
      </Container>
      
      {eventsData.map((event) => (
        <Container
          key={event.id}
          maxW="container.md"
          border="1px"
          borderColor={borderColor}
          borderRadius={10}
          mt={7}
          pt={3}
          pb={3}
          bg={bgColor}
        >
          <Heading as="h2" size="lg" textAlign="center" mb={5}>
            {event.name}
          </Heading>
          <p>{event.description}</p>
          <SimpleGrid columns={[2, 3, 4]} spacing="20px" mb="20px">
            {event.images.map((image) => (
              <Box
                key={image.id}
                onClick={() => handleImageClick(image)}
                className="gallery-image"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-thumbnail"
                  loading="lazy"  // Lazy loading added here
                />
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      ))} 
      <Modal isOpen={selectedImage !== null} onClose={handleCloseModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Image src={selectedImage?.src} alt={selectedImage?.alt} maxH="600px" maxW="100%" objectFit="contain" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Layout>
  );
}

export default Gallery;
