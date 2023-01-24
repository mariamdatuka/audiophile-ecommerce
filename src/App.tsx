import React from 'react';
import Root from './components/Root/Root';
import GlobalStyle from './GlobalStyles';
import { createBrowserRouter,
 Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Headphones from './components/Headphones/Headphones';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<Home/>}/>
      <Route path='headphones' element={<Headphones/>}/>
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
