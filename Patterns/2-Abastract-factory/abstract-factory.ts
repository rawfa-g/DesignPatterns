export abstract class Factory<T> {
  abstract buildLowCost(): T;
  abstract buildStandard(): T;
  abstract buildPremmium(): T;
  abstract isPremmium(): boolean;

  //private quality:QualityEnum
}

export enum QualityEnum {
  LOW_COST = "LowCost",
  STANDARD = "Standard",
  PREMMIUM = "Premmium",
}
