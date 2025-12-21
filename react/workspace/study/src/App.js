import React from 'react';
import './App.css';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Styled04 from './pages/styled/Styled04';
import Styled05 from './pages/styled/Styled05';
import Styled06 from './pages/styled/Styled06';
import FontContainer from './context/normal/FontContainer';

function App() {
  return (
    <> 
      <ThemeProvider theme={theme}>
        <GlobalStyle /> {/**삭제 하지 마세요 */}
        <FontContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
