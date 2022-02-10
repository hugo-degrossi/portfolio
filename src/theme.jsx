import { createTheme  } from '@mui/material/styles';

const theme = createTheme({
    spacing: 4,
    typography: {
        fontFamily: [
            'Montserrat',
            'Open Sans',
        ].join(','),
        h1: {
            fontSize: '5rem',
            fontFamily: 'Montserrat',
        },
        h2: {
            fontSize: '3.5rem',
            fontFamily: 'Open Sans',
            fontStyle: 'bold',
        },
        h3: {
            fontSize: '2.5rem',
            fontFamily: 'Roboto',
        },
    },
    palette: {
        background: {
            default: '#2F1919'
        },
        primary: {
            main: '#DC9777', // Peach Bellini
            second: '#5a2c36',
            third: '#59342E',
            vibrant: '#FFBA7D',
            contrastText: '#2F1919',
            fourth: '#a9735b', // Peach Bellini
        },
        accent: {
            main: '#5C5251',
            second: '#A86258',
        },
        error: {
            main: '#D72A2A',//red
        },
        warning: {
            main: '#FC7B09',//orange
        },
        info: {
            main: '#2F1919',//gray
        },
        success: {
            main: '#09FE00',//green
        },
        text: {
            main: '#FEDED1',
            secondary: '#7D5643',

        },
    },
});


export default theme;
