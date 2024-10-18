package com.cms.ca;

import java.util.UUID;

import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPClientConfig;
import org.springframework.web.multipart.MultipartFile;

public class CDNFileUploader {

	private imgfile_dto imgdto = null;
	
	private MultipartFile userFile = null;
	private String fileOriginName = "";
	
	private FTPClient ftp = null;
	private FTPClientConfig cf = null;
	
	private String host = "";
	//private String host = "172.17.0.4";
	
	private String user = "sej";
	private String pass = "";
	
	private int port = 9005;
	//private int port = 21;
	
	// 모든 이용자의 사진을 한 폴더에 올리기 때문에 String 변수에 폴더명을 적어둠
	private String file_path_url = "http://cdn.seongmin.site/cacms/";
	
	// 파일과 파일명을 필드에 올리는 즉시 실행 메소드
	public CDNFileUploader(MultipartFile mfile) {
		this.userFile = mfile;
		this.fileOriginName = mfile.getOriginalFilename();
	}
	
	// CDN 서버에 이미지를 업로드하고 이미지 테이블에 데이터 저장하는 메소드
	public imgfile_dto uploadFile() throws Exception {
		
		try {
			this.ftp = new FTPClient();
			this.ftp.setControlEncoding("UTF-8");
			this.cf = new FTPClientConfig();
			
			this.ftp.configure(this.cf);
			this.ftp.connect(this.host, this.port);
			
			if (this.ftp.login(user, pass)) {
				this.ftp.enterLocalPassiveMode();
				this.ftp.setFileType(FTP.BINARY_FILE_TYPE);
				
				String pro = this.fileOriginName.substring(this.fileOriginName.lastIndexOf("."));
				String randomname = UUID.randomUUID().toString() +  pro; // 랜덤한 이름에 확장자 추가
				// FTP 파일 업로드 처리
				boolean ok = ftp.storeFile("/cms_cdn_server/cacms/" + randomname, this.userFile.getInputStream());
				if (ok) {
					imgdto = new imgfile_dto();
					imgdto.setImg_orgnl_file_nm(this.fileOriginName); // 파일 원본 명
					imgdto.setImg_file_nm(randomname); // UUID로 생성한 파일 명
					imgdto.setImg_file_path_nm(this.file_path_url); // 파일 경로
				}
				else {
					this.imgdto = null;
				}
			}
			else {
				this.imgdto = null;
			}
		} catch (Exception e) {
			this.imgdto = null;
		} finally {
			if (ftp.isConnected()) {
				ftp.disconnect();
			}
		}
		return this.imgdto;
	}
	
	// 이미지 저장에 성공했지만 데이터베이스에서 오류가 발생할 경우 저장한 파일을 삭제하기 위한 메소드
	public boolean deleteFile(String filename) throws Exception {
		boolean ck = false;
		this.ftp = new FTPClient();
		this.ftp.setControlEncoding("UTF-8");
		this.cf = new FTPClientConfig();
		
		this.ftp.configure(this.cf);
		this.ftp.connect(this.host, this.port);
		
		if (this.ftp.login(this.user, this.pass)) {
			ck = this.ftp.deleteFile("/cacms/" + filename);
		}
		this.ftp.disconnect();
		return ck;
	}
}
