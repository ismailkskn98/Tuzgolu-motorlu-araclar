import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Product from '../pages/Product';
import Contact from '../pages/Contact';
import Gallery from '../pages/Gallery';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'hakkimizda',
        element: <About />,
      },
      {
        path: 'yedek-parcalar',
        element: <Product />,
      },
      {
        path: 'galeri',
        element: <Gallery />,
      },
      {
        path: 'iletisim',
        element: <Contact />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
