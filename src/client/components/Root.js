import React from 'react';
import { renderRoutes } from 'react-router-config';
// eslint-disable-next-line
export default function Root({ route }) {
  return (
    <div>
      {renderRoutes(route.routes)}
    </div>
  );
}
