package com.secu.test.demo.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {

    @GetMapping("/login")
    public String loginPage() {
        return "login"; // login.html 템플릿을 반환
    }

    @GetMapping("/index")
    public String indexPage(Model model) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null) {
            // 로그를 남기거나 적절한 조치를 취합니다.
            System.out.println("Authentication is null");
        } else {
            System.out.println("Authentication is set: " + authentication.getName());
        }

        model.addAttribute("authentication", authentication);


        return "index"; // index.html 템플릿을 반환
    }

    @GetMapping("/admin/dashboard")
    public String adminDashboard() {
        return "admin/dashboard"; // admin/dashboard.html 템플릿을 반환
    }

    @GetMapping("/professor/home")
    public String professorHome() {
        return "professor/home"; // professor/home.html 템플릿을 반환
    }

    @GetMapping("/counselor/home")
    public String counselorHome() {
        return "counselor/home"; // counselor/home.html 템플릿을 반환
    }

    @GetMapping("/staff/home")
    public String staffHome() {
        return "staff/home"; // staff/home.html 템플릿을 반환
    }
}
