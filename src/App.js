import './App.css';
import Page from './Components/Module/Pages/Page';
import 'antd/dist/antd.css';
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
   
      <div >
        <GlobalStyle>
          <Page />
        </GlobalStyle>
      </div>

  );
}

export default App;
