import {
  Box,
  Container,
  Flex,
  Spacer,
  MenuItem,
  Menu,
  MenuList,
  IconButton,
  MenuButton,
  Link,
  DarkMode,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Logo from './Logo';

const bgColor = "black";

function NavBar() {
  return (
    <Box
      as="nav"
      width="100%"
      position="fixed"
      bg="#1a1a1a"
      zIndex={3}
      sx={{ backdropFilter: 'blur{5px}' }}
    >
      <Container
        maxW="container.md"
        display="flex"
        pr={2}
        pl={2}
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <ColorModeSwitcher mt={5} />
        <Spacer />
        <Flex align="center" mr={5}>
          <Logo />
        </Flex>
        <Spacer />
        <DarkMode>
          <Box ml={2} mt={5}>
            <Menu id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList bg={bgColor}>
                <NavLink to="/Home">
                  <MenuItem as={Link} color="white" style={{ backgroundColor: bgColor }}>
                    Home
                  </MenuItem>
                </NavLink>

                <NavLink to="/About">
                  <MenuItem as={Link} color="white" style={{ backgroundColor: bgColor }}>
                    About
                  </MenuItem>
                </NavLink>


                <Link
                  href="https://trinitysocietieshub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MenuItem
                    as={Link}
                    color="white"
                    style={{ backgroundColor: bgColor }}
                  >
                    Join
                  </MenuItem>
                </Link>


                <NavLink to="/Library">
                  <MenuItem as={Link} color="white" style={{ backgroundColor: bgColor }}>
                    Library
                  </MenuItem>
                </NavLink>

                <NavLink to="/Gallery">
                  <MenuItem as={Link} color="white" style={{ backgroundColor: bgColor }}>
                    Gallery
                  </MenuItem>
                </NavLink>

                <NavLink to="/Contact_Us">
                  <MenuItem as={Link} color="white" style={{ backgroundColor: bgColor }}>
                    Contact Us
                  </MenuItem>
                </NavLink>
              </MenuList>
            </Menu>
          </Box>
        </DarkMode>
      </Container>
    </Box>
  );
}

export default NavBar;
