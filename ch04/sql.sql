 create table if not exists `goods`( 
	`id` int not null auto_increment, 
	`name` varchar(128) not null, 
	`category` varchar(128) not null , 
	`price` int not null, 
	`description` text not null, 
	PRIMARY KEY(`id`) 
 ) engine=InnoDB default charset = utf8;
