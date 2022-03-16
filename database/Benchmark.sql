use benchmark; 

#SELECT building_name, overall_score, notable_qualities, carbon_emissions FROM buildings LEFT JOIN building_details ON buildings.postal_code WHERE address LIKE '%BAYFRONT%';

select * from buildings left join building_details on buildings.postal_code = building_details.postal_code where address like '%BOULEVARD%';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

flush privileges;