package com.cms.ca.student;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.cms.ca.slfPsycInsp_dto;

import jakarta.annotation.Resource;

@Service
@Repository("insp_service")
public class SlfPsycInspServiceImpl implements SlfPsycInspService {

	@Resource(name = "insp_repo")
	private SlfPsycInspRepository inspRepo;

	@Override
	public List<slfPsycInsp_dto> getAllListInsp() {
		return this.inspRepo.getAllListInsp();
	}
}
