import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BankService from "../BankService";


const UpdateBankComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bankAccount, setBankAccounts] = useState({
    accountNumber: "",
    accountHolderName: "",
    balance: ""
  });

  useEffect(() => {
    BankService.getBankAccountById(id).then((res) => {
      setBankAccounts(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBankAccounts((prevBankAccount) => ({
      ...prevBankAccount,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    BankService.updateBankAccount(id, bankAccount).then(() => {
      navigate("/bankAccounts");
    });
  };

  return (
    <div>
      <h2 className="text-center">Update product</h2>
      <form>
        <div className="form-group">
          <label> AccountNumber:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={bankAccount.accountNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>AccountHolderName:</label>
          <input
            type="text"
            className="form-control"
            name="quantity"
            value={bankAccount.accountHolderName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>balance:</label>
          <input
            type="text"
            className="form-control"
            name="price"
            value={bankAccount.balance}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateBankComponent;
