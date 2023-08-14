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
          Heya! I'm Mark and I'll be your auditor this year. Looking forward to seeing you all at our upcoming events!
          We have some great things planned for this year so keep an eye on this page to stay updated!
          If there are any concerns you have, just send it my way and I'll do my best!
        </>
      )
    },
    {
      name: "Secretary",
      image: "/Images/Committee/Secretary.jpg",
      text: (
        <>
          Hi, I'm Sam and I'm the new Physoc secretary this year.
          I am a 3rd year physics student and have always had a great passion for physics.
          I'm looking forward to getting more involved in the society this year and helping organise some amazing events.
          My interests include science, video games and crying over lab reports.
          Can't wait to send some class emails and getting to seeing everyone at all the incredible events throughout the year.
        </>
      )
    },
    {
      name: "Treasurer",
      image: "/Images/Committee/Treasurer.jpg",
      text: (
        <>
          Hey I'm Jack, a 3rd year nano student. My role as treasurer is to safeguard our fat stacks of sweet, sweet gold.
          My three favorite things are physics, sailing, and kittens (I fkn love kittens).
          I think joining Physoc is the perfect way to get away from those long lectures, and to get to know other people with similar interests to you!
        </>
      )
    },
    {
      name: "Public Relations Officer",
      image: "/Images/Committee/PRO.jpg",
      text: (
        <>
          Hey there. I'm Luke and I'll be the PRO this year in ducks meaning posters, apparel and socials fall under my domain.
          I'm a third year physics student but I also love sculpting, writing and playing the keyboard.
          Looking forward to an exciting year getting to know our members.
        </>
      )
    },
    {
      name: "Librarian",
      image: "/Images/Committee/Librarian.jpg",
      text: (
        <>
          Hi, my name is Sally, I'm in third year physics. I'll be the Physoc librarian this year.
          If you're looking to borrow a book, contact me at duphysoclibrarian@gmail.com.
        </>
      )
    },
    {
      name: "Events and Trips officer",
      image: "/Images/Committee/EventOfficer.jpg",
      text: (
        <>
          Ciao, I'm Hannah! I'm a theoretical physics student and I will be the trips and events officer for Physoc this year.
          I love problem solving, listening to smart people talk, old buildings and public transport.
          As the first year back fully in person, I hope to smush as much fun into the year as possible :))
          Keep an eye out for our quizzes, talks, balls, problem solving sessions, society collab events and reading week trip.
          I look forward to seeing you soon.
        </>
      )
    },
    {
      name: "Webmaster",
      image: "/Images/Committee/Webmaster.jpg",
      text: (
        <>
          Hi! my name is Robert and I'm the webmaster for physoc.
          I'm in third year studying general physics and I love everything to do with technology and physics.
          My main hobbies include reading, coding and reading code.
          If you think wow that guy sounds like a nerd you'd be correct, and it was a little hurtful.
        </>
      )
    },
    {
      name: "IOP Representative",
      image: "/Images/Committee/IOPRep.jpg",
      text: (
        <>
          Hi I'm Kate, I'm going into 4th year nanoscience, and I'm excited to be the IOP rep this year after being on committee since 1st year.
          I love to read and sew and organise events so I'm really looking forward to what this year will bring with physoc with new people and new ideas!
        </>
      )
    },
    {
      name: "Ordinary Committee Member",
      image: "/Images/Committee/OCM.jpg",
      text: (
        <>
          Hi everyone I'm Aisling (she/her) and I'm a fourth year Nanoscience student. I'll be your OCM this year, after two years of being the Librarian and I'm super excited to see what the year will bring!
          Asides from Physics, I really love to bake and to read.
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
