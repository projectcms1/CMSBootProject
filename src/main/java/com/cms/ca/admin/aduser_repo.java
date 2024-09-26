package com.cms.ca.admin;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.cms.ca.employee_dto;

@Mapper
public interface aduser_repo {
	
	List<employee_dto> admin_list();
}
