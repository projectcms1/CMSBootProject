package com.cms.ca;

import java.util.UUID;

import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPClientConfig;
import org.springframework.web.multipart.MultipartFile;

public class CDNFileHandler {

	private String result = "";
	
	private MultipartFile userFile = null;
	private String fileOriginName = "";
	
	
	private FTPClient ftp = null;
	private FTPClientConfig cf = null;
	private String host = "172.30.1.7";
	private String user = "sej";
	private String pass = "a1234";
	private int port = 9005;
	
	public CDNFileHandler(MultipartFile mfile) {
		this.userFile = mfile;
		this.fileOriginName = mfile.getOriginalFilename();
	}
	
	public String uploadFile() throws Exception {
		try {
			this.ftp = new FTPClient();
			this.ftp.setControlEncoding("UTF-8");
			this.cf = new FTPClientConfig();
			
			this.ftp.configure(this.cf);
			this.ftp.connect(this.host, this.port);
			
			if (this.ftp.login(user, pass)) {
				this.ftp.setFileType(FTP.BINARY_FILE_TYPE);
				
				String pro = this.fileOriginName.substring(this.fileOriginName.lastIndexOf("."));
				String randomname = UUID.randomUUID().toString() +  pro;
				
				boolean ok = ftp.storeFile("/cacms/" + randomname, this.userFile.getInputStream());
				if (ok) {
					this.result = "http://172.30.1.7:9009/cacms/" + randomname;
				}
				else {
					this.result = "error";
				}
			}
			else {
				this.result = "error";
			}
		} catch (Exception e) {
			this.result = "error";
		} finally {
			if (ftp.isConnected()) {
				ftp.disconnect();
			}
		}
		return this.result;
	}
}
