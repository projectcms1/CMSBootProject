package com.cms.ca.student;

import java.util.List;

import com.cms.ca.counsel_dto;
import com.cms.ca.employee_dto;
import com.cms.ca.student_dto;
import com.cms.ca.view_counsel_dto;

public interface StudentService {

	student_dto getOneStudent(String stdnt_no);
	
	int getCountData(String stdnt_no);
	
	int updateStudentInfo(student_dto dto);
	
	int updateCounselCancel(String cancel_aply_sn);
	
	int addCounselReservation(counsel_dto dto, String professor_number, String counseler_number);
	
	String getProfessorNumber(String stdnt_no);
	
	String getAllEmpTimeTable(String stdnt_no);
	
	List<employee_dto> getAllCounseler();
	
	List<view_counsel_dto> getAllListCounsel(String stdnt_no);
	
	List<view_counsel_dto> getAllListCounselSearch(String stdnt_no, String search_part, String search_word);
	
	List<view_counsel_dto> getListModalData(String aply_sn);
	
	List<view_counsel_dto> getAllListNonApproveCounsel(String stdnt_no);
	
	List<view_counsel_dto> getAllListApproveCounsel(String stdnt_no);
	
	List<view_counsel_dto> getAllListCounseling(String stdnt_no);
}
