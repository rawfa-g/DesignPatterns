import { Factory, Product, QualityEnum } from "./abstract-factory";
import { Garden } from "./garden";
import { House } from "./house";
import { SwimmingPool } from "./swimming-pool";

export class LandFactory extends Factory<Land> {
  buildStandard(): Land {
    return new Land(QualityEnum.STANDARD);
  }

  buildPremmium(): Land {
    return new Land(QualityEnum.PREMMIUM);
  }

  buildLowCost(): Land {
    return new Land(QualityEnum.LOW_COST);
  }
}

export class Land extends Product {
  public house!: House;
  public swimmingPool!: SwimmingPool;
  public garden!: Garden;
  readonly name: string = "Terrain #1";

  constructor(type: QualityEnum, name?: string) {
    super(type);

    if (name) this.name = name;
  }

  landType() {
    if (this.isPremmium()) {
      console.log("Tu parcela es plana y perfecta");
      return;
    }
    if (this.isStandard()) {
      console.log("Tu parcela es inclinada, con vegetación");
      return;
    }
    console.log("Parcela dificil de edificar");
  }

  setHouse(house: House) {
    if (this.isStandard() && house.isPremmium()) {
      throw new Error("Standard lands does not support Premium houses");
    }

    if (this.isLowCost() && (house.isStandard() || house.isPremmium())) {
      throw new Error("Lowcost land only support low cost houses");
    }

    this.house = house;
  }

  setSwimmingPool(swimmingPool: SwimmingPool) {
    if (this.isPremmium()) {
      this.swimmingPool = swimmingPool;
      return;
    }

    throw new Error("This land does not support swimming pools");
  }

  setGarden(garden: Garden) {
    this.garden = garden;
  }
}
