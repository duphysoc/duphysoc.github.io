import { Box, Text, Link, Icon, Image } from '@chakra-ui/react';
import { FaArrowCircleUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box mt={10} align="center" justifyContent="center" fontSize="xs">
      <Box mt={5} display="flex" justifyContent="center">
        <Box mr={4}>
          <a href="https://www.instagram.com/du_physoc/" target="_blank">
            <Image src="https://static.wixstatic.com/media/11062b_603340b7bcb14e7785c7b65b233cd9f9~mv2.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_603340b7bcb14e7785c7b65b233cd9f9~mv2.png" alt="Instagram Logo" w="50px" />
          </a>
        </Box>
        <Box mr={4}>
          <a href="https://discord.gg/ehsHQvnnPa" target="_blank">
            <Image src="https://static.wixstatic.com/media/11062b_06b8fba6b104430da4abdb0c1ac35673~mv2.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_06b8fba6b104430da4abdb0c1ac35673~mv2.png" alt="Discord Logo" w="50px" />
          </a>
        </Box>
        <Box mr={0}>
          <a href="https://www.linkedin.com/company/physoc-trinity-college-dublin/" target="_blank">
            <Image src="https://static.wixstatic.com/media/11062b_7dcffe5daf2944b7be0a46ac6d472634~mv2.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_7dcffe5daf2944b7be0a46ac6d472634~mv2.png" alt="LinkedIn Logo" w="50px" />
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
