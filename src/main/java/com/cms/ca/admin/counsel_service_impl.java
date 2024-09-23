package com.cms.ca.admin;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.ca.view_counsel_dto;



@Service
public class counsel_service_impl implements counsel_service {

	@Autowired
	private counsel_repo counsel_repo;
	
	Map<String, String> keymap = null;
	
	@Override
	public List<view_counsel_dto> counsel_list() {
		this.keymap = new HashMap<>();
		this.keymap.put("part", "5");
		List<view_counsel_dto> result = this.counsel_repo.counsel_list(this.keymap);
		for (view_counsel_dto vcdto : result) {
			vcdto.setRsvt_dt(vcdto.getRsvt_dt().substring(0, 4) + "/" + vcdto.getRsvt_dt().substring(4, 6) + "/" + vcdto.getRsvt_dt().substring(6,8));
			vcdto.setRoundCount(this.counsel_repo.getCountRound(vcdto.getAply_sn()));
		}
		return result;
	}
	
}
