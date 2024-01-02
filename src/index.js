
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import { Contact } from './Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



 const AppLayout = () => {
   return( <div className='app'>
         <Header />
         <Body />
   </div>
   )
 }

 const appRouter = createBrowserRouter([
   {
    path : '/',
    element : <AppLayout />,
    errorElement
   },
   {
    path : '/about',
    element : <About />
   }
 ])
 

  let root = ReactDOM.createRoot(document.getElementById('root'))

root.render( <RouterProvider router={appRouter} />)
