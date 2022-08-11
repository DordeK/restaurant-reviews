import React from 'react';
import routes from 'routes';
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({url, component}) => (
          <Route key={url} path={url} element={component} />
        ))}
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
