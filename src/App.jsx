import React from 'react'
import './App.css'
import Header from './components/layout/Header'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/common/Footer'

function App() {
 

  return (
    <>
      <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>

      
    </>
  )
}

export default App
