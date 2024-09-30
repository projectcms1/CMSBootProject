package com.cms.ca.nsbjt;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.ca.extra_dto;

@Service
public class ExtraServiceImpl implements ExtraService{
	
	@Autowired
	ExtraRepository ExtraRepository; 
	
	@Override
	public extra_dto getOneProgram(Long pgmNo) {
		System.out.println("test");
		return ExtraRepository.getOneProgram(pgmNo);
	}
	@Override
	public List<extra_dto> getAllPrograms() {		
		return ExtraRepository.getAllPrograms();
	}
	
}
