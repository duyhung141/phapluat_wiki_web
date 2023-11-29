import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ChatPage from "./pages/ChatPage/ChatPage";
import HomePage from "./pages/HomePage/HomePage";
import LookUpPage from "./pages/LookUp/LookUpPage";
import {StateProvider} from "./components/store/stateManagement";

function App() {
    return (
        <StateProvider>

            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/chat" element={<ChatPage/>}/>
                        <Route path="/look-up" element={<LookUpPage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </StateProvider>

    );
}

export default App;
