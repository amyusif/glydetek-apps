import { Button } from "./Components/common/Button";
import { createGlobalStyle } from "styled-components";
import './Styles/AppEdit.scss';
import Panel from "./Components/Custom/Panel";

const GlobalStyle = createGlobalStyle`
body{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: white;
  

}
`;

const App =() => {
  return (
<>
    <GlobalStyle />
    <div className="cover">
    <Panel />
    </div>
    
    {/* <div className="wrap-container"> 
      <div className="Mid-container">
    <Button>LOG IN</Button>
      </div>
    </div> */}
    </>
  );
}

export default App;
