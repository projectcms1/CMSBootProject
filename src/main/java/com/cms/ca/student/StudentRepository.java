package com.cms.ca.student;

import org.apache.ibatis.annotations.Mapper;

import com.cms.ca.student_dto;

@Mapper
public interface StudentRepository {

	student_dto getOneStudent(String stdnt_no);
}
