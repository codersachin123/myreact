import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './account.css';

const Account = () => {
  const [accounts, setAccounts] = useState([]);
  const [formData, setFormData] = useState({
    acc_no: '',
    name: '',
    total_ammount: ''
  });
  const [transactionAmount, setTransactionAmount] = useState('');
  const [transactionType, setTransactionType] = useState('deposit');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async (acc_no = '') => {
    try {
      const response = await axios.get('http://localhost:3000/select', {
        params: { acc_no }
      });
      setAccounts(response.data);
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to fetch accounts');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInsert = async () => {
    const totalAmount = parseFloat(formData.total_ammount);
    if (isNaN(totalAmount) || totalAmount < 100) {
      alert('Total amount must be at least 100');
      return;
    }

    try {
      await axios.get('http://localhost:3000/insert', { params: formData });
      fetchAccounts();
      setFormData({ acc_no: '', name: '', total_ammount: '' });
      setErrorMessage('');
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to insert account');
      
    }
  };

  const handleUpdate = async () => {
    if (!formData.total_ammount) {
      alert('Balance is required to update the account');
      return;
    }

    try {
      await axios.get('http://localhost:3000/update', { params: formData });
      fetchAccounts();
      setFormData({ acc_no: '', name: '', total_ammount: '' });
      setErrorMessage('');
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to update account');
    }
  };

  const handleDelete = async (acc_no) => {
    try {
      await axios.get('http://localhost:3000/delete', { params: { acc_no } });
      fetchAccounts();
      setErrorMessage('');
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to delete account');
    }
  };

  const handleTransaction = async () => {
    const amount = parseFloat(transactionAmount);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid positive amount');
      return;
    }

    try {
      const url = transactionType === 'deposit' ? 'http://localhost:3000/deposit' : 'http://localhost:3000/withdraw';
      await axios.get(url, { params: { acc_no: formData.acc_no, amount: transactionAmount } });
      fetchAccounts();
      setTransactionAmount('');
      setErrorMessage('');
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to perform transaction');
    }
  };

  return (
    <div className="container">
      <h1>Bob Accounts</h1>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form>
        <input
          type="text"
          name="acc_no"
          placeholder="Account Number"
          value={formData.acc_no}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="total_ammount"
          placeholder="Total Amount"
          value={formData.total_ammount}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleInsert}>
          Insert
        </button>
        <button type="button" onClick={handleUpdate}>
          Update
        </button>
      </form>
      <div>
        <h2>Transaction</h2>
        <input
          type="number"
          placeholder="Amount"
          value={transactionAmount}
          onChange={(e) => setTransactionAmount(e.target.value)}
        />
        <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
          <option value="deposit">Deposit</option>
          <option value="withdraw">Withdraw</option>
        </select>
        <button type="button" onClick={handleTransaction}>
          {transactionType.charAt(0).toUpperCase() + transactionType.slice(1)}
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Account No</th>
            <th>Name</th>
            <th>Total Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.acc_no}>
              <td>{account.acc_no}</td>
              <td>{account.name}</td>
              <td>{account.total_ammount}</td>
              <td>
                <button onClick={() => handleDelete(account.acc_no)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Account;




























