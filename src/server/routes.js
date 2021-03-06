import Home from '../shared/components/Home/Home';
import Results from '../shared/components/Results/Results';
import TrailDetail from '../shared/components/TrailDetail/TrailDetail';
import About from '../shared/components/About/About';
import Contact from '../shared/components/Contact/Contact';
import fetchTrails from '../shared/utils/api';
import config from '../../config';

const env = process.env.NODE_ENV || 'development';
const { homePath } = config[env];

const routes = [
  {
    path: homePath,
    exact: true,
    component: Home
  },
  {
    path: `${homePath}/results/:region`,
    exact: true,
    component: Results,
    getTrails: () => fetchTrails()
  },
  {
    path: `${homePath}/results/trail-details/:id`,
    component: TrailDetail,
    getTrails: () => fetchTrails()
  },
  {
    path: `${homePath}/about`,
    exact: true,
    component: About
  },
  {
    path: `${homePath}/contact`,
    exact: true,
    component: Contact
  }
];

export default routes;
