package com.cms.ca.student;

import java.util.List;

import com.cms.ca.counsel_dto;
import com.cms.ca.employee_dto;
import com.cms.ca.student_dto;

public interface StudentService {

	student_dto getOneStudent(String stdnt_no);
	
	int addCounselReservation(counsel_dto dto);
	
	String getProfessorNumber(String std_no);
	
	String getPrfsTimeTable(String std_no);
	
	List<employee_dto> getAllCounseler();
}
