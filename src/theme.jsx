import { createTheme  } from '@mui/material/styles';

const theme = createTheme({
    spacing: 4,
    typography: {
        fontFamily: [
            'Daytona',
            'Open Sans',
        ].join(','),
        h1: {
            fontSize: '5rem',
            fontFamily: 'Daytona',
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
            second: '#5a2c36', // Peach Bellini
            third: '#59342E', // Peach Bellini
            vibrant: '#FFBA7D', // Peach Bellini
            contrastText: '#2F1919',
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
            main: '#6B7D6A',//gray
        },
        success: {
            main: '#09FE00',//green
        },
        text: {
            primary: '#FEDED1',
            main: '#FEDED1',
            secondary: '#7D5643',

        },
    },
});


export default theme;
