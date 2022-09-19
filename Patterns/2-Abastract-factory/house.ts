import { Factory, Product, QualityEnum } from "./abstract-factory";

export class HouseFactory extends Factory<House> {
  buildStandard(): House {
    return new House(QualityEnum.STANDARD);
  }

  buildPremmium(): House {
    return new House(QualityEnum.PREMMIUM);
  }

  buildLowCost(): House {
    return new House(QualityEnum.LOW_COST);
  }
}

export class House extends Product {
  constructor(type: QualityEnum) {
    super(type);
  }

  printIBI() {
    if (this.isPremmium()) {
      console.log("Esta casa tiene un IBI del 10%");
      return;
    }

    console.log("Esta casa tiene un IBI del 3%");
  }
}
