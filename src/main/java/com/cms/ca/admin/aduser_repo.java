package com.cms.ca.admin;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.cms.ca.employee_dto;

@Mapper
public interface aduser_repo {
	
	List<employee_dto> admin_list();
	
	List<employee_dto> admin_search_list(Map<String, String> search_adminuser_data);
}
