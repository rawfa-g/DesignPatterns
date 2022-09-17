import { HouseFactory } from "./house";

const houseFactory = new HouseFactory();

const standardHouse = houseFactory.buildStandard();
const premmiumHouse = houseFactory.buildPremmium();

standardHouse.printIBI();
premmiumHouse.printIBI();
