package com.cms.ca.student;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.cms.ca.student_dto;

@Mapper
@Repository("stdnt_repo")
public interface StudentRepository {

	student_dto getOneStudent(String stdnt_no);
}
