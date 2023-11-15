-- 1
select * from film;

-- 2
select count(amount) from payment where amount > 3.00;

-- 3
select count(distinct district) from address a join customer c on a.address_id = c.address_id;

-- 4
select * from film f where f.title like 'J%';

-- 5
select * from "language" where language_id in (1,5);

-- 6
insert into "language" ("name") values ('Ukrainian') returning *;

-- 7
insert into city (city, country_id)
	values ('Hadiach', (select country_id from country where country.country = 'Ukraine'))
	returning *;

-- 8
update city
	set city = 'Dnipro'
	where city = 'Hadiach'
	returning *;

-- 9
create table users (
	id serial primary key not null,
	username varchar unique not null,
	email varchar unique not null,
	first_name varchar not null,
	last_name varchar not null,
	password varchar not null
);
insert into users (username, email, first_name, last_name, password) values (
	'YBoy', 'example@gmail.com', 'Anton', 'Parfonov', '12345qwert'
) returning *;

-- 10
drop table users;

	
