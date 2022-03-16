create schema benchmark;
use benchmark;

CREATE TABLE `buildings` (
  `postal_code` int PRIMARY KEY NOT NULL UNIQUE,
  `address` varchar(255),
  `building_name` varchar(255),
  `building_function` varchar(255),
  `latitude` float8,
  `longitude` float8
);

CREATE TABLE `building_details` (
  `postal_code` int PRIMARY KEY NOT NULL UNIQUE,
  `overall_score` int NOT NULL,
  `notable_qualities` varchar(255),
  `other_awards` varchar(255),
  `carbon_emissions` varchar(255), #carbon emissions past 4 years
);

CREATE TABLE `green_mark_scheme` (
  `postal_code` int PRIMARY KEY NOT NULL UNIQUE,
  `total_score` int,
  `rating` varchar(255),
  `date_of_award` date,
  `leadership_score` int,
  `urban_harmony_score` int,
  `tropicality_score` int,
  `energy_efficiency_score` int,
  `renewable_energy_score` int,
  `water_eff_score` int,
  `materials_score` int,
  `waste_score` int,
  `indoor_air_quality_score` int,
  `spatial_quality_score` int,
  `smart_building_ops_score` int,
  `enhanced_performance_score` int,
  `complementary_certs_score` int,
  `cost_eff_design_score` int,
  `social_benefits_score` int
);

CREATE TABLE `leed` (
  `postal_code` int PRIMARY KEY NOT NULL UNIQUE,
  `total_score` int,
  `rating` varchar(255),
  `date_of_award` date,
  `sustainable_sites_score` int,
  `water_efficiency_score` int,
  `energy_atmosphere_score` int,
  `materials_resources_score` int,
  `indoor_env_quality_score` int
);

CREATE TABLE `gmap_consultants` (
  `id` int PRIMARY KEY NOT NULL UNIQUE,
  `consultant_name` varchar(255),
  `highest_educ_level` varchar(255),
  `field_of_expertise` varchar(255),
  `consultant_exp_years` int,
  `projects_involved` int
);

CREATE TABLE `gmap_to_buildings` (
  `postal_code` int,
  `id` int
);

ALTER TABLE `buildings` ADD FOREIGN KEY (`postal_code`) REFERENCES `building_details` (`postal_code`);

ALTER TABLE `leed` ADD FOREIGN KEY (`postal_code`) REFERENCES `buildings` (`postal_code`);

ALTER TABLE `green_mark_scheme` ADD FOREIGN KEY (`postal_code`) REFERENCES `buildings` (`postal_code`);

ALTER TABLE `gmap_to_buildings` ADD FOREIGN KEY (`postal_code`) REFERENCES `buildings` (`postal_code`);

ALTER TABLE `gmap_to_buildings` ADD FOREIGN KEY (`id`) REFERENCES `gmap_consultants` (`id`);
