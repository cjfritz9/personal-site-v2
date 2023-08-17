// @ts-nocheck
import { Box, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import { useContext } from 'react';
import { Routes, Route } from 'react-router';
import { SiteContext } from '../context/SiteContext';
import Header from './Shared/Header';
import HomePage from './Pages/Home/_Home.page';
import Footer from './Shared/Footer';

const App: React.FC = () => {
  return (
    <Box
      maxH='100dvh'
      maxW='100dvw'
      bgColor='Primary.dkSlate'
    >
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/*<Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/portfolio' element={<Demos />} />
        <Route path='/contact' element={<Contact />} /> */}
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
