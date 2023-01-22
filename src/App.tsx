import React from 'react';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './GlobalStyles';
import Additional from './components/Additional/Additional';
import { createBrowserRouter,
 Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path='more' element={<Additional/>}/>
    </Route>
  )
)

function App() {
  return (
  
   <>
     <RouterProvider router={router}/>
     <GlobalStyle/>
     
   </>
  );
}

export default App;
