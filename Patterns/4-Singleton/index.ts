import { QualityEnum } from "../2-Abastract-factory/abstract-factory";
import { BuildService } from "./build.service";
import { Client } from "./client";

const DonAlcantara = new Client();

DonAlcantara.createLand(QualityEnum.LOW_COST);
DonAlcantara.createLand(QualityEnum.PREMMIUM);

const buildService = BuildService.getService();

buildService.buildChalet(DonAlcantara.getLand("Land #2"));

//Aplicar buildService con restaurante, hotel, etc.
//Añadir función num de tierras,
// y por cada tierra, nombre y calidad y si está construida (tiene piscina y jardín, tiene jardín....)
