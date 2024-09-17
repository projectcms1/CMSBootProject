package com.secu.test.demo.service;

import com.secu.test.demo.model.Account;
import com.secu.test.demo.model.Employee;
import com.secu.test.demo.model.Student;

public interface AccountService {
    Account findAccountByLgnId(String lgnId);
    Employee findEmployeeByAccountId(int userNo);
    Student findStudentByAccountId(int userNo);
    void createAccountWithStudent(Account account, Student student);
    void createAccountWithEmployee(Account account, Employee employee);
    void updateAccount(Account account);
    void deleteAccount(int userNo);
}
