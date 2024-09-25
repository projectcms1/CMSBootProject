package com.cms.ca.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.ca.employee_dto;
import com.cms.ca.login_dto;



@Service
public class emuser_service_impl implements emuser_service{

	@Autowired
	private emuser_repo emuser_repo;
	
	@Override
	public List<employee_dto> employee_list() {
		List<employee_dto> employeelist_data = this.emuser_repo.employee_list();
		return employeelist_data;
	}

	@Override
	public employee_dto employee_data(String emp_no) {
		employee_dto employee_data = this.emuser_repo.employee_data(emp_no);
		return employee_data;
	}

	@Override
	public int employee_modify(employee_dto dto) {
		return this.emuser_repo.employee_modify(dto);
	}
	
	@Override
	public int add_emuser_detail(employee_dto emdto, String entrance_year) {
		
		add_empyuserdata_maker emuser_logindata_maker = new add_empyuserdata_maker();
		login_dto lgdto = new login_dto();

		
		//교직원 생년월일 - 빼고 db에 넣기
		emdto.setBrdt(emdto.getBrdt().replaceAll("-", ""));
				
		//교직원 자격증 발급일자 - 빼고 db에 넣기
		emdto.setEdu_crtfct_no(emdto.getEdu_crtfct_issu_ymd().replaceAll("-", ""));
		
		//교직원 사용자 초기 비밀번호 만들기
		lgdto.setPswd(emuser_logindata_maker.addempyuser_pass_maker(emdto.getEmp_telno(), emdto.getBrdt()));
		
		//교직원 교번 만들기
		String new_emp_no = emuser_logindata_maker.addempyuser_empno_maker(entrance_year);
		lgdto.setLgn_id(new_emp_no);
		
		int emuser_insert_login= this.emuser_repo.add_emuser_login(lgdto);
		int emuser_insert_detail=0;
		
		if(emuser_insert_login > 0) {
			emdto.setEmp_no(new_emp_no);
			emdto.setUser_no(this.emuser_repo.match_em_userno(lgdto));
			if(emdto.getOgdp_inst_nm().equals("대학본부")) {
				emdto.setMng_authrt("A");
			}
			else if(emdto.getJbgd_nm().equals("행정직원")) {
				emdto.setMng_authrt("E");
			}
			else if(emdto.getOgdp_inst_nm().equals("심리상담센터")) {
				emdto.setMng_authrt("C");
			}
			else {
				emdto.setMng_authrt("P");
			}
			
			emuser_insert_detail = this.emuser_repo.add_emuser_detail(emdto);
		}
		
		return emuser_insert_detail;
	}
}
