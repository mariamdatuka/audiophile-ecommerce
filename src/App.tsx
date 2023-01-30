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
import EarphoneFeat from './components/Earphones/EarphoneFeat/EarphoneFeat';
import MarkOne from './components/MarkOne/MarkOne';
import Zx9 from './components/Zx9/Zx9';
import WhiteHeadphone from './components/WhiteHeadphone.tsx/WhiteHeadphone';
import Zx7 from './components/Zx7/Zx7';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<Home/>}/>
      <Route path='headphones' element={<Headphones/>}/>
      <Route path='headphones/features' element={<Features/>}/>
      <Route path='headphones/markone' element={<MarkOne/>}/>
      <Route path='speakers' element={<Speakers/>}/>
      <Route path='speakers/zx9' element={<Zx9/>}/>
      <Route path='earphones' element={<Earphones/>}/>
      <Route path='earphones/yx1' element={<EarphoneFeat/>}/>
      <Route path='/xx59headphone' element={<WhiteHeadphone/>}/>
      <Route path='/speakers/zx7' element={<Zx7/>}/>
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
