import { FC } from 'react';
import Landing from './components/sections/Landing';
import Products from './components/sections/Products';
import About from './components/sections/About';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';

const App: FC = () => {
  return (
    <>
      <Landing />
      <Products />
      <About />
      <Gallery />
      <Contact />
    </>
  );
};

export default App;
