package com.cms.ca.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.cms.ca.security.CustomAuthenticationFailureHandler;
import com.cms.ca.security.CustomAuthenticationSuccessHandler;
import com.cms.ca.security.CustomUserDetailsService;
import com.cms.ca.service.AccountService;

@Configuration
@EnableWebSecurity
@ComponentScan(basePackages = "com.cms.ca")
public class SecurityConfig {
	
	@Autowired
	AccountService accountservice;
	
    private final CustomUserDetailsService customUserDetailsService;

    public SecurityConfig(CustomUserDetailsService customUserDetailsService) {
        this.customUserDetailsService = customUserDetailsService;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
        		.csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(authorize -> authorize
                		.requestMatchers("/assets/**","/css/**","/js/**").permitAll()
                        .requestMatchers("/index","/login", "/public/**").permitAll()
                        .requestMatchers("/superadmin/**").hasRole("SUPER_ADMIN")
                        .requestMatchers("/admin/**").hasAnyRole("ADMIN", "SUPER_ADMIN")
                        .requestMatchers("/employee/**").hasRole("PROFESSOR")
                        .requestMatchers("/employee/**").hasRole("COUNSELOR")
                        .requestMatchers("/staff/**").hasAnyRole("STAFF", "ADMIN", "SUPER_ADMIN")
                        .requestMatchers("/index/**").hasAnyRole("USER", "STAFF", "COUNSELOR", "PROFESSOR", "ADMIN", "SUPER_ADMIN")
                        .anyRequest().authenticated()
                )
                .formLogin(form -> form
                        .loginPage("/login")
                        .loginProcessingUrl("/perform_login")
                        .successHandler(new CustomAuthenticationSuccessHandler())
                        .failureHandler(new CustomAuthenticationFailureHandler(accountservice))
                        .permitAll()
                )
                .logout(logout -> logout
                        .logoutUrl("/perform_logout")
                        .logoutSuccessUrl("/login?logout=true")
                        .deleteCookies("JSESSIONID")
                        .permitAll()
                );

        return http.build();
    }

    @Bean
    public AuthenticationManager authManager(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder auth =
                http.getSharedObject(AuthenticationManagerBuilder.class);
        auth.userDetailsService(customUserDetailsService).passwordEncoder(passwordEncoder());
        return auth.build();
    }
}
