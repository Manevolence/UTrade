DROP DATABASE IF EXISTS `utrade_db`;
CREATE DATABASE `utrade_db`;
USE `utrade_db`;

CREATE TABLE `user` (
 `id` int(11) auto_increment not null,
 `user_name` VARCHAR(12),
 `user_password` varchar(30),
 `email` varchar(255),
   primary Key (`id`)
);
/* Create a profile table for all users */
CREATE TABLE `profile` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`firstname` VARCHAR( 255)  not NULL,
	`lastname` VARCHAR( 255 )  not NULL,
	`email` VARCHAR( 255 )  not NULL,
	`location` VARCHAR(255)  NULL,
    `phone_number` varchar(10), 	
	/* Set ID as primary key */
	PRIMARY KEY ( `id` )
);
CREATE TABLE `categories` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`category` VARCHAR( 255)  NULL,
	/* Set ID as primary key */
	PRIMARY KEY ( `id` )
);

CREATE TABLE `products` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
    `category_id` int(11) NOT NULL,
	`product_name` VARCHAR( 255)  NULL,
    `product_category` VARCHAR (30) NOT NULL,
    `product_condition` varchar(6) not null,  
    `image_url` VARCHAR(150),
    `product_description` LONGTEXT,
    `product_price` int(11),
    `product_location` varchar (255),
    `featured_product` boolean,
    `user_id` int,
	/* Set ID as primary key */
	PRIMARY KEY ( `id` )
);

Create table `Student_Housing` (
    id int(11) AUTO_INCREMENT not null,
    `location` VARCHAR(200),
    `monthly_rent` float,
    primary key(`id`)
)
use utrade_db;

insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values('Misc','Cooking book', 'Misecllaneous','Good','https://i.imgur.com//kcVCHoj.jpg','This is a good cookbook',10.40,'Somerset, NJ',0);
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values('Appl','Fridge', 'Applicance','Good','https://i.imgur.com//kcVCHoj.jpg','Fridge with freezer',110.30,'Princeton, NJ',1);
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values('Text','Textbook', 'School Textbooks','Average','https://i.imgur.com//kcVCHoj.jpg','This is a Philosphy textbook',20.40,'Somerset, NJ',0);
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values('Misc','Skateboard', 'Misecllaneous','Good','https://i.imgur.com//kcVCHoj.jpg','This is a new skateboard',20.40,'New brunswick, NJ',1);
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values('Misc','Bong', 'Misecllaneous','Great','https:\/\/i.imgur.com\/il4oIGy.jpg','This is a great product',20.40,'New brunswick, NJ',1);
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values('Text','Textbook', 'School Textbook - accounting','Average','https://i.imgur.com//kcVCHoj.jpg','This is a Philosphy textbook',20.40,'Somerset, NJ',0);
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values('Elect','Electronics', 'Apple ipad','Good','https://i.imgur.com//kcVCHoj.jpg','This is a Apple Ipad 4th generation',300.00,'Somerset, NJ',1);
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values('Elect','Electronics', 'Apple macbook pro','Good','https:\/\/i.imgur.com\/hSoiFm1.jpg','This is an apple laptop brand new',2100.00,'Somerset, NJ',1);
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values('Furn','Furniture', 'Office Chair','Good','https:\/\/i.imgur.com\/DNFWSdr.jpg','This is a new office chair',90.00,'Somerset, NJ',1);
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values('Furn','Furniture', 'Bed','Good','https:\/\/i.imgur.com\/DNFWSdr.jpg','This is a bed frame and mattress',70.00,'Princeton, NJ',1);