import React from 'react';
import Layout from '../Components/Layout';
import { Container, Heading, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react";


function About() {
  const committeeMembers = [
    {
      name: "Auditor",
      image: "/Images/Committee/Auditor.jpg",
      text: (
        <>
          <br />
          <Heading size="md">Yuliya Makarenko</Heading> 
          <Text fontSize="sm" fontWeight="bold">2nd Year Physics</Text> <br />
          <Text fontSize="sm" fontWeight="bold">Most bizarre physical phenomenon:</Text> 
          Dark Lightning
        </>
      )
    },
    {
      name: "Treasurer",
      image: "/Images/Committee/Treasurer.jpg",
      text: (
        <>
          <br />
          <Heading size="md">Triyaa Gulati</Heading> 
          <Text fontSize="sm" fontWeight="bold">3rd Year Nanoscience</Text> <br />
          <Text fontSize="sm" fontWeight="bold">Most bizarre physical phenomenon:</Text> 
          Hysteresis
        </>
      )
    },
    {
      name: "Secretary",
      image: "/Images/Committee/Secretary.jpg",
      text: (
        <>
          <br />
          <Heading size="md">Alexey</Heading> 
          <Text fontSize="sm" fontWeight="bold">3rd Year Theoretical Physics</Text> <br />
          <Text fontSize="sm" fontWeight="bold">Most bizarre physical phenomenon:</Text> 
          The nutation when I throw this water bottle
        </>
      )
    },
    {
      name: "Public Relations Officer",
      image: "/Images/Committee/PRO.jpg",
      text: (
        <>
          <br />
          <Heading size="md">Teresa del Águila Ferrandis</Heading> 
          <Text fontSize="sm" fontWeight="bold">3rd Year Theoretical Physics</Text> <br />
          <Text fontSize="sm" fontWeight="bold">Most bizarre physical phenomenon:</Text> 
          The Casimir effect which indicates the presence of quantum fluctuations in vacuum that can be though of as virtual particles constantly popping in and out of existence
        </>
      )
    },
    {
      name: "Librarian",
      image: "/Images/Committee/Librarian.jpg",
      text: (
        <>
          <br />
          <Heading size="md">Sally Dolan</Heading> 
          <Text fontSize="sm" fontWeight="bold">4th Year Physics</Text> <br />
          <Text fontSize="sm" fontWeight="bold">Most bizarre physical phenomenon:</Text> 
          The existence of pulsars
        </>
      )
    },
    {
      name: "Events and Trips officer",
      image: "/Images/Committee/EventOfficer.jpg",
      text: (
        <>
          <br />
          <Heading size="md">Robert Parker</Heading> 
          <Text fontSize="sm" fontWeight="bold">4th Year Physics</Text> <br />
          <Text fontSize="sm" fontWeight="bold">Most bizarre physical phenomenon:</Text> 
          We are stars, stars are us
        </>
      )
    },
    {
      name: "Webmaster",
      image: "/Images/Committee/Webmaster.jpg",
      text: (
        <>
          <br />
          <Heading size="md">Mark O'Neill</Heading> 
          <Text fontSize="sm" fontWeight="bold">4th Year Physics</Text> <br />
          <Text fontSize="sm" fontWeight="bold">Most bizarre physical phenomenon:</Text> 
          The Leidenfrost effect: water on a hot surface can levitate on a cushion of its own vapour
        </>
      )
    },
    {
      name: "IOP Representative",
      image: "/Images/Committee/IOPRep.jpg",
      text: (
        <>
          <br />
          <Heading size="md">Sam Marks</Heading> 
          <Text fontSize="sm" fontWeight="bold">4th Year Physics</Text> <br />
          <Text fontSize="sm" fontWeight="bold">Most bizarre physical phenomenon:</Text> 
          Although a trillion neutrinos pass through a glass of water every second, it would take one in every 10 million trillion for a detectable collision to occur
        </>
      )
    },
    {
      name: "1st Year Representative",
      image: "/Images/Committee/1stYearRep.jpg",
      text: (
        <>
          <br />
          <Heading size="md">Gabrielle Corcoran</Heading> 
          <Text fontSize="sm" fontWeight="bold">1st Year Physics</Text> <br />
          <Text fontSize="sm" fontWeight="bold">Most bizarre physical phenomenon:</Text> 
          Quantum tunnelling: when a particle is able to penetrate through a potential energy barrier that's higher than its own kinetic energy, for example, it's possible that if you slap a table, your hand will pass through it!
        </>
      )
    },
    {
      name: "Postgraduate Representative",
      image: "/Images/Committee/PostgradRep.jpg",
      text: (
        <>
          <br />
          <Heading size="md">Kacper Nowak</Heading> 
          <Text fontSize="sm" fontWeight="bold">MSc Quantum Science and Technology</Text> <br />
          <Text fontSize="sm" fontWeight="bold">Most bizarre physical phenomenon:</Text> 
          Quantum entanglement
        </>
      )
    },
    {
      name: "Ordinary Committee Member",
      image: "/Images/Committee/OCM.jpg",
      text: (
        <>
          <br />
          <Heading size="md">Kate Elliott</Heading> 
          <Text fontSize="sm" fontWeight="bold">4th Year Nanoscience</Text> <br />
          <Text fontSize="sm" fontWeight="bold">Most bizarre physical phenomenon:</Text> 
          The lotus effect: lotus plants have nano and micro structures on their leaves that make them superhydrophobic and self cleaning, water just runs right off them taking any dirt with it
        </>
      )
    },
  ];


  return (
    <Layout>
      <Container align="center" justifyContent="center" mt={5}>
        <Heading>About us</Heading>
      </Container>

      <Container align="center" mt={5}>
        <Heading size="md" mb={2}>Meet the committee:</Heading>
        <VStack spacing={5}>
          {committeeMembers.map(member => (
            <Container key={member.name} size="md" border="2px" borderRadius={15} p={3} borderColor="#5a5a5a">
              <HStack>
                <Spacer />
                <Image
                  src={process.env.PUBLIC_URL + member.image}
                  alt={member.name}
                  boxSize="55px"
                  borderRadius="50%"
                />
                <Heading size="md">{member.name}</Heading>
                <Spacer />
              </HStack>
              <Text align="center">{member.text}</Text>
            </Container>
          ))}
        </VStack>
      </Container>
    </Layout>
  );
}

export default About;
