import { relations } from "drizzle-orm/relations";
import { equipos, equiposTorneo, torneos, partidos, player } from "./schema";

export const equiposTorneoRelations = relations(equiposTorneo, ({one}) => ({
	equipo_equipo2: one(equipos, {
		fields: [equiposTorneo.equipo2],
		references: [equipos.id],
		relationName: "equiposTorneo_equipo2_equipos_id"
	}),
	equipo_equipo1: one(equipos, {
		fields: [equiposTorneo.equipo1],
		references: [equipos.id],
		relationName: "equiposTorneo_equipo1_equipos_id"
	}),
	torneo: one(torneos, {
		fields: [equiposTorneo.torneoId],
		references: [torneos.id]
	}),
}));

export const equiposRelations = relations(equipos, ({many}) => ({
	equiposTorneos_equipo2: many(equiposTorneo, {
		relationName: "equiposTorneo_equipo2_equipos_id"
	}),
	equiposTorneos_equipo1: many(equiposTorneo, {
		relationName: "equiposTorneo_equipo1_equipos_id"
	}),
	partidos: many(partidos),
}));

export const torneosRelations = relations(torneos, ({many}) => ({
	equiposTorneos: many(equiposTorneo),
}));

export const partidosRelations = relations(partidos, ({one}) => ({
	equipo: one(equipos, {
		fields: [partidos.idEquipos],
		references: [equipos.id]
	}),
	player: one(player, {
		fields: [partidos.idPlayer],
		references: [player.id]
	}),
}));

export const playerRelations = relations(player, ({many}) => ({
	partidos: many(partidos),
}));