show databases;


-- protocol
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;

create table users(
    id int auto_incremnent,
    name varchar(100),
    email varchar(100),
    password varchar(255),
    primary key(id)
);

SELECT * FROM users;