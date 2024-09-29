package com.cms.ca;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import org.springframework.web.multipart.MultipartFile;

public class FileHandler {

	String orgn_name = null;
	
	public String uploadFile(MultipartFile mfile) throws Exception {
		this.orgn_name = mfile.getOriginalFilename();
		
		String pro = this.orgn_name.substring(this.orgn_name.lastIndexOf("."));
		String randomname = UUID.randomUUID().toString() +  pro; // 랜덤한 이름에 확장자 추가

		
		Path filePath = Paths.get("src", "main", "resources", "static", "notice_file/" + randomname);
		Files.write(filePath, mfile.getBytes());
		return randomname;
	}
	
	public void deletFile(String filename) throws Exception {
		Path filePath = Paths.get("src", "main", "resources", "static", "notice_file/" + filename);

		Files.delete(filePath);
	}
}
