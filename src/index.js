import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter>
    <ThemeProvider theme={theme}>
 
       <App />
   
    </ThemeProvider>
  </BrowserRouter>
  
);


