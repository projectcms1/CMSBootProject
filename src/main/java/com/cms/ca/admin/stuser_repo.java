package com.cms.ca.admin;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.cms.ca.student_dto;

@Mapper
public interface stuser_repo {
	
	List<student_dto> student_list();
	
}
