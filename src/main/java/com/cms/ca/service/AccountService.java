package com.cms.ca.service;

import com.cms.ca.employee_dto;
import com.cms.ca.login_dto;
import com.cms.ca.student_dto;

public interface AccountService {
    login_dto findAccountByLgnId(String lgn_id);
    employee_dto findEmployeeByAccountId(Integer user_no);
    student_dto findStudentByAccountId(Integer user_no);
    
    void lockAccount(String lgn_id);	//로그인 실패 처리
    String isLocked(String lgn_id);	//계정 잠금 여부 확인
    String login(String lgn_id, String pswd);	//로그인 처리 메서드 추가
}
