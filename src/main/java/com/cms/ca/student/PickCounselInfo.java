package com.cms.ca.student;

import com.cms.ca.counsel_dto;

public class PickCounselInfo {

	// 학생의 지도교수 상담 신청
	public counsel_dto updateCnslInfo_Professor(counsel_dto dto) {
		dto.setRsvt_dt(dto.getRsvt_dt().replaceAll("-", ""));
		dto.setStts_cd("미승인");
		if (dto.getDscsn_mthd().equals("대면")) {
			dto.setPlc("교수 연구실");
		}
		else {
			dto.setPlc(null);
		}
		return dto;
	}
	
	// 학생의 상담사 상담 신청
	public counsel_dto updateCnslInfo_Counseler(counsel_dto dto) {
		dto.setRsvt_dt(dto.getRsvt_dt().replaceAll("-", ""));
		dto.setStts_cd("승인");
		if (dto.getDscsn_mthd().equals("대면")) {
			dto.setPlc("교수 연구실");
		}
		else {
			dto.setPlc(null);
		}
		return dto;
	}
}
