import React from "react";
import ReactDOM from "react-dom";
import {ThemeProvider} from 'styled-components';

import App from "./App";
import "./index.css";
import theme from "./constants/themes"

ReactDOM.render(
<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>, document.getElementById("root"));
