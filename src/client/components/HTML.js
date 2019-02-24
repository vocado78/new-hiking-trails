/* eslint-disable react/no-danger, react/prop-types */
import React from 'react';

export default function HTML(props) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Hiking Trails in Sweden</title>
        {/* remember to add google api key before adding any maps
        <script src="https://maps.googleapis.com/maps/api/js?key="></script> */}
      </head>
      <body>
        <div
          id="app"
          dangerouslySetInnerHTML={{ __html: props.html }}
        />
        <script dangerouslySetInnerHTML={{
          __html:
              `window.__SERIALIZED_STATE__ =
                JSON.stringify(${props.serverState})`
        }}
        />
        <script type="application/javascript" src="bundle.js" />
      </body>
    </html>
  );
}
