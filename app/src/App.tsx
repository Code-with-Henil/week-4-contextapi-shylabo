import React from 'react'
import './App.css'
import './index.css'
import CurrencySelector from './components/CurrencySelector'
import DisplayCurrency from './components/DisplayCurrency'
import { CurrencyProvider } from './context/CurrencyContext'

const App: React.FC = () => {
  return (
    <CurrencyProvider>
      <div className="App">
        <h1 className="text-2xl font-bold text-blue-500">Currency App</h1>
        <CurrencySelector />
        <DisplayCurrency />
      </div>
    </CurrencyProvider>
  )
}

export default App
