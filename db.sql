create database feedback_db;
use feedback_db;
create table feedback(
id int auto_increment primary key,
time timestamp default current_timestamp,
cust_name varchar(100),
email varchar(100),
feedback text,
ratings int
);