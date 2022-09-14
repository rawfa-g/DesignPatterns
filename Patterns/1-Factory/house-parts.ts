export class Floor {
  private type: FloorTypeEnum;

  constructor(type: FloorTypeEnum) {
    this.type = type;
  }
}

export enum FloorTypeEnum {
  CERAMICA = "Ceramica",
  PARQUET = "Parquet",
  HORMIGON = "Hormigon",
  RESINAS = "Resinas",
}

export class Walls {}

export class Roofs {}

export class Façade {}

export class Windows {}
