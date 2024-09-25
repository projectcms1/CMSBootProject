package com.cms.ca;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

import org.apache.commons.io.IOUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.annotation.Resource;
import jakarta.servlet.ServletResponse;

@Controller
public class CDNImageViewerCtrl {

	@Resource(name = "img_service")
	private ImageFileService img_service;
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping("/img_file/{filenm}")
	public @ResponseBody byte[] getImageFile(@PathVariable String filenm, ServletResponse res) throws Exception {
		byte imgByte [] = null;
		HttpURLConnection httpcon = null;
		InputStream is = null;
		try {
			List<imgfile_dto> result = this.img_service.getImageFileByFileName(filenm);
			if (result.size() == 1) {
				String img_url = result.get(0).getImg_file_path_nm() + filenm;
				URL url = new URL(img_url);
				//http 프로토콜 라이브러리(해당 경로에 있는 파일의 url에 접속)
				httpcon = (HttpURLConnection) url.openConnection();//HttpsURLConnection : 도메인 시작인 https로 시작할 때 쓰는 아이로 얘와 다름!!
				is = httpcon.getInputStream();	//해당 경로에 있는 전체 용량을 읽음
				imgByte = IOUtils.toByteArray(is);	//읽은 파일을 byte[]로 변환하여 출력시킴
			}
		} catch (Exception e) {
			imgByte = null;
		} finally {
			try {
				is.close(); //I/O 종료
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			httpcon.disconnect();	//프로토콜을 종료
		}
		return imgByte;
	}
}
