import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: var(--background-color);
  }

  button {
    cursor: pointer
  }

  ::-webkit-scrollbar {
    width: 8px;
    transition: all 0.5s;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--footer-background);
    border-radius: 10px;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--secondary);
  }


  :root {
    --primary: #6081EC; 
    --text: #e8e8e8;
    --appLogo: #8497bf;
    --label: #3c4152;
    --secondary:#b8c9ff;
    --background-color: #d3d3d3;
    --footer-background: #365489;
    --app-background-color: #fff;
    --chip-line: #333;
    --soft-border: #e8e8e8;
    --placeholder: #e8e8e8;
    --white: #fff;
    --black: #000;
    --active: #57B9B5;
    --hover-color: #f3f3f3;
    --border-color: #e8e8e8;
    --border-color-alpha50: #e8e8e850;
    --silver-lighting-color: #f1f1f1;
    --black: #000;
    --border-light-color: #ebf2f7;
    --selected-task-filter: #b8c9ff;
  }
`
