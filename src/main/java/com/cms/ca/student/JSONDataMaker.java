package com.cms.ca.student;

import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;

import com.cms.ca.selfTestAnswer_dto;
import com.cms.ca.selfTestQitem_dto;
import com.cms.ca.selfTestResult_dto;
import com.cms.ca.view_counsel_dto;

public class JSONDataMaker {

	public String makeSelfTestData(List<selfTestQitem_dto> qitemList, List<selfTestAnswer_dto> answerList, List<selfTestResult_dto> resultList) {
		JSONObject mainDataJSON = new JSONObject();
		
		JSONArray ja_qitem = new JSONArray();
		for (selfTestQitem_dto qdto : qitemList) {
			JSONObject jo_dump = new JSONObject();
			jo_dump.put("qitem_no", qdto.getQitem_no());
			jo_dump.put("qitem_flnm", qdto.getQitem_flnm());
			JSONArray ja_answer = new JSONArray();
			for (selfTestAnswer_dto adto : answerList) {
				if (adto.getQitem_no().equals(qdto.getQitem_no())) {
					JSONObject answer_dump = new JSONObject();
					answer_dump.put("ans_no", adto.getAns_no());
					answer_dump.put("ans_flnm", adto.getAns_flnm());
					answer_dump.put("scr", adto.getScr());
					ja_answer.put(answer_dump);
				}
			}
			jo_dump.put("qitem_answer", ja_answer);
			ja_qitem.put(jo_dump);
		}
		mainDataJSON.put("QitemData", ja_qitem);
		
		JSONArray ja_result = new JSONArray();
		for (selfTestResult_dto rdto : resultList) {
			JSONObject jo_dump = new JSONObject();
			jo_dump.put("rslt_expln_no", rdto.getRslt_expln_no());
			jo_dump.put("expln_cn", rdto.getExpln_cn());
			jo_dump.put("se_scr", rdto.getSe_scr());
			ja_result.put(jo_dump);
		}
		mainDataJSON.put("ResultData", ja_result);
		
		return mainDataJSON.toString();
	}
	
	public String makeCounselDetail(List<view_counsel_dto> data) {
		JSONArray ja = new JSONArray(); // 리스트
		for (view_counsel_dto vcdto : data) {
			JSONObject jo_dump = new JSONObject();
			jo_dump.put("aply_sn", vcdto.getAply_sn());
			jo_dump.put("bfr_aply_sn", vcdto.getBfr_aply_sn());
			jo_dump.put("stdnt_no", vcdto.getStdnt_no());
			jo_dump.put("stdnt_flnm", vcdto.getStdnt_flnm());
			jo_dump.put("emp_flnm", vcdto.getEmp_flnm());
			jo_dump.put("mng_authrt", this.setMngAuthrt(vcdto.getMng_authrt()));
			jo_dump.put("rsvt_dt", this.dateStyle(vcdto.getRsvt_dt()));
			jo_dump.put("hr_se", vcdto.getHr_se() + "교시");
			jo_dump.put("plc", this.setPlaceName(vcdto.getPlc()));
			jo_dump.put("stts_cd", vcdto.getStts_cd());
			jo_dump.put("dscsn_knd", vcdto.getDscsn_knd() + "상담");
			jo_dump.put("dscsn_mthd", vcdto.getDscsn_mthd() + "상담");
			jo_dump.put("aply_dt", vcdto.getAply_dt());
			ja.put(jo_dump);
		}
		return ja.toString();
	}
	
	private String dateStyle(String d) {
		return d.substring(0, 4) + "년 " + d.substring(4, 6) + "월 " + d.substring(6, 8) + "일";
	}
	
	private String setMngAuthrt(String m) {
		return (m.equals("P")) ? "지도교수" : "상담사";
	}
	
	private String setPlaceName(String p) {
		return (p == null) ? "-" : p;
	}
}
