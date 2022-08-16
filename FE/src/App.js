import React from 'react';
import routes from 'routes';
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div 
        id="fullpage" 
        style={{height:'500px', width:'500px', top:'50%', bottom:'50%', position:'fixed', transform: 'translate(-50%, -50%)', left:'50%', right:'50%'}} 
        onClick={() => {
          document.querySelector('#fullpage').style.display='none'
          document.querySelector('body').style.overflow = 'auto'
        }}
      />
      <Routes>
        {routes.map(({url, component}) => (
          <Route key={url} path={url} element={component} />
        ))}
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
