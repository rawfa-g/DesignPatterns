import { GardenFactory } from "../2-Abastract-factory/garden";
import { HouseFactory } from "../2-Abastract-factory/house";
import { Land, LandFactory } from "../2-Abastract-factory/land";
import { SwimmingPoolFactory } from "../2-Abastract-factory/swimming-pool";
import { ConstructionBuilder } from "./construction-builder";

export class ChaletBuilder implements ConstructionBuilder {
  private land!: Land;

  constructor() {
    this.reset();
  }

  public getLand(): Land {
    const result = this.land;
    this.reset();

    return result;
  }

  public buildInfraestructure(): void {
    this.land.setHouse(new HouseFactory().buildPremmium());
  }

  public buildSwimmingPool(): void {
    this.land.setSwimmingPool(new SwimmingPoolFactory().buildPremmium());
  }

  public buildGarden(): void {
    this.land.setGarden(new GardenFactory().buildPremmium());
  }

  private reset(): void {
    this.land = new LandFactory().buildLowCost();
  }
}
