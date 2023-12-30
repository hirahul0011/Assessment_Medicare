CREATE TABLE `admin` (
  `admin_id` int NOT NULL AUTO_INCREMENT,
  `admin_password` varchar(255) DEFAULT NULL,
  `admin_user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10003 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

/*
-- Query: SELECT * FROM medicare.admin
LIMIT 0, 1000

-- Date: 2023-12-30 17:37
*/
INSERT INTO `` (`admin_id`,`admin_password`,`admin_user_name`) VALUES (10001,'password1','admin1');
INSERT INTO `` (`admin_id`,`admin_password`,`admin_user_name`) VALUES (10002,'password2','admin2');
