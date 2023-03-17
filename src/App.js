import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import Templates from "./components/Templates/Templates";

function App() {
    const {tg, onToggleButton} = useTelegram();

    useEffect(() => {
        tg.ready()
    }, [])

  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route index element={<LoginForm/>}/>
            <Route path={'/templates'} element={<Templates/>}/>
        </Routes>
    </div>
  );
}

export default App;
