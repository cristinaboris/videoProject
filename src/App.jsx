import { Navbar } from "./components/Navbar/Navbar"
import Header from './components/Header/Header'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { Footer } from "./components/Footer/Footer"
import Register from "./components/Register/Register"
import { Login } from "./assets/Login/Login"
import { AuthProvider } from "./contex/AuthProvider"

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
    <Register/>
    <Login/>
     <Navbar/>
     <Header/>
     <Footer/>
     
     </Provider>
    </>
  )
}

export default App
