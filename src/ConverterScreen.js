import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [currency, setCurrency] = useState('USD');
  const [value, setValue] = useState('');
  const [convertedValues, setConvertedValues] = useState({
    USD: '',
    Euros: '',
    Pounds: '',
    Cedi: ''
  });

  const convertCurrency = (currency, value) => {
    setCurrency(currency);
    setValue(value);

    const conversionRates = {
      USD: {
        Euros: 0.89,
        Pounds: 0.76,
        Cedi: 11.37
      },
      Euros: {
        USD: 1.12,
        Pounds: 0.86,
        Cedi: 12.78
      },
      Pounds: {
        USD: 1.31,
        Euros: 1.16,
        Cedi: 14.88
      },
      Cedi: {
        USD: 0.058,
        Euros: 0.078,
        Pounds: 0.067
      }
    };

    const convertedValues = {};
    Object.keys(conversionRates[currency]).forEach((targetCurrency) => {
      const rate = conversionRates[currency][targetCurrency];
      convertedValues[targetCurrency] = (value * rate).toFixed(2);
    });

    setConvertedValues(convertedValues);
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <div style={styles.pickerContainer}>
          <select
            style={styles.pickerBox}
            value={currency}
            onChange={(e) => convertCurrency(e.target.value, value)}
          >
            <option value="USD">USD</option>
            <option value="Euros">Euros</option>
            <option value="Pounds">Pounds</option>
            <option value="Cedi">Cedi</option>
          </select>
        </div>
        <div style={styles.inputContainer}>
          <input
            style={styles.inputText}
            value={value}
            onChange={(e) => convertCurrency(currency, e.target.value)}
            placeholder="Enter value"
            type="number"
          />
        </div>
        <div style={styles.outputContainer}>
          {Object.keys(convertedValues).map((targetCurrency) => (
            <div style={styles.outputText} key={targetCurrency}>
              {targetCurrency}: {convertedValues[targetCurrency]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    margin: 'auto',
    marginTop: 10,
    marginBottom: 10,
    width: 300,
  },
  pickerContainer: {
    backgroundColor: '#66B5E1',
    height: 50,
    width: 300,
    borderRadius: 50,
    padding: 10,
    marginTop: 5,
    marginBottom: 30,
  },
  pickerBox: {
    color: '#fff',
    fontSize: 20,
    margin: 'auto',
    display: 'block',
    border: 'none',
    background: 'none',
  },
  inputContainer: {
    backgroundColor: '#66B5E1',
    height: 50,
    width: 300,
    borderRadius: 50,
    padding: 10,
    marginTop: 5,
    marginBottom: 30,
  },
  inputText: {
    color: '#fff',
    fontSize: 20,
    margin: 'auto',
    display: 'block',
    border: 'none',
    background: 'none',
  },
  outputContainer: {
    backgroundColor: '#66B5E1',
    height: 170,
    width: 300,
    borderRadius: 10,
    padding: 10,
  },
  outputText: {
    color: '#fff',
    fontSize: 20,
    margin: 'auto',
    marginTop: 10,
    marginBottom: 3,
  },
};

export default CurrencyConverter;
