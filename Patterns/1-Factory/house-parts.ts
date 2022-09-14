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

export class Roofs {
  private type: RoofsTypeEnum;

  constructor(type: RoofsTypeEnum) {
    this.type = type;
  }
}

export enum RoofsTypeEnum {
  PLANAAJARDINADA = "Plana ajardinada",
  TEJA = "Teja",
  CHAPA = "Chapa",
  PIZARRA = "Pizarra",
}

export class Façade {
  private type: FaçadeTypeEnum;

  constructor(type: FaçadeTypeEnum) {
    this.type = type;
  }
}

export enum FaçadeTypeEnum {
  SATE = "SATE",
  VENTILADA = "Ventilada",
  TRADICIONAL = "Tradicional",
  PREFABRICADA = "Prefabricada",
}

export class Windows {}
