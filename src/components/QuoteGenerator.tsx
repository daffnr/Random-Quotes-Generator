import React, { useState } from 'react';
import { quotes } from '../data/quotes';
import '../index.css'

const QuoteGenerator: React.FC = () => {
  const [quote, setQuote] = useState<string>(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(quote);
    alert('Quote copied to clipboard!');
  };

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 to-purple-600 text-white px-4">
      <h1 className="text-3xl font-bold mb-4">Random Love Quotes</h1>
      <p className="text-xl text-center mb-6">{quote}</p>
      <div className="flex gap-4">
        <button
          onClick={generateQuote}
          className="px-4 py-2 bg-white text-pink-500 font-semibold rounded-lg shadow-md hover:bg-pink-100"
        >
          Generate New Quote
        </button>
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 bg-white text-purple-500 font-semibold rounded-lg shadow-md hover:bg-purple-100"
        >
          Copy Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
