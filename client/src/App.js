import "./App.css";
import Main from "./view/Main";
import OneProject from "./components/OneProject";
import UpdateProject  from "./components/UpdateProject";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                { }
                <Routes>
                    { }
                    <Route path="/" element={<Main/>} />
                    { }
                    <Route path="/project/:id" element={<OneProject/>}/> 
                    <Route path="/projects/edit/:id" element={<UpdateProject />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;