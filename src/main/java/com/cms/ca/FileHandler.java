package com.cms.ca;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

public class FileHandler {

	private String file_url = "/home/sej/cms_notice_file";
	
	private String orgn_name = null;
	
	public String uploadFile(MultipartFile mfile) throws Exception {
		this.orgn_name = mfile.getOriginalFilename();
		
		String pro = this.orgn_name.substring(this.orgn_name.lastIndexOf("."));
		String randomname = UUID.randomUUID().toString() +  pro; // 랜덤한 이름에 확장자 추가
		
		FileCopyUtils.copy(mfile.getBytes(), new File(this.file_url + randomname));
		return randomname;
	}
	
	public void deletFile(String filename) throws Exception {
		Path filePath = Paths.get(this.file_url + filename);
		
		Files.delete(filePath);
	}
}
