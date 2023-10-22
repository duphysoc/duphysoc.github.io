import { Container, Image } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Logo() {
  return (
    <NavLink to='/'>
      <Container maxW={160} style={{ marginRight: -11 }}>
      {/* This ^ is f*cked but it wasn't centred with `maxW=150` and `marginRight: 0`. If this fucks you up later, I'm sorry :// -Mark O'Neill */}
        <Image
          src="../Images/Logo/Logo.png"
          alt="Logo"
          fit="object-fit"
        />
      </Container>
    </NavLink>
  )
}

export default Logo

