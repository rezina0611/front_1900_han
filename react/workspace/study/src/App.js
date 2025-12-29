import React from 'react';
import './App.css';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';


function App() {
  return (
    <> 
      <ThemeProvider theme={theme}>
        <GlobalStyle /> {/**삭제 하지 마세요 */}
        <RouterProvider router={router}/>
      </ThemeProvider>
    </>
  );
}

export default App;
