package com.cms.ca.service;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.cms.ca.mapper.StudentRepository;
import com.cms.ca.model.student_dto;

import jakarta.annotation.Resource;

@Service
@Repository("stdnt_service")
public class StudentServiceImpl implements StudentService {
	@Resource(name = "stdnt_repo")
	private StudentRepository stdRepo;


	@Override
	public student_dto getOneStudent(String stdnt_no) {
		return this.stdRepo.getOneStudent(stdnt_no);
	}

	
}
