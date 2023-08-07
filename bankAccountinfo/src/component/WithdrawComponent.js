import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BankService from "../BankService";

const WithdrawComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bankAccount, setBankAccount] = useState({
    accountNumber: "",
    accountHolderName: "",
    balance: 0, // Initialize with 0
  });
  const [withdrawAmount, setWithdraw] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    BankService.getBankAccountById(id).then((res) => {
      setBankAccount(res.data);
    });
  }, [id]);

  const handleWithdraw = async () => {
    try {
      const response = await BankService.withdraw(id, withdrawAmount);
      setBankAccount((prevBankAccount) => ({
        ...prevBankAccount,
        balance: response.data.balance,
      }));
      setMessage(`Withdrawal successful. New balance: ${response.data.balance}`);
    } catch (error) {
      setMessage('Error withdrawing funds.');
    }
  };

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div>
     <div className="card col-md-6 offset-md-3">
    <h3 className="text-center">View Bank Details</h3>
      <h2   className="text-center">Withdraw from Bank Account</h2>
      <div>
        <p>Account Number: {bankAccount.accountNumber}</p>
        <p>Account Holder: {bankAccount.accountHolderName}</p>
        <p>Current Balance: {bankAccount.balance}</p>
      </div>
      <div>
        <label>
          Withdraw Amount:
          <input
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdraw(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button onClick={handleWithdraw}>Withdraw</button>
        <button onClick={goBack}>Go Back</button>
      </div>
      <div>{message}</div>
    </div>
    </div>
  );
};

export default WithdrawComponent;






// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import BankService from "../BankService";

// const WithdrawComponent = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [amount, setAmount] = useState('');
//   const [message, setMessage] = useState('');

//   const handleWithdraw = async () => {
//     try {
//       const response = await BankService.withdrawBankAccount(id, amount);
//       setMessage(`Withdrawal successful. New balance: ${response.data.balance}`);
//     } catch (error) {
//       setMessage('Error withdrawing funds.');
//     }
//   };

//   const goBack = () => {
//     navigate(-1); // Go back to the previous page
//   };

//   return (
//     <div>
//       <h2>Withdraw from Bank Account</h2>
//       <div>
//         <label>
//           Amount:
//           <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
//         </label>
//       </div>
//       <div>
//         <button onClick={handleWithdraw}>Withdraw</button>
//         <button onClick={goBack}>Go Back</button>
//       </div>
//       <div>{message}</div>
//     </div>
//   );
// };

// export default WithdrawComponent;
