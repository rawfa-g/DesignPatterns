import { Factory, QualityEnum } from "./abstract-factory";

export class House implements Factory<House> {
  isPremmium(): boolean {
    throw new Error("Method not implemented.");
  }

  buildStandard(): House {
    throw new Error("Method not implemented.");
  }

  buildPremmium(): House {
    throw new Error("Method not implemented.");
  }

  buildLowCost(): House {
    throw new Error("Method not implemented.");
  }

  private type: QualityEnum;
  constructor(type: QualityEnum) {
    this.type = type;
  }

  if(isPremmium = true) {
    return this.buildPremmium();
  }
}
