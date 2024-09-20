package com.cms.ca.employee;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.cms.ca.counsel_dto;
import com.cms.ca.employee_dto;

@Mapper
@Repository("empy_repo")
public interface EmployeeRepository {

	employee_dto getEmployeeInfo(String emp_no);
	int updatePersonalEmployeeInfo(employee_dto emp_dto);
	int updateAddrEmployeeInfo(employee_dto emp_dto);
	int updateBankEmployeeInfo(employee_dto emp_dto);
	String getStdntNameFromStdNo(String stdnt_no);
	int addCounsel(counsel_dto csl_dto);
	List<counsel_dto> getAllCounsel(String emp_no);
	int getAllCounselCount(String emp_no);
}
