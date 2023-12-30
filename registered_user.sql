CREATE TABLE `registered_user` (
  `registered_user_id` int NOT NULL AUTO_INCREMENT,
  `registered_user_address` varchar(255) DEFAULT NULL,
  `registered_user_location` varchar(255) DEFAULT NULL,
  `registered_user_mail_id` varchar(255) DEFAULT NULL,
  `registered_user_name` varchar(255) DEFAULT NULL,
  `registered_user_password` varchar(255) DEFAULT NULL,
  `registered_user_phone_number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`registered_user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=40003 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

/*
-- Query: SELECT * FROM medicare.registered_user
LIMIT 0, 1000

-- Date: 2023-12-30 17:41
*/
INSERT INTO `` (`registered_user_id`,`registered_user_address`,`registered_user_location`,`registered_user_mail_id`,`registered_user_name`,`registered_user_password`,`registered_user_phone_number`) VALUES (40001,'40001_Address','40001_Location','40001_Email_Id','40001_Name','40001_Password','40001_Phone_Number');
INSERT INTO `` (`registered_user_id`,`registered_user_address`,`registered_user_location`,`registered_user_mail_id`,`registered_user_name`,`registered_user_password`,`registered_user_phone_number`) VALUES (40002,'40002_Address','40002_Location','40002_Email_Id','40002_Name','40002_Password','40002_Phone_Number');
