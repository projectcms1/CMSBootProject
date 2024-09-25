package com.cms.ca;

import java.util.List;

public interface ImageFileService {

	List<imgfile_dto> getImageFileByFileName(String img_file_nm);
	
	int addImageFile(imgfile_dto dto);
	
	int deleteImageFile(String img_file_nm);
}
