-- server table

CREATE TABLE Server(
	serverid SERIAL PRIMARY KEY,
	host_name VARCHAR(30) NOT NULL,
	ip_address VARCHAR(30) NOT NULL,
	status VARCHAR(30) NOT NULL,
	server_location VARCHAR(30) NOT NULL,
	cpu DECIMAL NOT NULL,
	disk DECIMAL NOT NULL,
	memory DECIMAL NOT NULL
);

select *
from server

-- server instance table

CREATE TABLE Server_Instance(
	instanceid SERIAL PRIMARY KEY, 
	name VARCHAR(30) NOT NULL,
	IP_address VARCHAR(30) NOT NULL,
	status VARCHAR(30) NOT NULL,
	cpu DECIMAL NOT NULL,
	memory DECIMAL NOT NULL,
	disk DECIMAL NOT NULL,
	serverid INTEGER REFERENCES server(serverid)
);

select *
from server_instance

-- application table

CREATE TABLE application (
    appid SERIAL PRIMARY KEY,
    instanceid INTEGER REFERENCES server_instance(instanceid),
    appname VARCHAR(100) NOT NULL,
    apptype VARCHAR(30) NOT NULL,
    app_version INTEGER NOT NULL,
    app_status VARCHAR(20) NOT NULL,
    date_created TIMESTAMP NOT NULL,
    url VARCHAR NOT NULL
);

select * from application

-- admin table

CREATE TABLE admin (
     admin_id SERIAL PRIMARY KEY,
     username VARCHAR(30) NOT NULL,
     password VARCHAR(30) NOT NULL,
     email VARCHAR(60) NOT NULL,
	first_name VARCHAR NOT NULL,
	last_name VARCHAR NOT NULL,
	phone_no VARCHAR(60) NOT NULL,
	role VARCHAR NOT NULL
);

select * from admin

-- client table 
CREATE TABLE Client (
     client_id SERIAL PRIMARY KEY,
     username VARCHAR(30) NOT NULL,
     password VARCHAR(30) NOT NULL,
     email VARCHAR(60) NOT NULL,
	first_name VARCHAR NOT NULL,
	last_name VARCHAR NOT NULL,
	phone_no VARCHAR(60) NOT NULL,
	company VARCHAR NULL
);

select * from client

--dashboard table ..... for mobile and web
CREATE TABLE dashboard(
    web_did SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
	belongs_to INTEGER references admin(admin_id),
	dashboard_type char(3) NOT NULL,     
	widget_list INTEGER NOT NULL
	);
	
select * from dashboard

--report table
CREATE TABLE report (
    report_id SERIAL PRIMARY KEY,
    report_name VARCHAR(255) NOT NULL,
    server_instance_id INTEGER REFERENCES server_instance(instanceid),
	email varchar(60) NOT NULL,
	enabling BOOLEAN NOT NULL,
	issued TIMESTAMP NOT NULL 
);

select * from report

-- perfomance metric table
CREATE TABLE performance_metric(
    id SERIAL PRIMARY KEY,
    server_instance_id INTEGER REFERENCES server_instance(instanceid),
    time_measured TIMESTAMP NOT NULL,
    cpu_usage DECIMAL NOT NULL,
    memory_usage DECIMAL NOT NULL,
    disk_usage DECIMAL NOT NULL,
    uptime DECIMAL NOT NULL,
	availability DECIMAL NOT NULL,
	no_of_sessions INTEGER NOT NULL,
	thread_usage DECIMAL NOT NULL,
	response_time DECIMAL NOT NULL,
	rps DECIMAL NOT NULL
);

select * from performance_metric


--log table
CREATE TABLE log (
    logid SERIAL NOT NULL, 
	time_stamp TIMESTAMP NOT NULL, 
	level VARCHAR(20) NOT NULL,
	message TEXT NOT NULL,
	server_instance INTEGER REFERENCES server_instance(instanceid),
	logOrigType VARCHAR(30) NOT NULL,
	geoLocation VARCHAR NOT NULL,
	geoCountryName VARCHAR NOT NULL,
	geoContinentName VARCHAR NOT NULL
);

Select * from log

-- alert table
CREATE TABLE alert (
    alert_id SERIAL PRIMARY KEY,
   	type VARCHAR NOT NULL,
	description VARCHAR NOT NULL,
	timeTriggered timestamp not null,
    app_id INTEGER references application(appid),
	server_id INTEGER references server(serverid),
   	threshold DECIMAL NOT NULL,
	viewed_or_not BOOLEAN NOT NULL,
	solved_or_not BOOLEAN NOT NULL,
	severity_level VARCHAR(20) NOT NULL
 );

Select * from alert

--



