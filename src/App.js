import './App.css';
import Page from './Components/Module/Pages/Page';
import 'antd/dist/antd.css';
import { GlobalStyle } from "./GlobalStyle";

function App() {
 
  return (

    <>
      <GlobalStyle>
        <Page />
      </GlobalStyle>
    </>

  );
}

export default App;
