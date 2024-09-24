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
		}
		else if(emp_dto.getEmp_zip()!=null && emp_dto.getEmp_addr()!=null && emp_dto.getEmp_daddr()!=null) {	//교직원 거주지 정보 수정
			updateck=this.empyRepo.updateAddrEmployeeInfo(emp_dto);
		}
		else if(emp_dto.getDlng_bank_nm()!=null&& emp_dto.getDlng_actno()!=null) {	//교직원 계좌 정보 수정
			updateck=this.empyRepo.updateBankEmployeeInfo(emp_dto);
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
		if(csl_dto.getDscsn_mthd().equals("대면")) {
			csl_dto.setPlc("상담 센터");			
		}
		else {
			csl_dto.setPlc(null);	
		}
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
	public List<view_counsel_dto> getAllCounsel(String emp_no, String stts_cd, search_dto search_dto) {	//해당 교번의 상담 불러오기
		List<view_counsel_dto> counsel_list=this.empyRepo.getAllCounsel(emp_no, stts_cd, search_dto.getOffset(), search_dto.getSize(), search_dto.getSearchType(), search_dto.getSearchValue());
		return counsel_list;
	}

	@Override
	public int getAllCounselCount(String emp_no, String stts_cd, search_dto search_dto) {
		int counsel_list_count=this.empyRepo.getAllCounselCount(emp_no, stts_cd, search_dto.getSearchType(), search_dto.getSearchValue());
		return counsel_list_count;
	}

	@Override
	public List<view_counsel_dto> getOneCounsel(int aply_sn) {
		List<view_counsel_dto> counsel_detail=this.empyRepo.getOneCounsel(aply_sn);
		int i=0;
		while(i<counsel_detail.size()) {
			if(counsel_detail.get(i).getPlc()==null || counsel_detail.get(i).getPlc().equals("")) {
				counsel_detail.get(i).setPlc("-");
			}
			String result=getCounselResult(counsel_detail.get(i).getAply_sn());
			if(result!=null) {
				counsel_detail.get(i).setDscsn_cn(result);
			}
			i++;
		}
		return counsel_detail;
	}
	
	@Override
	public String getCounselResult(int aply_sn) {
		String counsel_result=this.empyRepo.getCounselResult(aply_sn);
		return counsel_result;
	}

	@Override
	public List<view_counsel_dto> getPastCounsel(String emp_no, search_dto search_dto) {	
		List<view_counsel_dto> counsel_list=this.empyRepo.getPastCounsel(emp_no, search_dto.getOffset(), search_dto.getSize(), search_dto.getSearchType(), search_dto.getSearchValue());
		return counsel_list;
	}

	@Override
	public int updateCounselStatus(String stts_cd, int aply_sn) {
		int update_result=this.empyRepo.updateCounselStatus(stts_cd, aply_sn);
		return update_result;
	}

	@Override
	public int addConnectedCounsel(view_counsel_dto csl_dto, String emp_no) {	//재귀 상담 추가(교직원 분류에 따라 장소 변경 및 날짜 포멧 수정)
		csl_dto.setEmp_no(emp_no);
		csl_dto.setStts_cd("승인");
		if(csl_dto.getDscsn_mthd().equals("대면")) {
			csl_dto.setPlc("상담 센터");			
		}
		else {
			csl_dto.setPlc(null);	
		}
		csl_dto.setRsvt_dt(csl_dto.getRsvt_dt().substring(0, 4)+csl_dto.getRsvt_dt().substring(5,7)+csl_dto.getRsvt_dt().substring(8,10));
		/*
		if(사용자관리권한=="P"){	//교수
			csl_dto.setPlc("교수 연구실");
		}
		else if(사용자관리권한=="C"){	//상담사
			csl_dto.setPlc("상담 센터");
		}
		*/
		int insertResult=this.empyRepo.addConnectedCounsel(csl_dto);
		return insertResult;
	}

	@Override
	public int addCounselResult(String dscsn_cn, int aply_sn) {
		int addResult=this.empyRepo.addCounselResult(dscsn_cn, aply_sn);
		return addResult;
	}
	
}
