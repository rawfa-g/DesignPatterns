import { Factory, Product, QualityEnum } from "./abstract-factory";

export class GardenFactory extends Factory<Garden> {
  buildStandard(): Garden {
    return new Garden(QualityEnum.STANDARD);
  }

  buildPremmium(): Garden {
    return new Garden(QualityEnum.PREMMIUM);
  }

  buildLowCost(): Garden {
    return new Garden(QualityEnum.LOW_COST);
  }
}

export class Garden extends Product {
  constructor(type: QualityEnum) {
    super(type);
  }

  gardenType() {
    if (this.isPremmium()) {
      console.log("Tu jardín es de 100Ha");
      return;
    }
    if (this.isStandard()) {
      console.log("Tu jardín es de 1Ha");
      return;
    }
    console.log("No tienes Jardín");
  }
}
