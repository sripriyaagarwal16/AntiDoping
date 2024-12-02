import React from "react";
import "./financial.css";

const FinancialTransactions = () => {
  return (
    <div className="section">
      <h2>Financial Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Transaction Type</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Unusual Payments</td>
            <td>$15,000 transferred to an unknown individual.</td>
          </tr>
          <tr>
            <td>Frequent Cash Withdrawals</td>
            <td>$20,000 in cash within a month.</td>
          </tr>
          <tr>
            <td>Pharmacy Expenses</td>
            <td>$5,000 at foreign pharmacy.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FinancialTransactions;
