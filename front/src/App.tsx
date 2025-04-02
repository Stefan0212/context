import Display from "./components/Display";
import Input from "./components/Input";
import { LetterProvider } from "./contexts/LetterCtx";
export default App;


function App(){

  return <LetterProvider>
    <Input/>
    <Display/>
    </LetterProvider>
    
}
