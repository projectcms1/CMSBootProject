package com.cms.ca;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPClientConfig;
import org.springframework.web.multipart.MultipartFile;

public class CDNFileUploader {

	private String result = "";
	
	private MultipartFile userFile = null;
	private String fileOriginName = "";
	
	private FTPClient ftp = null;
	private FTPClientConfig cf = null;
	private String host = "172.30.1.7";
	private String user = "sej";
	private String pass = "a1234";
	private int port = 9005;
	
	private Date dt = null;
	private SimpleDateFormat sdf = null;
	
	public CDNFileUploader(MultipartFile mfile) {
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
				boolean ok = ftp.storeFile("/cacms/" + this.fileOriginName, this.userFile.getInputStream());
				if (ok) {
					this.result = "http://172.30.1.7:9009/cacms/" + this.fileOriginName;
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
	
	private String makeFileName() {
		this.dt = new Date();
		this.sdf = new SimpleDateFormat("yyyyMMddHHmmss");
		String datetime = this.sdf.format(dt);
		int a = (int) Math.floor(Math.random() * 10000);
		return datetime + a;
	}
}
