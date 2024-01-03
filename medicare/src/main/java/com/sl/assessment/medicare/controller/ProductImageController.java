package com.sl.assessment.medicare.controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.zip.DataFormatException;
import java.util.zip.Inflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.sl.assessment.medicare.message.ResponseFile;
import com.sl.assessment.medicare.message.ResponseMessage;
import com.sl.assessment.medicare.model.Product;
import com.sl.assessment.medicare.model.ProductImage;
import com.sl.assessment.medicare.repository.ProductImageRepository;
import com.sl.assessment.medicare.repository.ProductRepository;
import com.sl.assessment.medicare.service.ProductFileStorageService;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api")
public class ProductImageController {	  
	  
	  @Autowired
	  private ProductFileStorageService storageService;
	  
	  @Autowired
	  private ProductImageRepository productImageRepository;

	  @PostMapping("/productImages/upload")
	  public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file) {
	    String message = "";
	    try {
	      storageService.store(file);

	      message = "Uploaded the file successfully: " + file.getOriginalFilename();
	      return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
	    } catch (Exception e) {
	      message = "Could not upload the file: " + file.getOriginalFilename() + "!";
	      return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
	    }
	  }
	  
//	  @PutMapping("/productImages/update/{id}")
//	  public void updateFile(@PathVariable("id") long id, 
//			  @RequestBody ProductImage productImage) throws IOException {
//		ProductImage s=getImage(id);
//	    s.setProduct_id(productImage.getProduct_id());	    
//	    s.setProduct_product_image(productImage.getProduct_product_image());
//	    s.setProduct_product_image_name(productImage.getProduct_product_image_name());
//	    s.setProduct_product_image_type(productImage.getProduct_product_image_type());
//	    productImageRepository.save(s);
//	  }
	  
	  @PutMapping("/productImages/update/{id}")
	  public void updateFile(@PathVariable("id") int id, 
			  @RequestParam("file") MultipartFile file) throws IOException {
		ProductImage s=getImage(id);
	    s.setProduct_id(id);	    
	    s.setProduct_product_image(file.getBytes());
	    s.setProduct_product_image_name(StringUtils.cleanPath(file.getOriginalFilename()));
	    s.setProduct_product_image_type(file.getContentType());
	    productImageRepository.save(s);
	  }

	  @GetMapping("/productImages/files")
	  public ResponseEntity<List<ResponseFile>> getListFiles() {
	    List<ResponseFile> files = storageService.getAllFiles().map(dbFile -> {
	      String fileDownloadUri = ServletUriComponentsBuilder
	          .fromCurrentContextPath()
	          .path("/files/")
	          .path(String.valueOf(dbFile.getProduct_id()))
	          .toUriString();

	      return new ResponseFile(
	          dbFile.getProduct_product_image_name(),
	          fileDownloadUri,
	          dbFile.getProduct_product_image_type(),
	          dbFile.getProduct_product_image().length);
	    }).collect(Collectors.toList());

	    return ResponseEntity.status(HttpStatus.OK).body(files);
	  }

//	  @GetMapping("/productImages/files/{id}")
//	  public ResponseEntity<byte[]> getFile(@PathVariable long id) {
// //	  public ProductImage<ResponseEntity<byte[]>> getFile(@PathVariable long id) {
//	    ProductImage fileDB = storageService.getFile(id);
//
//	    return ResponseEntity.ok()
//	        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileDB.getProduct_product_image_name() + "\"")
//	        .body(fileDB.getProduct_product_image());
//	  }
	  
	  @GetMapping("/productImages/files/{id}")
      public ProductImage getImage(@PathVariable("id") long id) throws IOException {
          final Optional<ProductImage> retrievedImage = productImageRepository.findById(id);
          ProductImage img = new ProductImage(retrievedImage.get().getProduct_product_image_name(), 
        		  retrievedImage.get().getProduct_product_image_type(),
                  decompressBytes(retrievedImage.get().getProduct_product_image()));
          return img;  
      }
	  
	// uncompress the image bytes before returning it to the angular application
	  public static byte[] decompressBytes(byte[] data) {
		  Inflater inflater = new Inflater();
		  inflater.setInput(data);
		  ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		  byte[] buffer = new byte[1024];
		  try {
			  while (!inflater.finished()) {
				  int count = inflater.inflate(buffer);
				  outputStream.write(buffer, 0, count);
			  }
			  outputStream.close();
		  } 
		  catch (IOException ioe) {
		  } 
		  catch (DataFormatException e) {
		  }
		  return outputStream.toByteArray();
	  }
	  
	  
	  
	  
//	  These two methods are added so that images are also reflected on the web page along with the changes 
//	  made possible to the server images with the help of above methods
//	  <img width="100%" [src]="domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' +productImageOrg.product_product_image)">
	  @GetMapping("/productImages")
	  public List<ProductImage> getAllProducts(@RequestParam(required = false) String title) {
		 return productImageRepository.findAll();	    
	  }

	  @GetMapping("/productImages/{id}")
	  public ProductImage getProductById(@PathVariable("id") long id) {
	    return productImageRepository.findById(id).get();
	  }
	  
	  @DeleteMapping("/productImages/delete/{id}")
	  public void deleteProduct(@PathVariable("id") long id) {
		  productImageRepository.deleteById(id);		  
	  }

	  @DeleteMapping("/productImages/delete")
	  public void deleteAllProducts() {
		  productImageRepository.deleteAll();
	    
	  }
	  
	  @PostMapping("/productImages/create")
	  public void createProduct(@RequestBody ProductImage product) {
		  productImageRepository.save(product);
	    
	  }
	  

}
