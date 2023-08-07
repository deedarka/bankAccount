import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BankService from "../BankService";

 const ViewBankComponent = () => {
  const { id } = useParams();
  const [bankAccount, setBankAccount] = useState({});

  useEffect(() => {
    BankService.getBankAccountById(id).then((res) => {
      setBankAccount(res.data);
    });
  }, [id]);

  return (
    <div>
      <br />
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center">View Bank Details</h3>
        <div className="card-body">
          <div className="row">
            <label>AccountNumber:</label>
            <div>{bankAccount.accountNumber}</div>
          </div>
          <div className="row">
            <label>AccountHolderName:</label>
            <div>{bankAccount.accountHolderName}</div>
          </div>
          <div className="row">
            <label>Balance:</label>
            <div>{bankAccount.balance}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewBankComponent;