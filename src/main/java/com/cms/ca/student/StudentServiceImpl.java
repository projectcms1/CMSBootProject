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
import com.cms.ca.view_counsel_dto;

import jakarta.annotation.Resource;

@Service
@Repository("stdnt_service")
public class StudentServiceImpl implements StudentService {

	@Resource(name = "stdnt_repo")
	private StudentRepository stdRepo;
	
	Map<String, String> keymap = null;
	
	@Override
	public student_dto getOneStudent(String stdnt_no) {
		return this.stdRepo.getOneStudent(stdnt_no);
	}

	@Override
	public int getCountData(String stdnt_no) {
		return this.stdRepo.getCountData(stdnt_no);
	}

	@Override
	public int updateStudentInfo(student_dto dto) {
		boolean ck = false;
		this.keymap = new HashMap<>();
		if (dto.getUser_eml_addr() != null && dto.getUser_telno() != null) {
			this.keymap.put("part", "1");
			this.keymap.put("user_eml_addr", dto.getUser_eml_addr());
			this.keymap.put("user_telno", dto.getUser_telno());
			ck = true;
		}
		else if (dto.getUser_zip() != null && dto.getUser_addr() != null) {
			this.keymap.put("part", "2");
			this.keymap.put("user_zip", dto.getUser_zip());
			this.keymap.put("user_addr", dto.getUser_addr());
			this.keymap.put("user_daddr", dto.getUser_daddr());
			ck = true;
		}
		else if (dto.getDlng_bank_nm() != null && dto.getDlng_actno() != null) {
			this.keymap.put("part", "3");
			this.keymap.put("dlng_bank_nm", dto.getDlng_bank_nm());
			this.keymap.put("dlng_actno", dto.getDlng_actno());
			ck = true;
		}
		this.keymap.put("stdnt_no", dto.getStdnt_no());
		int result = (ck) ? this.stdRepo.setStudentInfo(this.keymap) : 0;
		return result;
	}

	@Override
	public int updateCounselCancel(String cancel_aply_sn) {
		return this.stdRepo.setCounselReservCancel(cancel_aply_sn);
	}

	@Override // 상담 예약
	public int addCounselReservation(counsel_dto dto, String professor_number, String counseler_number) {
		dto.setRsvt_dt(dto.getRsvt_dt().replaceAll("-", ""));
		System.out.println("professor_number : " + professor_number + "EOF");
		System.out.println("counseler_number : " + counseler_number + "EOF");
		if (professor_number != null && counseler_number == null) {
			dto.setEmp_no(professor_number);
			dto.setStts_cd("미승인");
			dto.setPlc((dto.getDscsn_mthd().equals("대면")) ? "교수 연구실" : null);
		}
		else if (counseler_number != null && professor_number == null) {
			dto.setEmp_no((counseler_number.equals("all")) ? this.stdRepo.getFreeCounseler() : counseler_number);
			dto.setStts_cd("승인");
			dto.setPlc((dto.getDscsn_mthd().equals("대면")) ? "상담 센터" : null);
		}
		return this.stdRepo.addCounselReservation(dto);
	}

	@Override
	public String getProfessorNumber(String stdnt_no) {
		return this.stdRepo.getEmpID(stdnt_no);
	}

	@Override // 지도 교수 시간표 SELECT
	public String getAllEmpTimeTable(String stdnt_no) {
		String empNo = this.getProfessorNumber(stdnt_no);
		JSONObject jo = new JSONObject();
		JSONArray ja_c = new JSONArray();
		List<view_counsel_dto> ctt_list = this.stdRepo.getAllCnslrTimes();
		for (view_counsel_dto vdto : ctt_list) {
			JSONObject jo_dump = new JSONObject();
			jo_dump.put("aply_sn", vdto.getAply_sn());
			jo_dump.put("emp_no", vdto.getEmp_no());
			jo_dump.put("emp_flnm", vdto.getEmp_flnm());
			jo_dump.put("rsvt_dt", vdto.getRsvt_dt());
			jo_dump.put("hr_se", vdto.getHr_se());
			ja_c.put(jo_dump);
		}
		jo.put("cnslr", ja_c);
		List<counsel_dto> ptt_list = this.stdRepo.getPrfsrTimes(empNo);
		JSONArray ja_p = new JSONArray();
		for (counsel_dto cdto : ptt_list) {
			JSONObject jo_dump = new JSONObject();
			jo_dump.put("aply_sn", cdto.getAply_sn());
			jo_dump.put("rsvt_dt", cdto.getRsvt_dt());
			jo_dump.put("hr_se", cdto.getHr_se());
			ja_p.put(jo_dump);
		}
		jo.put("prfs", ja_p);
		return jo.toString();
	}

	@Override
	public List<employee_dto> getAllCounseler() {
		return this.stdRepo.getAllCounseler();
	}

	@Override
	public List<view_counsel_dto> getAllListCounsel(String stdnt_no, Integer pno, Integer dno) {
		this.keymap = new HashMap<>();
		this.keymap.put("part", "1");
		this.keymap.put("stdnt_no", stdnt_no);
		this.keymap.put("pageno", String.valueOf(pno));
		this.keymap.put("datano", String.valueOf(dno));
		List<view_counsel_dto> result = this.stdRepo.getListCounsel(this.keymap);
		for (view_counsel_dto vcdto : result) {
			vcdto.setRsvt_dt(vcdto.getRsvt_dt().substring(0, 4) + "/" + vcdto.getRsvt_dt().substring(4, 6) + "/" + vcdto.getRsvt_dt().substring(6,8));
			vcdto.setRoundCount(this.stdRepo.getCountRound(vcdto.getAply_sn()));
		}
		return result;
	}

	@Override
	public List<view_counsel_dto> getAllListCounselSearch(String stdnt_no, Integer pno, Integer dno, String search_part, String search_word) {
		this.keymap = new HashMap<>();
		this.keymap.put("part", "0");
		this.keymap.put("stdnt_no", stdnt_no);
		this.keymap.put("pageno", String.valueOf(pno));
		this.keymap.put("datano", String.valueOf(dno));
		this.keymap.put("search_part", search_part);
		this.keymap.put("search_word", search_word);
		List<view_counsel_dto> result = this.stdRepo.getListCounsel(this.keymap);
		for (view_counsel_dto vcdto : result) {
			vcdto.setRsvt_dt(vcdto.getRsvt_dt().substring(0, 4) + "/" + vcdto.getRsvt_dt().substring(4, 6) + "/" + vcdto.getRsvt_dt().substring(6,8));
			vcdto.setRoundCount(this.stdRepo.getCountRound(vcdto.getAply_sn()));
		}
		return result;
	}

	@Override
	public List<view_counsel_dto> getListModalData(String aply_sn) {
		return this.stdRepo.getListCounselInfo(aply_sn);
	}

	@Override
	public List<view_counsel_dto> getAllListNonApproveCounsel(String stdnt_no) {
		this.keymap = new HashMap<>();
		this.keymap.put("part", "2");
		this.keymap.put("stdnt_no", stdnt_no);
		List<view_counsel_dto> result = this.stdRepo.getListCounsel(this.keymap);
		for (view_counsel_dto vcdto : result) {
			vcdto.setRsvt_dt(vcdto.getRsvt_dt().substring(0, 4) + "/" + vcdto.getRsvt_dt().substring(4, 6) + "/" + vcdto.getRsvt_dt().substring(6,8));
		}
		return result;
	}

	@Override
	public List<view_counsel_dto> getAllListApproveCounsel(String stdnt_no) {
		this.keymap = new HashMap<>();
		this.keymap.put("part", "3");
		this.keymap.put("stdnt_no", stdnt_no);
		List<view_counsel_dto> result = this.stdRepo.getListCounsel(this.keymap);
		for (view_counsel_dto vcdto : result) {
			vcdto.setRsvt_dt(vcdto.getRsvt_dt().substring(0, 4) + "/" + vcdto.getRsvt_dt().substring(4, 6) + "/" + vcdto.getRsvt_dt().substring(6,8));
		}
		return result;
	}

	@Override
	public List<view_counsel_dto> getAllListCounseling(String stdnt_no) {
		this.keymap = new HashMap<>();
		this.keymap.put("part", "4");
		this.keymap.put("stdnt_no", stdnt_no);
		List<view_counsel_dto> result = this.stdRepo.getListCounsel(this.keymap);
		for (view_counsel_dto vcdto : result) {
			vcdto.setRsvt_dt(vcdto.getRsvt_dt().substring(0, 4) + "/" + vcdto.getRsvt_dt().substring(4, 6) + "/" + vcdto.getRsvt_dt().substring(6,8));
			//vcdto.setRoundCount(this.stdRepo.getCountRound(vcdto.getAply_sn()));
		}
		return result;
	}
}
