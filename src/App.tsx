import React from 'react';
import Root from './components/Root/Root';
import GlobalStyle from './GlobalStyles';
import { createBrowserRouter,
 Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Headphones from './components/Headphones/Headphones';
import Speakers from './components/Speakers/Speakers';
import Earphones from './components/Earphones/Earphones';
import Features from './components/Headphones/Features/Features';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<Home/>}/>
      <Route path='headphones' element={<Headphones/>}/>
      <Route path='headphones/features' element={<Features/>}/>
      <Route path='speakers' element={<Speakers/>}/>
      <Route path='earphones' element={<Earphones/>}/>
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
