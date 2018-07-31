DROP DATABASE IF EXISTS `utrade_db`;
CREATE DATABASE `utrade_db`;
USE `utrade_db`;


/* Create a profile table for all users */
CREATE TABLE `profile` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`firstname` VARCHAR( 255)  not NULL,
	`lastname` VARCHAR( 255 )  not NULL,
	`email` VARCHAR( 255 )  not NULL,
	`university` VARCHAR(255)  NULL,
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
    'image_url' VARCHAR(150),
    `product_description` LONGTEXT,
    `product_price` float,
    `product_location` varchar (255),
	/* Set ID as primary key */
	PRIMARY KEY ( `id` )
);

Create table `Student_Housing` (
    id int(11) AUTO_INCREMENT not null,
    `location` VARCHAR(200),
    `monthly_rent` float,
    primary key(`id`)
);
use utrade_db;

insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location)
   values('Misc','Cooking book', 'Misecllaneous','Good','https://i.imgur.com//kcVCHoj.jpg','This is a good cookbook',10.40,'Somerset, NJ');
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location)
   values('Appl','Firdge', 'Applicance','Good','https://i.imgur.com//kcVCHoj.jpg','Fridge with freezer',110.30,'Princeton, NJ');
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location)
   values('Text','Textbook', 'School Textbooks','Average','https://i.imgur.com//kcVCHoj.jpg','This is a Philosphy textbook',20.40,'Somerset, NJ');
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location)
   values('Misc','Skateboard', 'Misecllaneous','Good','https://i.imgur.com//kcVCHoj.jpg','This is a new skateboard',20.40,'New brunswick, NJ');
