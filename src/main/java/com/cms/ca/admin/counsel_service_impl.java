package com.cms.ca.admin;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.ca.counsel_dto;
import com.cms.ca.student_dto;
import com.cms.ca.view_counsel_dto;



@Service
public class counsel_service_impl implements counsel_service {

	@Autowired
	private counsel_repo counsel_repo;
	
	
	@Override
	public List<view_counsel_dto> counsel_list() {
		List<view_counsel_dto> result = this.counsel_repo.counsel_list();
		for (view_counsel_dto vcdto : result) {
			vcdto.setRsvt_dt(vcdto.getRsvt_dt().substring(0, 4) + "/" + vcdto.getRsvt_dt().substring(4, 6) + "/" + vcdto.getRsvt_dt().substring(6,8));
			vcdto.setRoundCount(this.counsel_repo.getCountRound(vcdto.getAply_sn()));
		}
		return result;
	}

	@Override
	public List<view_counsel_dto> counsel_detail(String aply_sn) {
		List<view_counsel_dto> result = this.counsel_repo.counsel_detail(aply_sn);
		for (view_counsel_dto dto : result) {
			dto.setPlc((dto.getPlc() == null) ? "-" : dto.getPlc());
			dto.setRsvt_dt(dto.getRsvt_dt().substring(0, 4) + "-" + dto.getRsvt_dt().substring(4, 6) + "-" + dto.getRsvt_dt().substring(6, 8));
		}
		return result;
	}

	@Override
	public List<view_counsel_dto> counsel_search_list(String search_part, String search_word) {
		
		Map<String, String> mp = new HashMap<>();
		mp.put("search_part", search_part);
		mp.put("search_word", search_word);
		List<view_counsel_dto> counsellist_one_data = this.counsel_repo.counsel_search_list(mp);
		
		return counsellist_one_data;
	}

	@Override
	public int addcounsel(counsel_dto csdto) {
		String emp_stts = this.counsel_repo.getEmpStts(csdto.getEmp_no());
		csdto.setRsvt_dt(csdto.getRsvt_dt().replaceAll("-", ""));
		csdto.setPlc(this.getCounselPlace(emp_stts, csdto.getDscsn_mthd()));
		return this.counsel_repo.counsel_add(csdto);
	}

	@Override
	public int update_counsel(counsel_dto csdto, String mng_authrt) {
		csdto.setRsvt_dt(csdto.getRsvt_dt().replaceAll("-", ""));
		csdto.setPlc(this.getCounselPlace(mng_authrt, csdto.getDscsn_mthd()));
		return this.counsel_repo.update_counsel(csdto);
	}
	
	// 상담 장소를 만드는 메소드 (DTO에 있으면 좋음)
	private String getCounselPlace(String mng_authrt, String dscsn_mthd) {
		String result = "";
		if (mng_authrt.equals("P")) {
			result = dscsn_mthd.equals("대면") ? "교수 연구실" : null;
		}
		else if (mng_authrt.equals("C")) {
			result = dscsn_mthd.equals("대면") ? "상담 센터" : null;
		}
		System.out.println("result : "+result);
		return result;
	}
}
