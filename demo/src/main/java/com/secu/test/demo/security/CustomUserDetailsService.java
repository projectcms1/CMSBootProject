package com.secu.test.demo.security;

import com.secu.test.demo.mapper.AccountMapper;
import com.secu.test.demo.model.Account;
import com.secu.test.demo.model.Employee;
import com.secu.test.demo.model.Student;
import com.secu.test.demo.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
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
    public UserDetails loadUserByUsername(String lgnId) throws UsernameNotFoundException {
        lgnId = lgnId.trim();
        // LGN_ACNT_INFO 테이블에서 lgnId로 계정 정보를 조회
        Account account = accountService.findAccountByLgnId(lgnId);
        if (account == null) {
            throw new UsernameNotFoundException("사용자를 찾을 수 없습니다: " + lgnId);
        }
        System.out.println("sssssssssssssssss");
        System.out.println("account : " + account + "lgnid : " + lgnId);
        System.out.println("getlgnid : " + account.getLgnId());
        // 사용자 권한 설정 로직
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        Employee employee = accountService.findEmployeeByAccountId(account.getUserNo());
        if (employee != null) {
            String role = switch (employee.getMngAuthrt()) {
                case "R" -> "ROLE_SUPER_ADMIN";
                case "A" -> "ROLE_ADMIN";
                case "P" -> "ROLE_PROFESSOR";
                case "C" -> "ROLE_COUNSELOR";
                case "E" -> "ROLE_STAFF";
                default -> "ROLE_USER";
            };
            authorities.add(new SimpleGrantedAuthority(role));
        } else {
            Student student = accountService.findStudentByAccountId(account.getUserNo());
            if (student != null) {
                authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
            }
        }

        return new User(account.getLgnId(), account.getPswd(), authorities);
    }
}
