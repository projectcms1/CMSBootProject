package com.cms.ca.security;

import com.cms.ca.mapper.AccountMapper;
import com.cms.ca.model.employee_dto;
import com.cms.ca.model.login_dto;
import com.cms.ca.model.student_dto;
import com.cms.ca.service.AccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private AccountService accountService;

    @Override
    public UserDetails loadUserByUsername(String lgn_id) throws UsernameNotFoundException {
    	lgn_id = lgn_id.trim();
        // LGN_ACNT_INFO 테이블에서 lgnId로 계정 정보를 조회
        login_dto account = accountService.findAccountByLgnId(lgn_id);
        if (account == null) {
            throw new UsernameNotFoundException("사용자를 찾을 수 없습니다: " + lgn_id);
        }
        System.out.println("sssssssssssssssss");
        System.out.println("account : " + account + "lgnid : " + lgn_id);
        System.out.println("getlgnid : " + account.getLgn_id());
        System.out.println("getUser_no : " + account.getUser_no());
        
        // 사용자 권한 설정 로직
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        employee_dto employee = accountService.findEmployeeByAccountId(account.getUser_no());
        if (employee != null) {
            String role = switch (employee.getMng_authrt()) {
                case "R" -> "ROLE_SUPER_ADMIN";
                case "A" -> "ROLE_ADMIN";
                case "P" -> "ROLE_PROFESSOR";
                case "C" -> "ROLE_COUNSELOR";
                case "E" -> "ROLE_STAFF";
                default -> "ROLE_USER";
            };
            authorities.add(new SimpleGrantedAuthority(role));
        } else {
            student_dto student = accountService.findStudentByAccountId(account.getUser_no());
            System.out.println(account.getUser_no());
            if (student != null) {
                authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
            }
        }
        return new User(account.getLgn_id(), account.getPswd(), authorities);
    }
}
