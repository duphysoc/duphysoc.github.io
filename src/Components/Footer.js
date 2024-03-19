import { Box, Text, Link, Icon, Image, useColorMode } from '@chakra-ui/react';
import { FaArrowCircleUp } from 'react-icons/fa';

const Footer = () => {
  const { colorMode } = useColorMode();
  const discordLogo = colorMode === 'light' 
    ? "/Images/Corpo_Logos/discord_black.png"
    : "/Images/Corpo_Logos/discord_white.png";
  const instagramLogo = colorMode === 'light' 
    ? "/Images/Corpo_Logos/instagram_black.png"
    : "/Images/Corpo_Logos/instagram_white.png";
  const linkedinLogo = colorMode === 'light' 
    ? "/Images/Corpo_Logos/linkedin_black.png"
    : "/Images/Corpo_Logos/linkedin_white.png";
  const githubLogo = colorMode === 'light' 
    ? "/Images/Corpo_Logos/github_black.png" 
    : "/Images/Corpo_Logos/github_white.png";
  
  return (
    <Box mt={10} align="center" justifyContent="center" fontSize="xs">
      <Box mt={5} display="flex" justifyContent="center">
        <Box mr={4}>
          <a href="https://www.instagram.com/du_physoc/" target="_blank">
            <Image src={instagramLogo} alt="Instagram Logo" w="50px" />
          </a>
        </Box>
        <Box mr={4}>
          <a href="https://discord.gg/ehsHQvnnPa" target="_blank">
            <Image src={discordLogo} alt="Discord Logo" w="50px" />
          </a>
        </Box>
        <Box mr={4}> 
          <a href="https://www.linkedin.com/company/physoc-trinity-college-dublin/" target="_blank">
            <Image src={linkedinLogo} alt="LinkedIn Logo" w="50px" />
          </a>
        </Box>
        <Box mr={0}>
          <a href="https://github.com/aoneillmark/physoc-website?tab=readme-ov-file" target="_blank">
            <Image src={githubLogo} alt="GitHub Logo" w="50px" />
          </a>
        </Box>
      </Box>

      <Text mt={4} opacity={0.4}>
        &copy; {new Date().getFullYear()}
        <br/>Physics Society TCD. All Rights Reserved.
      </Text>

      <div style={{ display: 'inline-block', marginTop: '5px' }}>
        <Icon as={FaArrowCircleUp} color="gray.100" mr={1} mb={-0.5} />
        <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to Top
        </Link>
      </div>
    </Box>
  );
};

export default Footer;
