import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router';
import Header from './Shared/Header';
import HomePage from './Pages/Home/_Home.page';
import Footer from './Shared/Footer';

const App: React.FC = () => {
  return (
    <Box
      maxH='100dvh'
      maxW='100dvw'
      overflow='hidden'
      bgColor='Primary.dkSlate'
    >
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
