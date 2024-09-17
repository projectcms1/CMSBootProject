package com.secu.test.demo.service;

import com.secu.test.demo.mapper.AccountMapper;
import com.secu.test.demo.model.Account;
import com.secu.test.demo.model.Employee;
import com.secu.test.demo.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountMapper accountMapper;

    @Override
    @Transactional(readOnly = true)
    public Account findAccountByLgnId(String lgnId) {
        //return accountMapper.findAccountByUsername(lgnId);
        Account account = accountMapper.findAccountByUsername(lgnId);
        System.out.println(lgnId);
        System.out.println("Mapper returned: " + account);
        System.out.println("UserNo: " + account.getUserNo() + ", LgnId: " + account.getLgnId());
        return account;
    }

    @Override
    public Employee findEmployeeByAccountId(int userNo) {
        return accountMapper.findEmployeeByAccountId(userNo);
    }

    @Override
    public Student findStudentByAccountId(int userNo) {
        return accountMapper.findStudentByAccountId(userNo);
    }

    @Override
    @Transactional
    public void createAccountWithStudent(Account account, Student student) {
        accountMapper.insertAccount(account);
        student.setUserNo(account.getUserNo());
        accountMapper.insertStudent(student);
    }

    @Override
    @Transactional
    public void createAccountWithEmployee(Account account, Employee employee) {
        accountMapper.insertAccount(account);
        employee.setUserNo(account.getUserNo());
        accountMapper.insertEmployee(employee);
    }

    @Override
    public void updateAccount(Account account) {
        accountMapper.updateAccount(account);
    }

    @Override
    @Transactional
    public void deleteAccount(int userNo) {
        accountMapper.deleteStudent(userNo);
        accountMapper.deleteEmployee(userNo);
        accountMapper.deleteAccount(userNo);
    }
}
