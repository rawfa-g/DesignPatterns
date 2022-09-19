export abstract class Factory<T> {
  abstract buildLowCost(): T;
  abstract buildStandard(): T;
  abstract buildPremmium(): T;
}

export abstract class Product {
  constructor(private quality: QualityEnum) {}

  protected isPremmium(): boolean {
    return this.quality === QualityEnum.PREMMIUM;
  }
  protected isStandard(): boolean {
    return this.quality === QualityEnum.STANDARD;
  }
  protected isLowCost(): boolean {
    return this.quality === QualityEnum.LOW_COST;
  }
}

export enum QualityEnum {
  LOW_COST = "LowCost",
  STANDARD = "Standard",
  PREMMIUM = "Premmium",
}
