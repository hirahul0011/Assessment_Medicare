package com.sl.assessment.medicare.service;

import java.io.IOException;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.sl.assessment.medicare.model.Product;
import com.sl.assessment.medicare.model.ProductImage;
import com.sl.assessment.medicare.repository.ProductImageRepository;
import com.sl.assessment.medicare.repository.ProductRepository;

@Service
public class ProductFileStorageService {
	
  @Autowired
  private ProductImageRepository fileDBRepository;

  public ProductImage store(MultipartFile file) throws IOException {
    String fileName = StringUtils.cleanPath(file.getOriginalFilename());
    ProductImage productImage = new ProductImage(fileName, file.getContentType(), file.getBytes());

    return fileDBRepository.save(productImage);
  }

  public ProductImage getFile(Long id) {
    return fileDBRepository.findById(id).get();
  }
  
  public Stream<ProductImage> getAllFiles() {
    return fileDBRepository.findAll().stream();
  }


}
