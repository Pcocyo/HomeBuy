import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {ChakraProvider} from '@chakra-ui/react'
import Navigation from './Navigation';
const App = () => {
  return (
    <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation/>}></Route>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
  )
}

export default App