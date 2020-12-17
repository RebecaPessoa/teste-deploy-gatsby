import React from 'react';
//const Layout = require("./src/components/layout").default; //se houver um layout padrão, utilizar 
import { ThemeProvider } from 'styled-components';

import light from '../src/styles/themes/light';

export function wrapRootElement({ element }) {

    return <ThemeProvider theme={light}>{element}</ThemeProvider>;
}
