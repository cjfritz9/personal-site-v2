import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router';
import Header from './Layout/Header';
import HomePage from './Pages/Home/_Home.page';
import Footer from './Layout/Footer';
import _404Page from './Pages/404/_404.page';
import AboutMePage from './Pages/About/_AboutMe.page';
import SudoPage from './Pages/Sudo/_SudoPage';
import { useContext, useEffect } from 'react';
import { SiteContext } from '../context/Site.context';
import { SiteInterface } from '../@types/context';
import ProjectsPage from './Pages/Projects/_Projects.page';
import ContactMePage from './Pages/ContactMe/_ContactMe.page';
import validateColorMode from '../lib/app';

const App: React.FC = () => {
  const { setIsSudoUser } = useContext(SiteContext) as SiteInterface;

  useEffect(() => {
    const sudoUser = window.localStorage.getItem('sudo-user');
    if (sudoUser === 'cjfritz9') {
      setIsSudoUser(true);
    }
    validateColorMode();
  }, []);

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
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/contact' element={<ContactMePage />} />
        <Route path='/sudo' element={<SudoPage />} />
        <Route path='/*' element={<_404Page />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
