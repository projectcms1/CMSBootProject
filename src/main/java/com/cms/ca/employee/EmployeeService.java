package com.cms.ca.employee;

import com.cms.ca.employee_dto;

public interface EmployeeService {

	employee_dto getEmployeeInfo(String emp_no);
	int updatePersonalEmployeeInfo(employee_dto emp_dto);
	int updateAddrEmployeeInfo(employee_dto emp_dto);
	int updateBankEmployeeInfo(employee_dto emp_dto);
	
}
