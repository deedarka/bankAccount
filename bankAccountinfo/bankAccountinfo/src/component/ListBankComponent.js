import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BankService from "../BankService";

const ListBankComponent = () => {
  const navigate = useNavigate();
  const [bankAccounts, setBankAccounts] = React.useState([]);

  useEffect(() => {
    BankService.getBankAccounts().then((res) => {
      setBankAccounts(res.data);
    });
  }, []);

  const deleteBankAccount = (id) => {
    BankService.deleteBankAccount(id).then(() => {
      setBankAccounts(bankAccounts.filter((bankAccount) => bankAccount.id !== id));
    });
  };

  const ViewBankAccount = (id) => {
    navigate(`/view-bankAccount/${id}`);
  };

  const editBankAccount = (id) => {
    navigate(`/add-bankAccount/${id}`);
  };

  const addBankAccount = () => {
    navigate("/add-bankAccount/_add");
  };

  const depositAmount = (id) => {
    navigate(`/deposit/${id}`);
  };

  const withdrawAmount = (id) => {
    navigate(`/withdraw/${id}`);
  };
  return (
    <div>
      <h2 className="text-center" >BankAccount List</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addBankAccount}>
          Add bankAccount
        </button>
      </div>
      <br />
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>AccountNumber</th>
              <th>AccountHolderName</th>
              <th>Balance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bankAccounts.map((bankAccount) => (
              <tr key={bankAccount.id}>
                <td>{bankAccount.accountNumber}</td>
                <td>{bankAccount.accountHolderName}</td>
                <td>{bankAccount.balance}</td>
                <td>
                  <button
                    onClick={() => editBankAccount(bankAccount.id)}
                    className="btn btn-info"
                  >
                    Update
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => deleteBankAccount(bankAccount.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => ViewBankAccount(bankAccount.id)}
                    className="btn btn-info"
                  >
                    View
                  </button>


                 
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => depositAmount(bankAccount.id)}
                    className="btn btn-success"
                  >
                    Deposit
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => withdrawAmount(bankAccount.id)}
                    className="btn btn-warning"
                  >
                    Withdraw
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBankComponent;
