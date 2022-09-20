import { Director } from "./director";
import { HouseBuilder } from "./house-builder";

const director = new Director();
const builder = new HouseBuilder();

director.setBuilder(builder);

console.log("Minimal house parts:");
director.buildMinimalHouse();
builder.getHouse().listParts();

console.log("Standard house parts:");
director.buildStandardHouse();
builder.getHouse().listParts();

console.log("Premium house parts:");
director.buildPremiumHouse();
builder.getHouse().listParts();
