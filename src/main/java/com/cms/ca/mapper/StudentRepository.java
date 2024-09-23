package com.cms.ca.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.cms.ca.model.student_dto;

@Mapper
@Repository("stdnt_repo")
public interface StudentRepository {
	student_dto getOneStudent(String stdnt_no);
}
