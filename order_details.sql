CREATE TABLE `order_details` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `order_payment_id` int NOT NULL,
  `order_product_id` int NOT NULL,
  `order_user_id` int NOT NULL,
  `order_date` timestamp(6) NULL DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=60003 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

/*
-- Query: SELECT * FROM medicare.order_details
LIMIT 0, 1000

-- Date: 2023-12-30 17:39
*/
INSERT INTO `` (`order_id`,`order_payment_id`,`order_product_id`,`order_user_id`,`order_date`) VALUES (60001,50001,30001,40001,'2023-12-01 00:00:00.000000');
INSERT INTO `` (`order_id`,`order_payment_id`,`order_product_id`,`order_user_id`,`order_date`) VALUES (60002,50002,30002,40002,'2023-12-05 00:00:00.000000');
