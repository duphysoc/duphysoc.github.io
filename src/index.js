import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact_Us';
import Gallery from './Pages/Gallery';
import Home from './Pages/Home';
import Library from './Pages/Library';
import { myTheme } from './styles/myTheme';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <HashRouter>
    <ChakraProvider theme={myTheme}>
      <StrictMode>
        <ColorModeScript />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/library' element={<Library />} />
        </Routes>
      </StrictMode>
    </ChakraProvider>
  </HashRouter>
);
