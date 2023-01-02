import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Nav} from "./components/nav/Nav";
import {RoutesList} from "./components/routes/RoutesList";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="AppWrapper">
            <Nav/>
            <RoutesList/>
            </div>
        </div>
    );
}

export default App;
