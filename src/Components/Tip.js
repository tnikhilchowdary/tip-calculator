import React, { useState } from "react";

const Tip = () => {
  const [bill, setBill] = useState('');
  const [tipPercent, setTipPercent] = useState('');
  const [tipAmount, setTipAmount] = useState('');
  const [total, setTotalAmount] = useState('');

  const calculateTip = () => {
    const billValue = parseFloat(bill);
    const tipValue = parseFloat(tipPercent);

    if (!isNaN(billValue) && !isNaN(tipValue)) {
      const tip = (billValue * tipValue) / 100;
      const totalBill = tip + billValue;
      setTipAmount(tip.toFixed(2));
      setTotalAmount(totalBill.toFixed(2));
    }
  };

  return (
    <div className="container">
  <h1>Tip Calculator</h1>
  <div>
    <label>Bill Amount ($)</label>
    <input
      type="number"
      value={bill}
      onChange={(e) => setBill(e.target.value)}
      placeholder="Enter Bill Amount"
    />
  </div>
  <div style={{ marginTop: "10px" }}>
    <label>Enter Tip Percentage (%)</label>
    <input
      type="number"
      value={tipPercent}
      onChange={(e) => setTipPercent(e.target.value)}
      placeholder="e.g. 15"
    />
  </div>
  <div>
    <button onClick={calculateTip}>Calculate Tip</button>
  </div>
  <div className="result">
    <p>Tip: ${tipAmount}</p>
    <p>Total Bill: ${total}</p>
  </div>
</div>

  );
};

export default Tip;
