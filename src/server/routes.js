import Home from '../shared/components/Home/Home';
import Results from '../shared/components/Results/Results';
import TrailDetail from '../shared/components/TrailDetail/TrailDetail';
import About from '../shared/components/About/About';
import Contact from '../shared/components/Contact/Contact';
import fetchTrails from '../shared/utils/api';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    getTrails: req => fetchTrails(req)
  },
  {
    path: '/results/:region',
    exact: true,
    component: Results,
    getTrails: req => fetchTrails(req)
  },
  {
    path: '/results/trail-details/:id',
    component: TrailDetail,
    getTrails: req => fetchTrails(req)
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
