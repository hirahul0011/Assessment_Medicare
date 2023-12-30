CREATE TABLE `payment` (
  `payment_amount` double NOT NULL,
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `payment_user_id` int NOT NULL,
  `payment_date` timestamp(6) NULL DEFAULT NULL,
  PRIMARY KEY (`payment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=50003 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

/*
-- Query: SELECT * FROM medicare.payment
LIMIT 0, 1000

-- Date: 2023-12-30 17:40
*/
INSERT INTO `` (`payment_amount`,`payment_id`,`payment_user_id`,`payment_date`) VALUES (1000,50001,40001,'2023-12-01 00:00:00.000000');
INSERT INTO `` (`payment_amount`,`payment_id`,`payment_user_id`,`payment_date`) VALUES (500,50002,40002,'2023-12-05 00:00:00.000000');
