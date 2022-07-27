import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --white: #ffffff;
        --black: #000000;

        --lightest-blue: #F5F7FB;
        --light-blue: #D6DBF5;
        --blue: #4D5B9E;
        --dark-blue: #293264;

        --green: #94D7A2;
        --red: #F8BCBC;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
    }
`

export default GlobalStyle
