package com.cms.ca.student;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.cms.ca.counsel_dto;
import com.cms.ca.employee_dto;
import com.cms.ca.student_dto;
import com.cms.ca.view_counsel_dto;

@Mapper
@Repository("stdnt_repo")
public interface StudentRepository {

	student_dto getOneStudent(String stdnt_no);
	
	String getEmpID(String stdnt_no);
	
	List<employee_dto> getAllCounseler();
	
	List<view_counsel_dto> getAllCnslrTimes();
	
	List<counsel_dto> getPrfsTimes(String emp_no);
	
	List<view_counsel_dto> getListCounsel(Map<String, String> keymap);
	
	int getCountRound(int aply_sn);
	
	int addCounselReservation(counsel_dto dto);
	
	int setStudentInfo(Map<String, String> keymap);
	
	int setCounselReservCancel(String aply_sn);
}
