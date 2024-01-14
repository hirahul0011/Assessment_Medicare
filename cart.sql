CREATE TABLE `cart` (
  `cart_id` int NOT NULL AUTO_INCREMENT,
  `cart_product_id` int NOT NULL,
  `cart_product_image_id` int NOT NULL,
  `cart_product_price` double NOT NULL,
  `cart_product_quantity` int NOT NULL,
  `cart_product_status` tinyint(1) NOT NULL,
  `cart_product_subtotal` double NOT NULL,
  `cart_product_brand` varchar(255) DEFAULT NULL,
  `cart_product_name` varchar(255) DEFAULT NULL,
  `cartproductregisteredusername` varchar(255) NOT NULL,
  PRIMARY KEY (`cart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

/*
-- Query: SELECT * FROM medicare.cart
LIMIT 0, 1000

-- Date: 2024-01-14 18:15
*/
INSERT INTO `` (`cart_id`,`cart_product_id`,`cart_product_image_id`,`cart_product_price`,`cart_product_quantity`,`cart_product_status`,`cart_product_subtotal`,`cart_product_brand`,`cart_product_name`,`cartproductregisteredusername`) VALUES (10,30001,70001,100,20,1,200,'PQRABCDEF','Medicine1','40001_Name');
INSERT INTO `` (`cart_id`,`cart_product_id`,`cart_product_image_id`,`cart_product_price`,`cart_product_quantity`,`cart_product_status`,`cart_product_subtotal`,`cart_product_brand`,`cart_product_name`,`cartproductregisteredusername`) VALUES (11,30002,70002,200,200,1,400,'DEF','Medicine2','40001_Name');
INSERT INTO `` (`cart_id`,`cart_product_id`,`cart_product_image_id`,`cart_product_price`,`cart_product_quantity`,`cart_product_status`,`cart_product_subtotal`,`cart_product_brand`,`cart_product_name`,`cartproductregisteredusername`) VALUES (12,30004,70004,100,100,0,100,'JKL','Medicine4','40001_Name');
