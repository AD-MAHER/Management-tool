import './App.css';
import Page from './Components/Module/Pages/Page';
import 'antd/dist/antd.css';
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div >
        <GlobalStyle>
          <Page />
        </GlobalStyle>
      </div>
    </BrowserRouter>
  );
}

export default App;
