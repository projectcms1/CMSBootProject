package com.cms.ca.employee;

import java.util.List;

import com.cms.ca.counsel_dto;
import com.cms.ca.employee_dto;
import com.cms.ca.search_dto;
import com.cms.ca.view_counsel_dto;

public interface EmployeeService {

	employee_dto getEmployeeInfo(String emp_no);
	int updateEmployeeInfo(employee_dto emp_dto);
	String getStdntNameFromStdNo(String stdnt_no);
	int addCounsel(counsel_dto csl_dto, String emp_no);
	List<view_counsel_dto> getAllCounsel(String emp_no, String stts_cd, search_dto search_dto);
	int getAllCounselCount(String emp_no, String stts_cd, search_dto search_dto);
	List<view_counsel_dto> getOneCounsel(int aply_sn);
	List<view_counsel_dto> getPastCounsel(String emp_no, search_dto search_dto);
	int updateCounselStatus(counsel_dto csl_dto);
	String getCounselResult(int aply_sn);
}
