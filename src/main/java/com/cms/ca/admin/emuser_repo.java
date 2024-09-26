package com.cms.ca.admin;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import com.cms.ca.employee_dto;
import com.cms.ca.login_dto;

@Mapper
public interface emuser_repo {
	
	List<employee_dto> employee_list();
	
	List<employee_dto> employee_search_list(Map<String, String> search_emuser_data);
	
	employee_dto employee_data(String emp_no);
	
	int employee_modify(employee_dto dto);
	
	int add_emuser_login(login_dto lgdto);
	
	Integer match_em_userno(login_dto lgdto);

	int add_emuser_detail(employee_dto emdto);
	
}
