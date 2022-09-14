export class Floor {
  private type: FloorTypeEnum;

  constructor(type: FloorTypeEnum) {
    this.type = type;
  }
}

export enum FloorTypeEnum {
  CERAMICA = "Ceramica",
  MADERA = "Madera",
  HORMIGON = "Hormigon",
  PIEDRA = "Piedra",
  VINILICO = "Vinilico",
}

export class Walls {
  private type: WallsTypeEnum;

  constructor(type: WallsTypeEnum) {
    this.type = type;
  }
}

export enum WallsTypeEnum {
  PLADUR = "Pladur",
  LADRILLO = "Ladrillo",
  MADERA = "Madera",
}

export class Roofs {}

export class Façade {}

export class Windows {}
