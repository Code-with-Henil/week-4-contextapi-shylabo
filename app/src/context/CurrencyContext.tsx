import React, { createContext, useState, useContext } from 'react'

export interface CurrencyContextProps {
  currentCurrency: string
  setCurrency: (currency: string) => void
}

const CurrencyContext = createContext<CurrencyContextProps | undefined>(undefined)

interface CurrencyProviderProps {
  children: React.ReactNode
}

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children }) => {
  const [currentCurrency, setCurrentCurrency] = useState<string>('USD')

  const setCurrency = (currency: string) => {
    setCurrentCurrency(currency)
  }

  return <CurrencyContext.Provider value={{ currentCurrency, setCurrency }}>{children}</CurrencyContext.Provider>
}

export const useCurrency = () => {
  const context = useContext(CurrencyContext)
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider')
  }
  return context
}
