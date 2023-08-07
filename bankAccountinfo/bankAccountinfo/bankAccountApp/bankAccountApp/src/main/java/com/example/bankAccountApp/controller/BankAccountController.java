package com.example.bankAccountApp.controller;
import com.example.bankAccountApp.service.BankAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import com.example.bankAccountApp.model.BankAccount;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins="http://localhost:3004")
@RequestMapping("/api")
public class BankAccountController {

    private final BankAccountService bankAccountService;


    @Autowired
    public BankAccountController(BankAccountService bankAccountService) {
        this.bankAccountService = bankAccountService;
    }


    @GetMapping("/bankAccounts")
    public List<BankAccount>getAllBankAccounts(){
        return bankAccountService.getAllBankAccounts();
    }

        @GetMapping("/bankAccounts/{id}")
    public ResponseEntity<BankAccount> getBankAccountById(@PathVariable(value="id")Long bankAccountId )throws Exception{
            return  bankAccountService.getBankAccountById(bankAccountId);
    }

    @PostMapping("/bankAccounts")
    public BankAccount createBankAccount(@RequestBody BankAccount bankAccount) {
        return bankAccountService.createBankAccount(bankAccount);
    }

    @PostMapping("/bankAccounts/deposit/{id}")
    public BankAccount deposit(@PathVariable Long id, @RequestParam double amount) {
        return bankAccountService.deposit(id, amount);
    }

    @PostMapping("/bankAccounts/withdraw/{id}")
    public BankAccount withdraw(@PathVariable Long id, @RequestParam double amount) {
        return bankAccountService.withdraw(id, amount);
    }

    @GetMapping("/balance/{id}")
    public double getBalance(@PathVariable Long accountNumber) {
        return bankAccountService.getBalance(accountNumber);
    }

    @PutMapping("/bankAccounts/{id}")
    public ResponseEntity<BankAccount> updateBankAccount(@PathVariable(value="id")Long bankAccountId,
                                                   @Validated @RequestBody BankAccount bankAccountDetails) throws Exception
    {
        return bankAccountService.updateBankAccount(bankAccountId, bankAccountDetails);
    }

    @DeleteMapping("/bankAccounts/{id}")
    public Map<String,Boolean> deleteBankAccount(@PathVariable(value="id") Long bankAccountId)
            throws Exception
    {
        return bankAccountService.deleteBankAccount(bankAccountId);
    }
}





