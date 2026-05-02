import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

interface MortgageCalculatorProps {
  initialPrice?: number;
}

export const MortgageCalculator: React.FC<MortgageCalculatorProps> = ({ initialPrice = 5000000 }) => {
  const [homePrice, setHomePrice] = useState<number>(initialPrice);
  const [downPayment, setDownPayment] = useState<number>(initialPrice * 0.2);
  const [interestRate, setInterestRate] = useState<number>(4.5);
  const [loanTerm, setLoanTerm] = useState<number>(30);

  const calculateMonthlyPayment = () => {
    const loanAmount = homePrice - downPayment;
    if (loanAmount <= 0) return 0;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate === 0) return loanAmount / numberOfPayments;

    const payment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return payment;
  };

  const monthlyPayment = calculateMonthlyPayment();

  return (
    <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm">
      <div className="flex items-center space-x-2.5 mb-5">
        <Calculator className="w-5 h-5 text-amber-600" />
        <h3 className="font-serif text-lg font-bold text-stone-900">Mortgage Estimator</h3>
      </div>

      <div className="space-y-5">
        {/* Home Price */}
        <div>
          <div className="flex justify-between text-xs font-semibold mb-1.5">
            <span className="text-stone-600 uppercase tracking-wider">Home Price</span>
            <span className="text-amber-600 font-bold">${homePrice.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min={500000}
            max={20000000}
            step={100000}
            value={homePrice}
            onChange={(e) => {
              const price = Number(e.target.value);
              setHomePrice(price);
              setDownPayment(price * 0.2);
            }}
            className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
          />
        </div>

        {/* Down Payment */}
        <div>
          <div className="flex justify-between text-xs font-semibold mb-1.5">
            <span className="text-stone-600 uppercase tracking-wider">Down Payment (20%)</span>
            <span className="text-amber-600 font-bold">${downPayment.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min={0}
            max={homePrice}
            step={50000}
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
          />
        </div>

        {/* Interest Rate */}
        <div>
          <div className="flex justify-between text-xs font-semibold mb-1.5">
            <span className="text-stone-600 uppercase tracking-wider">Interest Rate</span>
            <span className="text-amber-600 font-bold">{interestRate}%</span>
          </div>
          <input
            type="range"
            min={1.0}
            max={10.0}
            step={0.1}
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
          />
        </div>

        {/* Loan Term */}
        <div>
          <div className="flex justify-between text-xs font-semibold mb-1.5">
            <span className="text-stone-600 uppercase tracking-wider">Loan Term</span>
            <span className="text-amber-600 font-bold">{loanTerm} Years</span>
          </div>
          <input
            type="range"
            min={5}
            max={30}
            step={5}
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
          />
        </div>

        {/* Results */}
        <div className="mt-6 bg-stone-50 p-4 border border-stone-100 rounded text-center">
          <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">
            Estimated Monthly Payment
          </p>
          <p className="text-2xl font-serif font-bold text-stone-900">
            ${Math.round(monthlyPayment).toLocaleString()}
          </p>
          <p className="text-[10px] text-stone-400 mt-1.5 italic">
            *Principal & interest. Excludes insurance, taxes, and fees.
          </p>
        </div>
      </div>
    </div>
  );
};
