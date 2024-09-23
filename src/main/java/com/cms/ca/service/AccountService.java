package com.cms.ca.service;

import com.cms.ca.model.employee_dto;
import com.cms.ca.model.login_dto;
import com.cms.ca.model.student_dto;

public interface AccountService {
    login_dto findAccountByLgnId(String lgn_id);
    employee_dto findEmployeeByAccountId(Integer user_no);
    student_dto findStudentByAccountId(Integer user_no);
}
