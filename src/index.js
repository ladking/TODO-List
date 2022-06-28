import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContextWrap } from "./Context";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<ContextWrap>   
    <App />
</ContextWrap>)