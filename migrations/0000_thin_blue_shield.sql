-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `player` (
	`id` integer PRIMARY KEY NOT NULL,
	`nombre` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `equipos` (
	`id` integer PRIMARY KEY,
	`nombre` text NOT NULL,
	`grado` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `torneos` (
	`id` integer PRIMARY KEY,
	`inicio_torneo` integer,
	`final_torneo` integer,
	`nombre` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `equipos_torneo` (
	`torneo_id` integer,
	`equipo_1` integer,
	`equipo_2` integer,
	`marcador_1` integer,
	`marcador_2` integer,
	`fecha_partido` text NOT NULL,
	FOREIGN KEY (`equipo_2`) REFERENCES `equipos`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`equipo_1`) REFERENCES `equipos`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`torneo_id`) REFERENCES `torneos`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `partidos` (
	`id_player` integer,
	`id_equipos` integer,
	FOREIGN KEY (`id_equipos`) REFERENCES `equipos`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`id_player`) REFERENCES `player`(`id`) ON UPDATE no action ON DELETE no action
);

*/