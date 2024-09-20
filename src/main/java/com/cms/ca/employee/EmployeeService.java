package com.cms.ca.employee;

import java.util.List;

import com.cms.ca.counsel_dto;
import com.cms.ca.employee_dto;

public interface EmployeeService {

	employee_dto getEmployeeInfo(String emp_no);
	int updateEmployeeInfo(employee_dto emp_dto);
	String getStdntNameFromStdNo(String stdnt_no);
	int addCounsel(counsel_dto csl_dto, String emp_no);
	List<counsel_dto> getAllCounsel(String emp_no);
	int getAllCounselCount(String emp_no);
}
