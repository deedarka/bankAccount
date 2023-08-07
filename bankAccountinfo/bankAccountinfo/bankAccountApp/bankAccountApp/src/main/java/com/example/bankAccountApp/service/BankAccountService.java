package com.example.bankAccountApp.service;


import com.example.bankAccountApp.model.BankAccount;
import com.example.bankAccountApp.repository.BankAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BankAccountService {

        private final BankAccountRepository bankAccountRepository;

        @Autowired
        public BankAccountService(BankAccountRepository bankAccountRepository) {
            this.bankAccountRepository = bankAccountRepository;
        }

        public BankAccount deposit(Long id, double amount) {
            BankAccount account = bankAccountRepository.findById(id).orElse(null);
            if (account != null) {
                account.setBalance(account.getBalance() + amount);
                return bankAccountRepository.save(account);
            }
            return null;
        }

        public BankAccount withdraw(Long id, double amount) {
            BankAccount account = bankAccountRepository.findById(id).orElse(null);
            if (account != null && account.getBalance() >= amount) {
                account.setBalance(account.getBalance() - amount);
                return bankAccountRepository.save(account);
            }
            return null;
        }

        public double getBalance(Long id) {
            BankAccount account = bankAccountRepository.findById(id).orElse(null);
            return (account != null) ? account.getBalance() : -1;
        }

       public BankAccount createBankAccount(BankAccount bankAccount) {

            return bankAccountRepository.save(bankAccount);
        }
    public List<BankAccount> getAllBankAccounts() {
       return  bankAccountRepository.findAll();
    }
    public ResponseEntity<BankAccount> getBankAccountById(@PathVariable(value ="id")Long bankAccountId)
            throws Exception
    {
        BankAccount bankAccount = bankAccountRepository.findById(bankAccountId)
                .orElseThrow(()->new Exception("Employee not found for this id:"+bankAccountId));
        return ResponseEntity.ok().body(bankAccount);
    }
    public ResponseEntity<BankAccount>updateBankAccount(@PathVariable(value="id") Long bankAccountId,
                                                         @Validated @RequestBody BankAccount bankAccountDetails)throws  Exception
    {
            BankAccount bankAccount=bankAccountRepository.findById(bankAccountId)
                    .orElseThrow(()->new Exception("account not availble"+bankAccountId));
            bankAccount.setAccountHolderName(bankAccountDetails.getAccountNumber().toString());
            bankAccount.setBalance(bankAccountDetails.getBalance());
            final BankAccount updateBankAccount=bankAccountRepository.save(bankAccount);
            return ResponseEntity.ok(updateBankAccount);

    }






    public Map<String,Boolean> deleteBankAccount(@PathVariable(value="id")Long bankAccountId) throws Exception
    {
        BankAccount bankAccount  = bankAccountRepository.findById(bankAccountId)
                .orElseThrow(()->new Exception("account Not found for this id:"+bankAccountId));

        bankAccountRepository.delete(bankAccount);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;

    }

}

