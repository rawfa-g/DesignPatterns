import { GardenFactory } from "../2-Abastract-factory/garden";
import { HouseFactory } from "../2-Abastract-factory/house";
import { Land, LandFactory } from "../2-Abastract-factory/land";
import { SwimmingPoolFactory } from "../2-Abastract-factory/swimming-pool";
import { ConstructionBuilder } from "./construction-builder";

export class RestaurantBuilder implements ConstructionBuilder {
  private land!: Land;

  constructor() {
    this.reset();
  }

  public getLand(): Land {
    const result = this.land;
    this.reset();

    return result;
  }

  public buildHouse(): void {
    this.land.setHouse(new HouseFactory().buildStandard());
  }

  public buildSwimmingPool(): void {
    this.land.setSwimmingPool(new SwimmingPoolFactory().buildStandard());
  }

  public buildGarden(): void {
    this.land.setGarden(new GardenFactory().buildStandard());
  }

  private reset(): void {
    this.land = new LandFactory().buildStandard();
  }
}