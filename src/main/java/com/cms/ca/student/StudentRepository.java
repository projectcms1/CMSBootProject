package com.cms.ca.student;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.cms.ca.counsel_dto;
import com.cms.ca.employee_dto;
import com.cms.ca.student_dto;

@Mapper
@Repository("stdnt_repo")
public interface StudentRepository {

	student_dto getOneStudent(String stdnt_no);
	
	String getEmpID(String stdnt_no);
	
	List<employee_dto> getAllCounseler();
	
	List<counsel_dto> getPrfsTimes(String emp_no);
	
	int addCounselReservation(counsel_dto dto);
}
