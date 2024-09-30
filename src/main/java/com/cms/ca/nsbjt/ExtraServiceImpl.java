package com.cms.ca.nsbjt;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.ca.extra_dto;

@Service
public class ExtraServiceImpl implements ExtraService{
	
	@Autowired
	ExtraRepository ExtraRepository; 
	
	//프로그램번호로 정보 조회하기
	@Override
	public extra_dto getOneProgram(Long pgmNo) {
		System.out.println("test");
		return ExtraRepository.getOneProgram(pgmNo);
	}
	//프로그램 전체 출력
	@Override
	public List<extra_dto> getAllPrograms() {		
		return ExtraRepository.getAllPrograms();
	}
	//카테고리 별 프로그램 출력
	@Override
	public List<extra_dto> Bycategory(String ctgryNm) {
		return ExtraRepository.Bycategory(ctgryNm);
	}
	//프로그램 신청/저장
	@Override
	public void saveProgramApplication(extra_dto application) {
		ExtraRepository.saveProgramApplication(application);
		
	}
	
	@Override
	public List<extra_dto> getMyPrograms(Integer stdntNo) {
		 return ExtraRepository.findProgramsByStudent(stdntNo);
	}
}
