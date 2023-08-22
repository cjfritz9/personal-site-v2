import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router';
import Header from './Shared/Header';
import HomePage from './Pages/Home/_Home.page';
import Footer from './Shared/Footer';
import _404Page from './Pages/404/_404.page';

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
        {['/', '/home'].map((path, i) => (
          <Route key={i} path={path} element={<HomePage />} />
        ))}
        <Route path='/*' element={<_404Page />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
