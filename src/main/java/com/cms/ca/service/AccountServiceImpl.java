package com.cms.ca.service;

import com.cms.ca.employee_dto;
import com.cms.ca.login_dto;
import com.cms.ca.student_dto;
import com.cms.ca.mapper.AccountMapper;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountMapper accountMapper;

    private static final int MAX_ATTEMPTS = 5;	//최대 시도 횟수
    private final Map<String, Integer> attemptsCache = new HashMap<>();	//메모리 내 로그인 시도 횟수 캐시
    
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

	@Override
	public void lockAccount(String lgn_id) {
		
			int attempts = attemptsCache.getOrDefault(lgn_id, 0)+1;
			
			if(attempts >= MAX_ATTEMPTS) {
				accountMapper.lockAccount(lgn_id);//계정잠금
				System.out.println("사용자 차단" + lgn_id);
				attemptsCache.remove(lgn_id); //잠금 처리 후 캐시 삭제
			}else {
				attemptsCache.put(lgn_id, attempts);
			}		
		System.out.println("login_test");
	}
	
	@Override
	public String isLocked(String lgn_id) {
		return accountMapper.isLocked(lgn_id);
	}
	
	public String login(String lgn_id,String pswd) {
		//계정 잠금 상태 확인
		String lockstatus = isLocked(lgn_id);
		if("Y".equals(lockstatus)) {
			return "계정잠금";
		}
		//계정 조회
		login_dto account = findAccountByLgnId(lgn_id);
		if(account == null) {
			return "사용자가 존재하지 않습니다.";
		}
		//비밀번호 검증
		if(!account.getPswd().equals(pswd)) {
			lockAccount(lgn_id);
			return "로그인실패";			
		}
		//로그인 성공 시 캐시 초기화
		attemptsCache.remove(lgn_id);
		return "로그인 성공";
	}
}
