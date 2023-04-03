import React from "react";
import  { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout";
import DetailView from "./routes/DetailView";
//import { exportData } from "./App";

const exportData = {}


// react 18 api 
const container = document.getElementById('root');
const root = createRoot( container ); 
root.render( // browser router

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}> 
                <Route index={true} path='/' element={<App />} />
                <Route index={true} path='/weatherDetail/Paris' element={<DetailView />} />
            </Route> 
           
        </Routes>
        
    </BrowserRouter>



);
// root.render ( <testList />)



