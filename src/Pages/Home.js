import React from 'react';
import Layout from '../Components/Layout';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

function Home() {
  const bgColor = useColorModeValue('white', '#3a3a3a');
  const borderColor = useColorModeValue('gray.300', 'gray.700');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
  };
  

  const images = [

    { id: 1, src: './Images/Slider/Trinity.jpg', alt: 'Trinity' },
    { id: 2, src: './Images/Slider/Lecture.jpg', alt: 'Lecture' },
    { id: 3, src: './Images/Slider/Standard Model.jpg', alt: 'Standard Model' },
    { id: 4, src: './Images/Slider/Careers Fair 22.jpg', alt: 'Careers Fair 22' },
    { id: 5, src: './Images/Slider/MathsPhys Ball.jpg', alt: 'MathsPhys Ball' },
    { id: 6, src: './Images/Slider/Ego Tunnel.jpg', alt: 'Ego Tunnel' },
    { id: 7, src: './Images/Slider/Simon Clarke.jpg', alt: 'Simon Clarke' },
  ];

  return (
    <Layout>
      <Slider {...settings}>
        
        {images.map((image) => (
          <Box key={image.id}>
            <img src={image.src} alt={image.alt} />
          </Box>
        ))}
      </Slider>

      <Container maxW="container.lg" mt={5}>
        <Heading as="h1" size="xl" textAlign="center">
          Welcome to Physoc!
        </Heading>
      </Container>

      <Container
        maxW="container.md"
        border="1px"
        borderColor={borderColor}
        borderRadius={10}
        mt={7}
        pt={3}
        pb={3}
        bg={bgColor}
      >
        <Heading as="h2" size="lg" mb={4}>
          Who are we?
        </Heading>
        <Text fontSize="lg">
          We are the Trinity College Dublin Physics Society! 
          <br/> 
          <br/> 
          Our society's goal is to provide all things "physics-y" to all physicsy people. 
          This doesn't just mean physics students, but anyone who's interested in physics! 
          <br/>
          <br/> 
          We hold events, talks, trips and pub quizzes thorughout the year, as well as special
          events like our annual Careers Fair and world-famous MathsPhys ball.
          <br/>
          <br/> 
          Join us for our weekly coffee & biscuits mornings (BrainFood) and meet fellow physics nerds!
          This is a great way to make new friends and get some homework help if you need it!
          <br/>

        </Text>

      </Container>

      <Container maxW="container.mg" mt={5}>
      <Heading as="h1" size="mg" textAlign="center">
          Follow us & join our discord:
        </Heading> 
      </Container
      >
    </Layout>
  );
}

export default Home;
