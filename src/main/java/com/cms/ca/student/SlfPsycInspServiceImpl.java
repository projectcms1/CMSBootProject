package com.cms.ca.student;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.cms.ca.selfTestAnswer_dto;
import com.cms.ca.selfTestInfo_dto;
import com.cms.ca.selfTestQitem_dto;
import com.cms.ca.selfTestResult_dto;
import com.cms.ca.selfTestUserResult_dto;
import com.cms.ca.selfTestUserStats_dto;

import jakarta.annotation.Resource;

@Service
@Repository("insp_service")
public class SlfPsycInspServiceImpl implements SlfPsycInspService {

	@Resource(name = "insp_repo")
	private SlfPsycInspRepository inspRepo;

	@Override
	public List<selfTestInfo_dto> getAllListInsp() {
		return this.inspRepo.getAllListInsp();
	}

	@Override
	public String getAllDataOfOneInsp(String insp_no) {
		List<selfTestQitem_dto> qitemList = this.inspRepo.getAllListQitem(insp_no);
		List<selfTestAnswer_dto> answerList = this.inspRepo.getAllListAnswer(insp_no);
		List<selfTestResult_dto> resultList = this.inspRepo.getAllListResult(insp_no);
		return new JSONDataMaker().makeSelfTestData(qitemList, answerList, resultList);
	}

	@Override
	public String saveUserTestResult(String stdnt_no, String insp_no, Map<String, Map<String, String>> userData) {
		String result = "";
		selfTestUserResult_dto rdto = new selfTestUserResult_dto();
		rdto.setStdnt_no(stdnt_no);
		rdto.setInsp_no(insp_no);
		Integer sum = 0;
		for (String mkey : userData.keySet()) {
			sum += Integer.parseInt(userData.get(mkey).get("score"));
		}
		rdto.setInsp_scr_sum(sum);
		int rrslt = this.inspRepo.addDataInResultTable(rdto);
		if (rrslt > 0) {
			selfTestUserStats_dto sdto = new selfTestUserStats_dto();
			sdto.setInsp_rslt_no(this.inspRepo.getInspRsltNo(rdto));
			sdto.setStdnt_no(stdnt_no);
			sdto.setInsp_no(insp_no);
			int srslt = 0;
			for (String mkey : userData.keySet()) {
				sdto.setQitem_no(Integer.parseInt(mkey));
				sdto.setAns_no(userData.get(mkey).get("value"));
				srslt += this.inspRepo.addDataInStatsTable(sdto);
			}
			if (srslt == userData.size()) {
				result = "ok";
			}
			else {
				result = "error";
			}
		}
		else {
			result = "error";
		}
		return result;
	}

	@Override
	public String getUserSelfTestData(String stdnt_no, String insp_no) {
		selfTestUserResult_dto rdto = new selfTestUserResult_dto();
		rdto.setStdnt_no(stdnt_no);System.out.println(rdto.getStdnt_no());
		rdto.setInsp_no(insp_no);System.out.println(rdto.getInsp_no());
		selfTestUserResult_dto ndto = this.inspRepo.getUserResultData(rdto);
		List<selfTestResult_dto> resultList = this.inspRepo.getAllListResult(insp_no);
		String expln_text = "";
		for (selfTestResult_dto dto_dump : resultList) {
			if (ndto.getInsp_scr_sum() >= dto_dump.getSe_scr()) {
				expln_text = dto_dump.getExpln_cn();
			}
		}
		List<selfTestUserStats_dto> statsList = this.inspRepo.getUserAnswerData(rdto);
		return new JSONDataMaker().makeUserResultData(statsList, ndto.getInsp_dt(), rdto.getInsp_scr_sum(), expln_text);
	}
}
