package com.cms.ca;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository("img_repo")
public interface ImageFileRepository {

	List<imgfile_dto> getImageFileByFileName(String img_file_nm);
	
	int addImageFile(imgfile_dto dto);
	
	int deleteImageFile(String img_file_nm);
}
