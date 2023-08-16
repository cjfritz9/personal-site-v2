// @ts-nocheck
import { Box, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import { useContext } from 'react';
import { Routes, Route } from 'react-router';
import { SiteContext } from '../context/SiteContext';
import Cursor from './Cursor';
import Loading from './Loading';
import Navigation from './Navigation';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Demos from './pages/Portfolio';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Box minH='100dvh' maxW='100dvw' bgColor='Primary.dkSlate'>
      <Heading>Hello</Heading>
      <Text>World</Text>
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/portfolio' element={<Demos />} />
        <Route path='/contact' element={<Contact />} /> */}
      </Routes>
    </Box>
  );
};

export default App;
