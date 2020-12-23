import './App.css';
import Page from './Components/Module/Pages/Page';
import 'antd/dist/antd.css';
import { BrowserRouter  } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div >
        <Page />
       
    </div>
    </BrowserRouter>
  );
}

export default App;
