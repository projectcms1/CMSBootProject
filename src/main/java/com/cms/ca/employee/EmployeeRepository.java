package com.cms.ca.employee;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.cms.ca.employee_dto;

@Mapper
@Repository("empy_repo")
public interface EmployeeRepository {

	employee_dto getEmployeeInfo(String emp_no);
	int updatePersonalEmployeeInfo(employee_dto emp_dto);
	int updateAddrEmployeeInfo(employee_dto emp_dto);
	int updateBankEmployeeInfo(employee_dto emp_dto);
}
