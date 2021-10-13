import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from "./components/header/Header"
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'

import "./_app.scss"

const App = () => {

  const [sidebar, toggleSidebar] = useState(false)

  const handleToogleSidebar = () => {
    toggleSidebar(value => !value)
  }
  return (
    // <>
    //   <Header handleToogleSidebar={handleToogleSidebar} />

    //   <div className="app__container border border-info">
    //     <Sidebar sidebar={sidebar} handleToogleSidebar={handleToogleSidebar}/>
    //     <Container fluid className="app__main border border-warning">
    //       <HomeScreen/>
    //     </Container>
    //   </div>
    // </>

    <LoginScreen />
  )
}

export default App
