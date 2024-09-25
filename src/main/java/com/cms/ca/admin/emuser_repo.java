package com.cms.ca.admin;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.cms.ca.employee_dto;
import com.cms.ca.login_dto;

@Mapper
public interface emuser_repo {
	
	List<employee_dto> employee_list();
	
	employee_dto employee_data(String emp_no);
	
	int add_emuser_login(login_dto lgdto);
	
	Integer match_em_userno(login_dto lgdto);

	int add_emuser_detail(employee_dto emdto);
	
}
