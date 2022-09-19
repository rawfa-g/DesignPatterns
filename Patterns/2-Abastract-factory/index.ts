import { GardenFactory } from "./garden";
import { HouseFactory } from "./house";
import { LandFactory } from "./land";
import { SwimmingPoolFactory } from "./swimming-pool";

const houseFactory = new HouseFactory();
const gardenFactory = new GardenFactory();
const swimmingPoolFactory = new SwimmingPoolFactory();
const landFactory = new LandFactory();

const casa1 = houseFactory.buildStandard();
const casa2 = houseFactory.buildPremmium();

const garden1 = gardenFactory.buildPremmium();
const garden2 = gardenFactory.buildLowCost();

const piscina1 = swimmingPoolFactory.buildLowCost();
const piscina2 = swimmingPoolFactory.buildStandard();

const land1 = landFactory.buildLowCost();

casa1.printIBI();
casa2.printIBI();

garden1.gardenType();
garden2.gardenType();

piscina1.poolType();
piscina2.poolType();

land1.gardenType();
