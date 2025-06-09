import { Routes, Route } from "react-router-dom";
import { Title } from "./components/Title/Title";
import { RussianLanguage } from './components/RusLan/russianlanguage'
import { Mathematics } from './components/Math/mathematics'
import { Literature } from './components/Litar/literature'
import { Chemistery } from'./components/Chemic/chemistry'
/**/
 
export function App() {
  return (
          <Routes>
            <Route exact path = "/" element = {<Title />} Component = {Title}></Route>
            <Route path = "/russianlanguage" element = {<RussianLanguage />} Component = {RussianLanguage}></Route>
            <Route path = "/mathematics" element = {<Mathematics />} Component = {Mathematics}></Route>
            <Route path = "/literature" element = {<Literature />} Component = {Literature}></Route>
            <Route path = "/chemistry" element = {<Chemistery />} Component = {Chemistery}></Route>
          </Routes>
  );
}

export default App;
