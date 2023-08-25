import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const forex_pairs = [
    'eurusd', 'usdjpy', 'gbpusd', 'usdcad', 'usdchf', 'nzdusd', 'gbpjpy',
    'audusd', 'usdaud', 'euraud', 'eurjpy', 'usdzar', 'usdsgd', 'usdnok',
    'usdsek', 'usdtry', 'eurtry', 'usdhkd', 'usdmxn', 'eurcad'
]

const famous_stock_tickers = {
    'Apple': 'aapl', 'Microsoft': 'msft', 'Amazon': 'amzn', 'Google': 'goog', 'Facebook': 'fb',
    'Berkshire Hathaway': 'brk.b', 'Alibaba': 'baba', 'Johnson & Johnson': 'jnj', 'JPMorgan Chase': 'jpm',
    'Visa': 'v', 'Procter & Gamble': 'pg', 'UnitedHealth': 'unh', 'Mastercard': 'ma', 'AT&T': 't',
    'Home Depot': 'hd', 'Intel': 'intc', 'Verizon': 'vz', 'Tencent': 'tcehy', 'Exxon Mobil': 'xom'
}

const market_indices = [
    'S&P 500', 'Dow Jones Industrial Average', 'Nasdaq Composite', 'FTSE 100', 'Nikkei 225',
    'Shanghai Composite', 'DAX', 'CAC 40', 'ASX 200', 'Hang Seng Index'
]

const famous_crypto_tickers = [
    'btc', 'eth', 'bnb', 'ada', 'usdt', 'sol', 'xrp', 'dot', 'doge', 'usdc',
    'avax', 'uni', 'busd', 'link', 'ltc', 'luna', 'matic', 'wbtc', 'atom', 'etc',
    'fil', 'vet', 'bch', 'algo', 'icp', 'xlm', 'trx', 'eos', 'aave', 'xtz',
    'shib', 'theta', 'dai', 'ftt', 'neo', 'hbar', 'ceth', 'celsius', 'cake', 'xmr',
    'amp', 'klay', 'btt', 'iost', 'waves', 'sushi', 'yfi', 'comp', 'snx', 'bat',
    'ar', 'qtum', 'mana', 'uma', 'sand', 'ksm', 'runa', 'near', 'chz', 'stx',
    'zec', 'icx', 'sc', 'enj', 'ren', 'omg', 'rev', 'one', 'iotx', 'hnt', 'yfii',
    'ankr', 'hot', 'nexo', 'pax', 'rune', 'dcr', 'crv', '1inch', 'btg', 'lpt'
]

const ASSET_CLASSES = [
  'Stocks',
  'Commodities',
  'Currencies',
];

const ASSET_NAME_CHOICES = {
  equities: ['Apple Inc', 'Microsoft', 'Amazon', 'Google'],
  bonds: ['US Treasury Bond', 'Corporate Bond', 'Municipal Bond'],
  commodities: ['Gold', 'Silver', 'Oil', 'Natural Gas'],
  currencies: ['EURUSD', 'GBPUSD', 'USDJPY', 'GBPJPY', 'USDCHF', 'NZDUSD'],
};


const Step1 = ({ nextStep }) => {
  const [selectedAssetClass, setSelectedAssetClass] = React.useState<string>('');
  const [selectedAssetNames, setSelectedAssetNames] = React.useState<string[]>([]);
  const assetNames = ASSET_NAME_CHOICES[selectedAssetClass.toLowerCase()] || [];

  const selectAssetClass = (assetClass: string) => {
    setSelectedAssetClass(assetClass);
  };

  const handleCheck = (name: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedAssetNames([...selectedAssetNames, name]);
    } else {
      setSelectedAssetNames(selectedAssetNames.filter(item => item !== name));
    }
  };

  return (
    <div className="step-container">
      <h2>Select Asset Class</h2>
      <div className="asset-classes">
        {Object.keys(ASSET_CLASSES).map((assetClass) => (
          <button onClick={() => selectAssetClass(assetClass)}>
            {assetClass}
          </button>
        ))}
      </div>
      {selectedAssetClass && (
        <>
          <h2>Asset Names for {selectedAssetClass}</h2>
          <div className="custom-checkbox">
            {assetNames.map((name, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={`asset-name-${index}`}
                  onChange={(e) => handleCheck(name, e.target.checked)}
                />
                <label htmlFor={`asset-name-${index}`}>{name}</label>
              </div>
            ))}
          </div>
        </>
      )}
      <button onClick={() => nextStep(selectedAssetClass, selectedAssetNames)}>Next</button>
    </div>
  );
};


const Step2 = ({ nextStep, prevStep }) => {
  const [selectedTradingFrequency, setSelectedTradingFrequency] = useState('');

  const handleOptionClick = (value) => {
    setSelectedTradingFrequency(value);
  };

  return (
    <div>
      <h2>Trading Style</h2>
      <div className="horizontal-options">
        {['scalper', 'day-trader', 'swing-trader', 'position-trader'].map((option, index) => (
          <div
            key={index}
            className={`option ${selectedTradingFrequency === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1).replace('-', ' ')}
          </div>
        ))}
      </div>
      <button onClick={prevStep}>Previous</button>
      <button onClick={() => nextStep(selectedTradingFrequency)}>Next</button>
    </div>
  );
};


const Step3 = ({ nextStep, prevStep }) => {
  const [selectedRiskTolerance, setSelectedRiskTolerance] = useState('');

  const handleOptionClick = (value) => {
    setSelectedRiskTolerance(value);
  };

  return (
    <div>
      <h2>Risk Tolerance</h2>
      <div className="horizontal-options">
        {['low', 'medium', 'high'].map((option, index) => (
          <div
            key={index}
            className={`option ${selectedRiskTolerance === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </div>
        ))}
      </div>
      <button onClick={prevStep}>Previous</button>
      <button onClick={() => nextStep(selectedRiskTolerance)}>Next</button>
    </div>
  );
};


const Step4 = ({
  nextStep,
  prevStep,
  selectedFundamentalFeatures,
  selectedSentimentFeatures,
  selectedTechnicalFeatures
}) => {
  const allSignals = deriveSignals([...selectedFundamentalFeatures, ...selectedSentimentFeatures, ...selectedTechnicalFeatures], ENTRY_SIGNALS_MAP);
  const [selectedLongEntrySignals, setSelectedLongEntrySignals] = useState<string[]>([]);

  const handleSignalClick = (signal: string) => {
    setSelectedLongEntrySignals([...selectedLongEntrySignals, signal]);
  };

  return (
    <div className="stefp-container">
      <h2>Your Long Entry Signals</h2>
      <div className="signal-selection">
        <List className="signal-options">
          {allSignals.map((signal, index) => (
            <ListItem key={index} button onClick={() => handleSignalClick(signal)}>{signal}</ListItem>
          ))}
        </List>
        <Card className="selected-signals">
          {selectedLongEntrySignals.map((signal, index) => (
            <CardContent key={index}>{signal} <button onClick={() => setSelectedLongEntrySignals(prev => prev.filter(item => item !== signal))}>Delete</button></CardContent>
          ))}
        </Card>
      </div>
      <Button variant="contained" onClick={prevStep}>Previous</Button>
      <Button variant="contained" color="primary" onClick={() => nextStep({ selectedLongEntrySignals })}>Next</Button>
    </div>
  );
};


const Step9 = ({ nextStep, prevStep, selectedFundamentalFeatures, selectedSentimentFeatures, selectedTechnicalFeatures }) => {
  const [selectedShortEntrySignals, setSelectedShortEntrySignals] = useState<string[]>([]);
  const shortEntrySignals = deriveSignals([...selectedFundamentalFeatures, ...selectedSentimentFeatures, ...selectedTechnicalFeatures], ENTRY_SIGNALS_MAP);

  const handleSignalClick = (signal: string) => {
    setSelectedShortEntrySignals([...selectedShortEntrySignals, signal]);
  };

  return (
    <div className="step-container">
      <h2>Your Short Entry Signals</h2>
      <div className="signal-selection">
        <List className="signal-options">
          {shortEntrySignals.map((signal, index) => (
            <ListItem key={index} button onClick={() => handleSignalClick(signal)}>{signal}</ListItem>
          ))}
        </List>
        <Card className="selected-signals">
          {selectedShortEntrySignals.map((signal, index) => (
            <CardContent key={index}>{signal} <button onClick={() => setSelectedShortEntrySignals(prev => prev.filter(item => item !== signal))}>Delete</button></CardContent>
          ))}
        </Card>
      </div>
      <Button variant="contained" onClick={prevStep}>Previous</Button>
      <Button variant="contained" color="primary" onClick={() => nextStep({ selectedShortEntrySignals })}>Finish</Button>
    </div>
  );
};



const StrategyWizard: React.FC = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAssetClass, setSelectedAssetClass] = useState('');
  const [selectedAssetNames, setSelectedAssetNames] = useState<string[]>([]);

  const [selectedTradingFrequency, setSelectedTradingFrequency] = useState<string[]>([]);
  const [selectedRiskTolerance, setSelectedRiskTolerance] = useState<string[]>([]);

  const [selectedFundamentalFeatures, setSelectedFundamentalFeatures] = useState<string[]>([]);
  const [selectedSentimentFeatures, setSelectedSentimentFeatures] = useState<string[]>([]);
  const [selectedTechnicalFeatures, setSelectedTechnicalFeatures] = useState<string[]>([]);

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedLongEntrySignals, setSelectedLongEntrySignals] = useState<string[]>([]);
  const [selectedShortEntrySignals, setSelectedShortEntrySignals] = useState<string[]>([]);

  const [SelectedMachineLearningFeatures, setSelectedMachineLearningFeatures] = useState<string[]>([]);

  const handleSubmit = () => {
    const strategyData = {
      selectedAssetNames,
      selectedTradingFrequency,
      selectedRiskTolerance,
      selectedFundamentalFeatures,
      selectedSentimentFeatures,
      selectedTechnicalFeatures,
      selectedLongEntrySignals,
      selectedShortEntrySignals,
      SelectedMachineLearningFeatures,
    };
    const isAuthenticated = false;

    if (!isAuthenticated) {

  localStorage.setItem('unsavedStrategy', JSON.stringify(strategyData));
  window.location.href = '/signup';
} else {
    const token = localStorage.getItem('authToken');
  axios.post('http://127.0.0.1:8000/strategy/api/save_strategy/', strategyData,
  {headers: {Authorization: `Token ${token}`}})

    .then(response => {
      window.location.href = '/dashboard';
    })
    .catch(error => {
      console.error("An error occurred while saving the strategy:", error);
    });
}
}
  const nextStep = (value?: string | string[]) => {
    if (value) {
      switch (currentStep) {
        case 1:
          setSelectedAssetNames(value as string[]);
          break;
        case 2:
          setSelectedTradingFrequency(value as string[]);
          break;
        case 3:
          setSelectedRiskTolerance(value as string[]);
          break;
        case 4:
          setSelectedFundamentalFeatures(value as string[]);
          break;
        case 5:
          setSelectedSentimentFeatures(value as string[]);
          break;
        case 6:
          setSelectedTechnicalFeatures(value as string[]);
          break;
        case 7:
          setSelectedLongEntrySignals(value as string[]);
          break;
        case 8:
          setSelectedShortEntrySignals(value as string[]);
        case 9:
          setSelectedMachineLearningFeatures(value as string[]);
        default:
          break;
      }
    }
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => setCurrentStep(currentStep - 1);

  const transitions = useTransition(currentStep, {
  from: { transform: 'translate3d(0,100%,0)' },
  enter: { transform: 'translate3d(0,0%,0)' },
  leave: { transform: 'translate3d(0,-100%,0)' },
});

  return (
    <div>
        {transitions((style, item, key) => (
            <animated.div style={style}>
              {item === 1 && <Step1 nextStep={value => nextStep(value)} prevStep={prevStep} />}
              {item === 2 && <Step2 nextStep={(value) => nextStep(value)} prevStep={prevStep} />}
              {item === 3 && <Step3 nextStep={(value) => nextStep(value)} prevStep={prevStep} />}
              {item === 4 && <Step4 nextStep={value => nextStep(value)} prevStep={prevStep} selectedAssetClass={selectedAssetClass} />}
              {item === 5 && <Step5 nextStep={value => nextStep(value)} prevStep={prevStep} selectedAssetClass={selectedAssetClass} />}
              {item === 6 && <Step6 nextStep={value => nextStep(value)} prevStep={prevStep} />}
              {item === 7 && <Step7 nextStep={(value) => nextStep(value)} prevStep={prevStep} selectedFundamentalFeatures={selectedFundamentalFeatures} selectedSentimentFeatures={selectedSentimentFeatures} selectedTechnicalFeatures={selectedTechnicalFeatures} />}
              {item === 8 && <Step8 nextStep={(value) => nextStep(value)} prevStep={prevStep} selectedFundamentalFeatures={selectedFundamentalFeatures} selectedSentimentFeatures={selectedSentimentFeatures} selectedTechnicalFeatures={selectedTechnicalFeatures} />}
              {item === 9 && <Step9 nextStep={handleSubmit} prevStep={prevStep} selectedAssetClass={selectedAssetClass} selectedAssetNames={selectedAssetNames} selectedFeatures={selectedFeatures} prevStep={prevStep} selectedAssetClass={selectedAssetClass} selectedAssetNames={selectedAssetNames} selectedLongEntrySignals={selectedLongEntrySignals} selectedShortEntrySignals={selectedShortEntrySignals}/>}
            </animated.div>
        ))}
    </div>
    );
};
export default StrategyWizard;
