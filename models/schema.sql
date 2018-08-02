DROP DATABASE IF EXISTS `utrade_db`;
CREATE DATABASE `utrade_db`;
USE `utrade_db`;


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
    `product_price` float,
    `product_location` varchar (255),
    `featured_product` boolean,
    `user_id` int,
    `createdAt` datetime,
    `updatedAt` datetime,
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

insert into categories(category)
    values("Electronics");  
insert into categories(category)
    values("Furniture/Appliances"); 
insert into categories(category)
    values("Books");
insert into categories(category)
    values("Housing");
insert into categories(category)
    values("Clothing/Apparel");

insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values(3,'Cooking book', 'Misecllaneous','Good','https://i.imgur.com//kcVCHoj.jpg','This is a good cookbook',10.40,'Somerset, NJ',0);
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values(2,'Fridge', 'Applicance','Good','https:\/\/i.imgur.com\/e75niGc.jpg','Fridge with freezer',110.30,'Princeton, NJ',1);
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values(3,'Finance Textbook', 'School Textbooks','Average','https:\/\/i.imgur.com\/YLGj8Gk.jpg','This is a Finance textbook',20.40,'Somerset, NJ',0);
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values(3,'Skateboard', 'Misecllaneous','Good','https://i.imgur.com//kcVCHoj.jpg','This is a new skateboard',20.40,'New Brunswick, NJ',1);
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values(2,'Bong', 'Misecllaneous','Great','https:\/\/i.imgur.com\/il4oIGy.jpg','This is a great product',20.40,'New Brunswick, NJ',1);
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values(3,'Textbook', 'School Textbook - accounting','Average','https://i.imgur.com//kcVCHoj.jpg','This is a Philosphy textbook',20.40,'Somerset, NJ',0);
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values(1,'Electronics', 'Apple ipad','Good','https://i.imgur.com//kcVCHoj.jpg','This is a Apple Ipad 4th generation',300.00,'Somerset, NJ',1);
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values(1,'Electronics', 'Apple macbook pro','Good','https:\/\/i.imgur.com\/hSoiFm1.jpg','This is an apple laptop brand new',2100.00,'Somerset, NJ',1);
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values(2,'Furniture', 'Office Chair','Good','https:\/\/i.imgur.com\/DNFWSdr.jpg','This is a new office chair',90.00,'Somerset, NJ',1);
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values(2,'Furniture', 'Bed','Good','https:\/\/i.imgur.com\/DNFWSdr.jpg','This is a bed frame and mattress',70.00,'Princeton, NJ',0);
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values(1,'Lenovo Laptop', 'Electronics','Good','https://i.imgur.com//kcVCHoj.jpg','This is a brand new lenovo laptop',350.00,'New Brunswick, NJ',1);  
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values(4,'Apartment Room for rent', 'Housing','Good','https:\/\/i.imgur.com\/3iBW7TS.jpg','This is a apartment close to campus',450.00,'New Brunswick, NJ',1);
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values(4,'Apartment Room for rent', 'Housing','Good','https:\/\/i.imgur.com\/PbwTDKe.jpg','This is a apartment close to transportation',400.00,'Somerset, NJ',1);
 insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values(4,'Condo for rent', 'Housing','Good','https:\/\/i.imgur.com\/6slKZUP.jpg','This is a condo close to campus',400.00,'Somerset, NJ',1);

insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values(5,'Raincoat', 'Clothing','Good','https:\/\/i.imgur.com\/PbwTDKe.jpg','This is a london fog raincoat',80.00,'Princeton, NJ',0);
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values(5,'Sweat pants', 'Clothing','Good','https:\/\/i.imgur.com\/cZAq11d.jpg','Rutgers Sweat Pants',12.00,'Somerset, NJ',1);
insert into products(category_id,product_name,product_category,product_condition,image_url,product_description,product_price,product_location,featured_product)
   values(5,'Sweat shirt', 'Clothing','Good','https:\/\/i.imgur.com\/qtMHo5Q.jpg','Rutgers Sweat shirt',10.00,'Somerset, NJ',1);


-- Electronics
-- Furniture/Appliances
-- Books
-- Housing
-- Clothing/Apparel

    

