package com.cms.ca.admin;

import java.util.List;

import com.cms.ca.employee_dto;

public interface emuser_service {
	List<employee_dto> employee_list();
	
	employee_dto employee_data(String emp_no);
	
	int employee_modify(employee_dto dto);
	
	int add_emuser_detail(employee_dto emdto, String entrance_year);
}


