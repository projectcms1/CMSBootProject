package com.cms.ca;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import jakarta.annotation.Resource;

@Service
@Repository("img_service")
public class ImageFileServiceImpl implements ImageFileService {

	@Resource(name ="img_repo")
	private ImageFileRepository imgfile_repo;
	
	@Override
	public List<imgfile_dto> getImageFileByFileName(String img_file_nm) {
		return this.imgfile_repo.getImageFileByFileName(img_file_nm);
	}
	
	@Override
	public int addImageFile(imgfile_dto dto) {
		return this.imgfile_repo.addImageFile(dto);
	}

	@Override
	public int deleteImageFile(String img_file_nm) {
		return this.imgfile_repo.deleteImageFile(img_file_nm);
	}
}
