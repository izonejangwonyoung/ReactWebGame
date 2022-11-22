import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Gugudan from "./gugudan/Gugudan";
import WordRelay from "./wordRelay/WordRelay";

function App() {
    return (


        <div>
            <h4>React로 만드는 웹게임</h4>
                <button><Link to="/">HOME</Link></button>
                <Link to="./gugudan">구구단</Link>
            <br/>
            <Link to="./wordRelay">끝말잇기</Link>
            <Routes>
                <Route path="/" component={App} exact={true}></Route>
                <Route path="/gugudan" element={<Gugudan/>}></Route>
                <Route path="/wordRelay" element={<WordRelay/>}></Route>
            </Routes>
        </div>

    );
}

export default App;
