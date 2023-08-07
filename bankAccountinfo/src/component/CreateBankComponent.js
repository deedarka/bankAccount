import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BankService from "../BankService";

const CreateBankComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [bankAccount, setBankAccount] = useState({
    accountNumber: "",
    accountHolderName: "",
    balance: "",
  });

  useEffect(() => {
    if (id !== "_add") {
      BankService.getBankAccountById(id)
        .then((res) => {
          const { accountNumber,accountHolderName,balance } = res.data;
          setBankAccount({ accountNumber,accountHolderName, balance });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const saveOrUpdateBankAccount = (e) => {
    e.preventDefault();
    if (id === "_add") {
      BankService.createBankAccount(bankAccount)
        .then(() => {
          navigate("/bankAccounts");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      BankService.updateBankAccount(bankAccount, id)
        .then(() => {
          navigate("/bankAccounts");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBankAccount((prevBankAccount) => ({
      ...prevBankAccount,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    navigate("/bankAccounts");
  };

  const getTitle = () => {
    if (id === "_add") {
      return <h3 className="text-center">Add BankAccount</h3>;
    } else {
      return <h3 className="text-center">BankAccount</h3>;
    }
  };

  return (
    <div>
    <br />
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3">
      <form>
        {getTitle()}
        <div className="form-group">
          <label>AccountNumber:</label>
          <input
            placeholder="AccountNumber"
            name="accountNumber"
            className="form-control"
            value={bankAccount.accountNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>AccountHolderName:</label>
          <input
            placeholder="AccountHolderName"
            name="accountHolderName"
            className="form-control"
            value={bankAccount.accountHolderName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Balance:</label>
          <input
            placeholder="Balance"
            name="balance"
            className="form-control"
            value={bankAccount.balance}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-success" onClick={saveOrUpdateBankAccount}>
          Save
        </button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
   </div>
   </div>

   </div>

  
  );
};

export default CreateBankComponent;
