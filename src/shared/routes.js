import Home from '../client/components/Home/Home';
import Results from '../client/components/Results/Results';
import TrailDetail from '../client/components/TrailDetail/TrailDetail';
import About from '../client/components/About/About';
import Contact from '../client/components/Contact/Contact';
import fetchTrails from './api';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/results/:region',
    exact: true,
    component: Results,
    getTrails: () => fetchTrails()
  },
  {
    path: '/results/trail-details/:id',
    component: TrailDetail,
    getTrails: () => fetchTrails()
  },
  {
    path: '/about',
    exact: true,
    component: About
  },
  {
    path: '/contact',
    exact: true,
    component: Contact
  }
];

export default routes;
