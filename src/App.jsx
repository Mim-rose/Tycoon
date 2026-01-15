import React from 'react'
import './App.css'
import Header from './components/layout/Header'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/common/Footer'

function App() {
 

  return (
    <>
      <div>
        <Header/>
        <AppRoutes/>
        <Footer/>

      </div>
      
    </>
  )
}

export default App
