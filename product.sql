CREATE TABLE `product` (
  `productcategoryid` int NOT NULL,
  `product_id` int NOT NULL AUTO_INCREMENT,
  `product_price` double DEFAULT NULL,
  `product_quantity` int NOT NULL,
  `product_status` tinyint(1) NOT NULL,
  `product_brand` varchar(255) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `product_product_image` longblob,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30006 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

/*
-- Query: SELECT * FROM medicare.product
LIMIT 0, 1000

-- Date: 2023-12-30 17:40
*/
INSERT INTO `` (`productcategoryid`,`product_id`,`product_price`,`product_quantity`,`product_status`,`product_brand`,`product_name`,`product_product_image`) VALUES (20001,30001,100,10,1,'ABC','Medicine1',?);
INSERT INTO `` (`productcategoryid`,`product_id`,`product_price`,`product_quantity`,`product_status`,`product_brand`,`product_name`,`product_product_image`) VALUES (20001,30002,200,100,1,'DEF','Medicine2',?);
INSERT INTO `` (`productcategoryid`,`product_id`,`product_price`,`product_quantity`,`product_status`,`product_brand`,`product_name`,`product_product_image`) VALUES (20002,30003,300,150,1,'GHI','Medicine3',?);
INSERT INTO `` (`productcategoryid`,`product_id`,`product_price`,`product_quantity`,`product_status`,`product_brand`,`product_name`,`product_product_image`) VALUES (20001,30004,100,100,0,'JKL','Medicine4',?);
INSERT INTO `` (`productcategoryid`,`product_id`,`product_price`,`product_quantity`,`product_status`,`product_brand`,`product_name`,`product_product_image`) VALUES (20002,30005,200,200,1,'MNO','Medicine5',?);
