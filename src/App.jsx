import { Navbar } from "./components/Navbar/Navbar"
import Header from './components/Header/Header'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { Footer } from "./components/Footer/Footer"

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
body{
  box-sizing: border-box;
  background-color: gray;
  @import url("https://fonts.googleapis.com/css2?family=Splash&display=swap");
  *{
    font-family: 'Roboto', sans-serif;
  }
}
`;

function App() {
  

  return (
    <>
      <Provider store={store}>
    <GlobalStyles/>
     <Navbar/>
     <Header/>
     <Footer/>
     </Provider>
    </>
  )
}

export default App
