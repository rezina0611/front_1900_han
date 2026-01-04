import React from 'react';
import './App.css';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {

  const queryClient = new QueryClient()

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle /> {/**삭제 하지 마세요 */}
        <RouterProvider router={router}/>
      </ThemeProvider>
    </QueryClientProvider> 
    </>
  );
}

export default App;
