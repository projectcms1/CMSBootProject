package com.cms.ca.student;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.cms.ca.selfTestAnswer_dto;
import com.cms.ca.selfTestInfo_dto;
import com.cms.ca.selfTestQitem_dto;
import com.cms.ca.selfTestResult_dto;

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
}
