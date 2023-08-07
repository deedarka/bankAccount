import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BankService from "../BankService";

const DepositComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bankAccount, setBankAccount] = useState({
    accountNumber: "",
    accountHolderName: "",
    balance: 0,
  });
  const [depositAmount, setDeposit] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    BankService.getBankAccountById(id).then((res) => {
      setBankAccount(res.data);
    });
  }, [id]);

  const handleDeposit = async () => {
    try {
      const response = await BankService.deposit(id, depositAmount);
      setBankAccount((prevBankAccount) => ({
        ...prevBankAccount,
        balance: response.data.balance,
      }));
      setMessage(`Deposit successful. New balance: ${response.data.balance}`);
    } catch (error) {
      setMessage('Error depositing funds.');
    }
  };

  const goBack = () => {
    navigate('/bankAccounts'); 
  };

  return (
    <div className="card col-md-6 offset-md-3">
      <h3 className="text-center">View Bank Details</h3>
      <h2 className="text-center" style={{ color: "green" }}>Deposit to Bank Account</h2>
      <form>
        <div>
          <p>Account Number: {bankAccount.accountNumber}</p>
          <p>Account Holder: {bankAccount.accountHolderName}</p>
          <p>Current Balance: {bankAccount.balance}</p>
        </div>
        <div>
          <label>
            Deposit Amount:
            <input
              type="number"
              value={depositAmount}
              onChange={(e) => setDeposit(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button onClick={handleDeposit}>Deposit</button>
          <button onClick={goBack}>Go Back</button>
        </div>
        <div>{message}</div>
      </form>
    </div>
  );
};

export default DepositComponent;
