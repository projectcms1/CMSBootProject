package com.cms.ca.nsbjt;

import java.util.List;

import com.cms.ca.extra_dto;

public interface ExtraService {
	extra_dto getOneProgram(Long pgmNo);
	List<extra_dto> getAllPrograms();	//모든 프로그램 조회
	List<extra_dto> Bycategory(String ctgryNm);		//카테고리 별
	
	int saveProgramApplication(extra_dto application);
	List<extra_dto> getMyPrograms(Integer stdntNo);
	
	void deleteProgramApplication(Integer pgmAplySn, Integer stdntNo);	//신청 취소(삭제)
	
}
