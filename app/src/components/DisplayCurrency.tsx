import { useCurrency } from '../context/CurrencyContext'

const DisplayCurrency: React.FC = () => {
  const { currentCurrency } = useCurrency()

  return (
    <div>
      <h2>Current Currency: {currentCurrency}</h2>
    </div>
  )
}

export default DisplayCurrency
