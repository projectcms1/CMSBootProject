package com.cms.ca.employee;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.cms.ca.counsel_dto;
import com.cms.ca.employee_dto;
import com.cms.ca.view_counsel_dto;

@Mapper
@Repository("empy_repo")
public interface EmployeeRepository {

	employee_dto getEmployeeInfo(String emp_no);
	int updatePersonalEmployeeInfo(employee_dto emp_dto);
	int updateAddrEmployeeInfo(employee_dto emp_dto);
	int updateBankEmployeeInfo(employee_dto emp_dto);
	String getStdntNameFromStdNo(String stdnt_no);
	int addCounsel(counsel_dto csl_dto);
	List<view_counsel_dto> getAllCounsel(@Param("emp_no") String emp_no, @Param("offset") int offset, @Param("size") int size);
	int getAllCounselCount(String emp_no);
}
