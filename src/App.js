import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {ChakraProvider} from '@chakra-ui/react' ;
import Home from './Component/Home';
const App = () => {
  return (
    <ChakraProvider>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
  )
}

export default App