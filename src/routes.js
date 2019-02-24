import Home from './client/components/Home/Home';
import About from './client/components/About/About';
import Contact from './client/components/Contact/Contact';
import Results from './client/components/Results/Results';
import TrailDetail from './client/components/TrailDetail/TrailDetail';
import Root from './client/components/Root';

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '/contact',
        component: Contact
      },
      {
        path: '/results',
        component: Results,
        routes: [
          {
            path: '/trail-details/:id',
            component: TrailDetail
          }
        ]
      }
    ]
  }
];

export default routes;
