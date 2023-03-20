INSERT INTO server(host_name, ip_address, status, server_location, cpu, memory, disk)VALUES
('server1', '192.168.1.100', 'online', 'New York', 2.4, 16.0, 500.0),
('server2', '192.168.1.101', 'online', 'California', 2.6, 32.0, 1000.0),
('server3', '192.168.1.102', 'offline', 'Texas', 2.8, 64.0, 2000.0),
('server4', '192.168.1.103', 'online', 'New York', 2.4, 16.0, 500.0),
('server5', '192.168.1.104', 'online', 'California', 2.6, 32.0, 1000.0),
('server6', '192.168.1.105', 'offline', 'Texas', 2.8, 64.0, 2000.0),
('server7', '192.168.1.106', 'online', 'New York', 2.4, 16.0, 500.0),
('server8', '192.168.1.107', 'online', 'California', 2.6, 32.0, 1000.0),
('server9', '192.168.1.108', 'offline', 'Texas', 2.8, 64.0, 2000.0),
('server10', '192.168.1.109', 'online', 'New York', 2.4, 16.0, 500.0);


INSERT INTO server_instance(name, ip_address, status, cpu, memory, disk,serverid)VALUES
('instance1', '192.168.0.1', 'running', 20.5, 30.2, 40.1, 1),
('instance2', '192.168.0.2', 'running', 25.0, 35.7, 45.3, 1),
('instance3', '192.168.0.3', 'stopped', 15.8, 20.1, 30.5, 2),
('instance4', '192.168.0.4', 'running', 23.6, 28.9, 38.2, 2),
('instance5', '192.168.0.5', 'running', 30.1, 40.3, 50.4, 3),
('instance6', '192.168.0.6', 'stopped', 18.2, 25.5, 32.1, 3),
('instance7', '192.168.0.7', 'running', 22.4, 30.6, 40.8, 4),
('instance8', '192.168.0.8', 'stopped', 16.1, 20.9, 25.6, 4),
('instance9', '192.168.0.9', 'running', 28.5, 38.7, 48.9, 5),
('instance10', '192.168.0.10', 'stopped', 12.3, 15.8, 20.5, 5);


INSERT INTO application (instanceID, appname, apptype, app_version, app_status, date_created, URL) 
VALUES (1, 'SwiftPOS', 'retail POS', 1, 'Running', '2022-01-01 00:00:00', 'http://localhost:8080/app1'),
(1, 'ElevatePOS', 'retail POS', 2, 'Running', '2022-02-01 00:00:00', 'http://localhost:8080/app2'),
(2, 'StreamlinePOS', 'retail POS', 3, 'Running', '2022-03-01 00:00:00', 'http://localhost:8080/app3'),
(3, 'DeliCart', 'food POS', 4, 'Running', '2022-04-01 00:00:00', 'http://localhost:8080/app4'),
(2, 'PlateMate', 'food POS', 5, 'Running', '2022-05-01 00:00:00', 'http://localhost:8080/app5'),
(3, 'KitchenKeeper', 'food POS', 6, 'Running', '2022-06-01 00:00:00', 'http://localhost:8080/app6'),
(4, 'ShopEase', 'e-commerce', 7, 'Running', '2022-07-01 00:00:00', 'http://localhost:8080/app7'),
(5, 'ShopEase', 'e-commerce', 8, 'Running', '2022-08-01 00:00:00', 'http://localhost:8080/app8'),
(4, 'BizBazaar', 'e-commerce', 9, 'Running', '2022-09-01 00:00:00', 'http://localhost:8080/app9'),
(5,'DigitalDeals', 'e-commerce', 10, 'Running', '2022-10-01 00:00:00', 'http://localhost:8080/app10');


INSERT INTO performance_metric (server_instance_id, time_measured, cpu_usage, memory_usage, disk_usage, uptime, availability, no_of_sessions, thread_usage, response_time, rps)
VALUES (1, '2022-01-01 12:00:00', 0.5, 0.8, 0.3, 8, 0.70, 10, 0.2, 0.2, 10),
(2, '2022-01-01 12:01:00', 0.11, 0.22, 0.06, 0.90, 0.80, 110, 0.03, 0.04, 55),
(1, '2022-01-01 12:02:00', 0.12, 0.24, 0.07, 0.85, 0.82, 120, 0.04, 0.03, 60),
(2, '2022-01-01 12:03:00', 0.13, 0.26, 0.08, 0.80, 0.86, 130, 0.05, 0.02, 65),
(1, '2022-01-01 12:04:00', 0.14, 0.28, 0.09, 0.75, 0.75, 140, 0.06, 0.01, 70),
(2, '2022-01-01 12:05:00', 0.15, 0.30, 0.10, 0.70, 0.79, 150, 0.07, 0.005, 75),
(1, '2022-01-01 12:00:00', 0.10, 0.20, 0.05, 0.95, 0.78, 100, 0.02, 0.05, 50),
(2, current_timestamp, 0.19, 0.30, 0.10, 0.74, 0.74, 150, 0.07, 0.005, 80),
(2, current_timestamp, 0.16, 0.40, 0.15, 0.82, 0.83, 150, 0.07, 0.005, 65),
(2, current_timestamp, 0.25, 0.50, 0.20, 0.85, 0.87, 150, 0.07, 0.005, 62),
(2, current_timestamp, 0.20, 0.60, 0.23, 0.87, 0.82, 150, 0.07, 0.005, 64);

INSERT INTO log (time_stamp, level, message, server_instance, logOrigType, geoLocation, geoCountryName, geoContinentName)
VALUES ('2022-01-01 12:00:00', 'ERROR', 'Application crashed', 1, 'Android', 'New York', 'USA', 'North America'),
('2022-01-02 14:00:00', 'INFO', 'Server rebooted', 2, 'Android', 'Sydney', 'Australia', 'Australia'),
('2022-01-03 09:00:00', 'WARNING', 'Low memory warning', 3, 'Android', 'Tokyo', 'Japan', 'Asia'),
('2022-01-04 11:00:00', 'ERROR', 'Application error', 4, 'iOS', 'London', 'United Kingdom', 'Europe'),
('2022-01-05 15:00:00', 'INFO', 'Server shutdown', 5, 'iOS', 'Paris', 'France', 'Europe'),
('2022-12-01 12:00:00', 'ERROR', 'Out of memory error', 1, 'iOS', 'New York, USA', 'United States', 'North America'),
('2022-12-02 15:30:00', 'WARNING', 'High CPU usage', 2, 'Android', 'London, UK', 'United Kingdom', 'Europe'),
('2022-12-03 18:00:00', 'INFO', 'Application deployed successfully', 3, 'Android', 'Sydney, Australia', 'Australia', 'Oceania'),
('2022-12-04 21:15:00', 'INFO', 'SQL query executed', 4, 'iOS', 'Tokyo, Japan', 'Japan', 'Asia'),
('2022-12-05 00:30:00', 'ERROR', 'Server crash', 5, 'iOS', 'Moscow, Russia', 'Russia', 'Europe');

INSERT INTO alert (type, description, timeTriggered, app_id, server_id, threshold,viewed_or_not, solved_or_not, severity_level)
VALUES 
('High Memory Usage', 'Tomcat server memory usage has exceeded 90%', '2023-01-01 12:00:00', 1, 1, 0.90, false, false, 'high'),
('Low Disk Space', 'Free disk space on Tomcat server is less than 10GB', '2023-02-01 01:30:00', 2, 2, 0.10,true, false, 'medium'),
('High CPU Utilization', 'Tomcat server CPU utilization has exceeded 80%', '2023-03-01 06:00:00', 3, 3,0.80, false, false, 'critical'),
('Application Error', 'An error has occurred in the application running on the Tomcat server', '2023-04-01 10:20:00',4, 4, 0, true, false, 'high'),
('Tomcat Update Required', 'A new version of Tomcat is available', '2023-10-01 07:22:06', 10, 10, 0,true, false, 'low'),
('Tomcat Service Down', 'The Tomcat service is not running', '2023-05-01 10:20:00', 5, 5, 0, false, false,'critical'),
('Tomcat Connectivity Lost', 'The Tomcat server is not reachable', '2023-06-01 09:20:00', 6, 6, 0, true,false, 'high'),
('Tomcat Crash', 'The Tomcat service has crashed', '2023-07-01 11:02:00', 7, 7, 0, false, false, 'critical'),
('High Thread Count', 'Tomcat server thread count has exceeded ', '2023-08-01 03:01:02', 8, 8, 1000,true, false, 'high'),
('High Response Time ', 'Tomcat response time greater than 1s', '2023-09-01 02:30:03', 9, 9, 10, false,false, 'medium');


INSERT INTO admin(username,password, email, first_name, last_name, phone_no, role) 
VALUES ('aksaya','123', 'aksaya2000@gmail.com','kamsa', 'Kumar' , '0770691532','Software Engineer'),
('nisha','200', 'nisha2000@gmail.com', 'liyonisha', 'premajanthan', '0770691452', 'Senior Software Engineer'),
('mareen','201', 'mareen2000@gmail.com', 'mareenraj' , 'robinshan', '0770691542', 'Techlead'),
('thadsha','301', 'shajiny2000@gmail.com', 'Thadshajiny' , 'kaneshan', '0770691642', 'Techlead'),
('ragav','401', 'ragav2000@gmail.com', 'ragavarshithan' , 'rasinthiran', '0770691340','Techlead'),
('ahisha','502', 'ahisha2000@gmail.com', 'ahishayini' , 'Ramash', '0770691452', 'Software Engineer'),
('ajai','602', 'jayannthan2000@gmail.com', 'achsu' , 'kamalan', '077069123', 'Data analyst'),
('Abi','503', 'Abishak2000@gmail.com', 'Abinayan' , 'sayakan', '0770698452', 'Data analyst'),
('kumar','604', 'kumar2000@gmail.com', 'kumaran' , 'saravanan', '0770691782', 'Senior Software Engineer'),
('rasikala','906', 'rasi2000@gmail.com', 'rasi', 'ranathunka', '0770693452', 'Software Engineer');

INSERT INTO Client(username, password, email,first_name,last_name,phone_no,company)
VALUES('ahisha','502', 'ahisha2000@gmail.com', 'ahishayini', 'Ramas' ,'0770709276', 'eleos'),
( 'asvin','602', 'asvinth2000@gmail.com', 'vinith' , 'kura' ,'077069345','wso2'),
( 'Abisha','503', 'Abisanak2000@gmail.com', 'Abisek' , 'sarankan','0770693242','oracle'),
( 'rishan','604', 'rishan2000@gmail.com', 'nemash' , 'saravarathinam' ,'0770691576','IBM'),
( 'rathika', '906', ' rasmi2000@gmail.com', 'rashi' , 'karunan' ,'0770693876','Exxon' ),
( 'keethu','498', 'keetha2000@gmail.com', 'keertthna' , 'kirupakaran' ,'0770691576', 'IBM'),
( 'kishan', '398', 'kithushan2000@gmail.com', 'keshan' , 'kirupan','0770665476','verzon' ),
( 'pirathi','604', 'pirakash2000@gmail.com', 'pirasha' , 'thevanayakam' ,'0770687689','IBM'),
( 'piranavi', '906', 'pinthu2000@gmail.com', 'piranavika' , 'paramesvaran' ,'0770693896','Exxon');

INSERT INTO report (report_name, server_instance_id, email, enabling, issued) VALUES
('Report 1', 1, 'user1@example.com', true, current_timestamp),
('Report 2', 2, 'user2@example.com', false, current_timestamp),
('Report 3', 3, 'user3@example.com', false, current_timestamp),
('Report 4', 4, 'user4@example.com', true, current_timestamp),
('Report 5', 5, 'user5@example.com', false, current_timestamp),
('Report 6', 6, 'user6@example.com', true, current_timestamp),
('Report 7', 7, 'user7@example.com', false, current_timestamp),
('Report 8', 8, 'user8@example.com', true, current_timestamp),
('Report 9', 9, 'user9@example.com', false,current_timestamp),
('Report 10', 10, 'user10@example.com', true, current_timestamp);





