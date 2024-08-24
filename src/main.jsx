import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ServiceForm from './pages/ServiceForm.jsx';
import Contact from './pages/Contact.jsx';
import Service from './pages/Service.jsx';
// import { Router } from 'react-router-dom'
 const router = createBrowserRouter([
   {
     path: "/",
     element: <App />,
     children: [
       {
         path: "/",
         element: <Home />,
       },
       {
         path: "/serviceForm",
         element: <ServiceForm />,
       },
       {
         path: "/contact",
         element: <Contact />,
       },
       {
         path: "/service",
         element: <Service />,
       },
     ],
   },
 ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
