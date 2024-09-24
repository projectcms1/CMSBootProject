package com.cms.ca.employee;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.cms.ca.counsel_dto;
import com.cms.ca.employee_dto;
import com.cms.ca.search_dto;
import com.cms.ca.view_counsel_dto;

import jakarta.annotation.Resource;

@Service
@Repository("empy_service")
public class EmployeeServiceImpl implements EmployeeService {

	@Resource(name = "empy_repo")
	private EmployeeRepository empyRepo;

	@Override
	public employee_dto getEmployeeInfo(String emp_no) {	//교번으로 교직원 정보 가져오기

		return this.empyRepo.getEmployeeInfo(emp_no);
	}
	
	@Override
	public int updateEmployeeInfo(employee_dto emp_dto) {
		int updateck=0;

		if(emp_dto.getEmp_eml_addr()!=null && emp_dto.getEmp_telno()!=null) {	//교직원 개인 정보 수정
			updateck=this.empyRepo.updatePersonalEmployeeInfo(emp_dto);
			System.out.println("111");
		}
		else if(emp_dto.getEmp_zip()!=null && emp_dto.getEmp_addr()!=null && emp_dto.getEmp_daddr()!=null) {	//교직원 거주지 정보 수정
			System.out.println(emp_dto.getEmp_zip());
			System.out.println(emp_dto.getEmp_addr());
			System.out.println(emp_dto.getEmp_daddr());
			System.out.println(emp_dto.getEmp_no());
			updateck=this.empyRepo.updateAddrEmployeeInfo(emp_dto);
			System.out.println("222");
		}
		else if(emp_dto.getDlng_bank_nm()!=null&& emp_dto.getDlng_actno()!=null) {	//교직원 계좌 정보 수정
			updateck=this.empyRepo.updateBankEmployeeInfo(emp_dto);
			System.out.println("333");
		}
		return updateck;
	}

	@Override
	public String getStdntNameFromStdNo(String stdnt_no) {	//학번으로 학생 이름 가져오기
		String stdnt_name=this.empyRepo.getStdntNameFromStdNo(stdnt_no);
		if(stdnt_name!=null) {	//학번에 해당하는 학생이 있을 때
			return stdnt_name;
		}
		else {	//학번에 해당하는 학생이 없을 때
			return null;
		}
	}

	@Override
	public int addCounsel(counsel_dto csl_dto, String emp_no) {	//상담 추가(교직원 분류에 따라 장소 변경 및 날짜 포멧 수정)
		csl_dto.setEmp_no(emp_no);
		csl_dto.setStts_cd("승인");
		csl_dto.setPlc("상담 센터");
		csl_dto.setRsvt_dt(csl_dto.getRsvt_dt().substring(0, 4)+csl_dto.getRsvt_dt().substring(5,7)+csl_dto.getRsvt_dt().substring(8,10));
		/*
		if(사용자관리권한=="P"){	//교수
			csl_dto.setPlc("교수 연구실");
		}
		else if(사용자관리권한=="C"){	//상담사
			csl_dto.setPlc("상담 센터");
		}
		*/
		int insertResult=this.empyRepo.addCounsel(csl_dto);
		return insertResult;
	}

	@Override
	public List<view_counsel_dto> getAllCounsel(String emp_no, search_dto search_dto) {	//해당 교번의 상담 불러오기
		List<view_counsel_dto> counsel_list=this.empyRepo.getAllCounsel(emp_no, search_dto.getOffset(), search_dto.getSize());
		return counsel_list;
	}

	@Override
	public int getAllCounselCount(String emp_no) {
		int counsel_list_count=this.empyRepo.getAllCounselCount(emp_no);
		return counsel_list_count;
	}

	
}
