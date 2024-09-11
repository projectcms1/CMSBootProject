package com.cms.ca.employee;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.cms.ca.employee_dto;

import jakarta.annotation.Resource;

@Service
@Repository("empy_service")
public class EmployeeServiceImpl implements EmployeeService {

	@Resource(name = "empy_repo")
	private EmployeeRepository empyRepo;

	@Override
	public employee_dto getEmployeeInfo(String emp_no) {

		return this.empyRepo.getEmployeeInfo(emp_no);
	}
	
	

}
