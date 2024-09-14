package com.cms.ca.student;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
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

	@Override
	public int updateStudentInfo(student_dto dto) {
		boolean ck = false;
		Map<String, String> keymap = new HashMap<>();
		if (dto.getUser_eml_addr() != null && dto.getUser_telno() != null) {
			keymap.put("part", "1");
			keymap.put("user_eml_addr", dto.getUser_eml_addr());
			keymap.put("user_telno", dto.getUser_telno());
			ck = true;
		}
		else if (dto.getUser_zip() != null && dto.getUser_addr() != null) {
			keymap.put("part", "2");
			keymap.put("user_zip", dto.getUser_zip());
			keymap.put("user_addr", dto.getUser_addr());
			keymap.put("user_daddr", dto.getUser_daddr());
			ck = true;
		}
		else if (dto.getDlng_bank_nm() != null && dto.getDlng_actno() != null) {
			keymap.put("part", "3");
			keymap.put("dlng_bank_nm", dto.getDlng_bank_nm());
			keymap.put("dlng_actno", dto.getDlng_actno());
			ck = true;
		}
		keymap.put("stdnt_no", dto.getStdnt_no());
		int result = (ck) ? this.stdRepo.setStudentInfo(keymap) : 0;
		return result;
	}

	@Override // 상담 예약
	public int addCounselReservation(counsel_dto dto, String professor_number, String counseler_number) {
		dto.setRsvt_dt(dto.getRsvt_dt().replaceAll("-", ""));
		if (professor_number != null && counseler_number == null) {
			dto.setEmp_no(professor_number);
			dto.setStts_cd("미승인");
			dto.setPlc((dto.getDscsn_mthd().equals("대면")) ? "교수 연구실" : null);
		}
		else if (counseler_number != null && professor_number == null) {
			dto.setEmp_no(counseler_number);
			dto.setStts_cd("승인");
			dto.setPlc((dto.getDscsn_mthd().equals("대면")) ? "상담 센터" : null);
		}
		return this.stdRepo.addCounselReservation(dto);
	}

	@Override
	public String getProfessorNumber(String std_no) {
		return this.stdRepo.getEmpID(std_no);
	}

	@Override // 지도 교수 시간표 SELECT
	public String getPrfsTimeTable(String std_no) {
		String empNo = this.getProfessorNumber(std_no);
		JSONObject jo = new JSONObject();
		JSONArray ja = new JSONArray();
		List<counsel_dto> ptt_list = this.stdRepo.getPrfsTimes(empNo);
		System.out.println(ptt_list);
		for (counsel_dto cdto : ptt_list) {
			JSONObject jo_dump = new JSONObject();
			jo_dump.put("aply_sn", cdto.getAply_sn());
			jo_dump.put("rsvt_dt", cdto.getRsvt_dt());
			jo_dump.put("hr_se", cdto.getHr_se());
			ja.put(jo_dump);
		}
		jo.put("prfs", ja);
		return jo.toString();
	}

	@Override
	public List<employee_dto> getAllCounseler() {
		return this.stdRepo.getAllCounseler();
	}

}
