package com.cms.ca.service;

import com.cms.ca.employee_dto;
import com.cms.ca.login_dto;
import com.cms.ca.student_dto;
import com.cms.ca.mapper.AccountMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountMapper accountMapper;

    @Override
    @Transactional(readOnly = true)
    public login_dto findAccountByLgnId(String lgn_id) {
        //return accountMapper.findAccountByUsername(lgnId);
        login_dto account = accountMapper.findAccountByUsername(lgn_id);
        System.out.println(lgn_id);
        System.out.println("Mapper returned: " + account);
        System.out.println("UserNo: " + account.getUser_no() + ", LgnId: " + account.getLgn_id());
        return account;
    }

    @Override
    public employee_dto findEmployeeByAccountId(Integer user_no) {
    	System.out.println("em......"+user_no);
        return accountMapper.findEmployeeByAccountId(user_no);
    }


	@Override
	public student_dto findStudentByAccountId(Integer user_no) {		
		return accountMapper.findStudentByAccountId(user_no);
	}

   
}
