package com.cms.ca;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

public class FileHandler {

	String orgn_name = null;
	
	public String uploadFile(MultipartFile mfile, String file_url) throws Exception {
		this.orgn_name = mfile.getOriginalFilename();
		
		String pro = this.orgn_name.substring(this.orgn_name.lastIndexOf("."));
		String randomname = UUID.randomUUID().toString() +  pro; // 랜덤한 이름에 확장자 추가
		
		FileCopyUtils.copy(mfile.getBytes(), new File(file_url + randomname));
		return randomname;
	}
	
	public void deletFile(String filename, String file_url) throws Exception {
		Path filePath = Paths.get(file_url + filename);
		
		Files.delete(filePath);
	}
}
