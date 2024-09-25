package com.cms.ca.admin;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.cms.ca.employee_dto;
import com.cms.ca.student_dto;

@Mapper
public interface emuser_repo {
	
	List<employee_dto> employee_list();
}
