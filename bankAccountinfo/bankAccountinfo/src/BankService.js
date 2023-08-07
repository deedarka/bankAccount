import axios from 'axios';
const BANK_API_BASE_URL="http://localhost:8081/api/bankAccounts";

class BankService
{
    getBankAccounts()
    {
        return axios.get(BANK_API_BASE_URL);
    }
    createBankAccount(bankAccount)
    {
        return axios.post(BANK_API_BASE_URL,bankAccount);
    }
    getBankAccountById(bankAccountId)
    {
        return axios.get(BANK_API_BASE_URL+'/'+bankAccountId);
    }
    updateBankAccount(bankAccount,bankAccountId)
    {
        return axios.put(BANK_API_BASE_URL+'/'+bankAccountId,bankAccount);
    }
    deleteBankAccount(bankAccountId)
    {
        return axios.delete(BANK_API_BASE_URL+'/'+bankAccountId);
    }


    deposit(bankAccountId, amount) {
        return axios.post(`${BANK_API_BASE_URL}/deposit/${bankAccountId}`, null, {
            params: {
                amount: amount,
            },
        });
    }



withdraw(bankAccountId, amount) {
    return axios.post(`${BANK_API_BASE_URL}/withdraw/${bankAccountId}`, null, {
        params: {
            amount: amount,
        },
    });

}
}

export default new BankService();