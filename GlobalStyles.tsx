import React from 'react';
import { createTheme, ThemeProvider, StyledEngineProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                body {
                    background-color: #151515;
                    font-family: Helvetica, sans-serif;
                    font-weight: 600;
                    letter-spacing: -0.05rem;
                    color: #FFF;
                }
            `
        }
    },
    typography: {
        fontFamily: ['Helvetica', 'sans-serif'].join(', ')
    }
});

const GlobalStyles: React.FC = (props) => (
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    </StyledEngineProvider>
);

export default GlobalStyles;