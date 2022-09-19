import { Factory, Product, QualityEnum } from "./abstract-factory";

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
  constructor(type: QualityEnum) {
    super(type);
  }

  gardenType() {
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
}
