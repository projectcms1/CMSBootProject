package com.cms.ca.student;

import java.util.List;

import org.json.JSONObject;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.cms.ca.counsel_dto;
import com.cms.ca.employee_dto;
import com.cms.ca.student_dto;

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

	@Override // 상담 예약
	public int addCounselReservation(counsel_dto dto) {
		return this.stdRepo.addCounselReservation(dto);
	}
	
	@Override
	public String getProfessorNumber(String std_no) {
		return this.stdRepo.getEmpID(std_no);
	}

	@Override // 지도 교수 시간표 SELECT
	public String getPrfsTimeTable(String std_no) {
		String empNo = this.getProfessorNumber(std_no);
		List<counsel_dto> ptt_list = this.stdRepo.getPrfsTimes(empNo);
		for (counsel_dto cdto : ptt_list) {
			JSONObject jo = new JSONObject();
			//jo.put("", "")
		}
		return null;
	}

	@Override
	public List<employee_dto> getAllCounseler() {
		return this.stdRepo.getAllCounseler();
	}

}
