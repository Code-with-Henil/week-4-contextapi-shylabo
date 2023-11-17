import { useCurrency } from '../context/CurrencyContext'

const CurrencySelector: React.FC = () => {
  const { setCurrency } = useCurrency()

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(event.target.value)
  }

  return (
    <div>
      <label htmlFor="currency">Select Currency: </label>
      <select id="currency" onChange={handleCurrencyChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  )
}

export default CurrencySelector
