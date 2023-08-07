package com.example.bankAccountApp.repository;


import com.example.bankAccountApp.model.BankAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BankAccountRepository extends JpaRepository<BankAccount,Long > {
}
