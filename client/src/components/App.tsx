import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router';
import Header from './Layout/Header';
import HomePage from './Pages/Home/_Home.page';
import Footer from './Layout/Footer';
import _404Page from './Pages/404/_404.page';
import AboutMePage from './Pages/About/_AboutMe.page';
import SudoPage from './Pages/Sudo/_SudoPage';

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
        <Route path='/about' element={<AboutMePage />} />
        <Route path='/sudo' element={<SudoPage />} />
        <Route path='/*' element={<_404Page />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
