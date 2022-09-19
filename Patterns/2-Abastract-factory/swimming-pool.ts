import { Factory, Product, QualityEnum } from "./abstract-factory";

export class SwimmingPoolFactory extends Factory<SwimmingPool> {
  buildStandard(): SwimmingPool {
    return new SwimmingPool(QualityEnum.STANDARD);
  }

  buildPremmium(): SwimmingPool {
    return new SwimmingPool(QualityEnum.PREMMIUM);
  }

  buildLowCost(): SwimmingPool {
    return new SwimmingPool(QualityEnum.LOW_COST);
  }
}

export class SwimmingPool extends Product {
  constructor(type: QualityEnum) {
    super(type);
  }

  poolType() {
    if (this.isPremmium()) {
      console.log("Piscina climatizada");
      return;
    }
    if (this.isStandard()) {
      console.log("Piscina exterior de fabrica");
      return;
    }
    console.log("Piscina de plástico");
  }
}
