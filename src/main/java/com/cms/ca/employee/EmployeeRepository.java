package com.cms.ca.employee;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.cms.ca.employee_dto;

@Mapper
@Repository("empy_repo")
public interface EmployeeRepository {

	employee_dto getOneEmployee(String emp_no);
}
