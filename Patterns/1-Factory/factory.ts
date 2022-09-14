import {
  Façade,
  FaçadeTypeEnum,
  Floor,
  FloorTypeEnum,
  Roofs,
  RoofsTypeEnum,
  Walls,
  WallsTypeEnum,
  Windows,
  WindowsTypeEnum,
} from "./house-parts";
import { House } from "./houses";

export class HouseFactory {
  public buildHouse(params: { houseType: HouseTypeEnum }): House {
    const { houseType } = params;
    let height: number = 10;
    let width: number = 20;

    if (houseType === HouseTypeEnum.CIUDAD)
      return this.buildCityHouse(height, width);
    if (houseType === HouseTypeEnum.MONTAÑA)
      return this.buildMountainHouse(height, width);
    if (houseType === HouseTypeEnum.PLAYA)
      return this.buildBeachHouse(height, width);
    if (houseType === HouseTypeEnum.CAMPO)
      return this.buildFieldHouse(height, width);

    throw new Error(`The House type "${houseType}" is not implemented`);
  }

  private buildCityHouse(height, width): House {
    const house = new House();

    house.setFloor(new Floor(FloorTypeEnum.CERAMICA));
    house.setWalls(new Walls(WallsTypeEnum.PLADUR));
    house.setRoofs(new Roofs(RoofsTypeEnum.PLANAAJARDINADA));
    house.setFaçade(new Façade(FaçadeTypeEnum.PREFABRICADA));
    house.setWindows(new Windows(WindowsTypeEnum.PVC));
    house.setArea(height, width);

    return house;
  }

  private buildMountainHouse(height, width): House {
    const house = new House();

    house.setFloor(new Floor(FloorTypeEnum.PIEDRA));
    house.setWalls(new Walls(WallsTypeEnum.LADRILLO));
    house.setRoofs(new Roofs(RoofsTypeEnum.PIZARRA));
    house.setFaçade(new Façade(FaçadeTypeEnum.SATE));
    house.setWindows(new Windows(WindowsTypeEnum.MADERA));
    house.setArea(height, width);

    return house;
  }

  private buildBeachHouse(height, width): House {
    const house = new House();

    house.setFloor(new Floor(FloorTypeEnum.CERAMICA));
    house.setWalls(new Walls(WallsTypeEnum.LADRILLO));
    house.setRoofs(new Roofs(RoofsTypeEnum.PLANAAJARDINADA));
    house.setFaçade(new Façade(FaçadeTypeEnum.VENTILADA));
    house.setWindows(new Windows(WindowsTypeEnum.ALUMINIO));
    house.setArea(height, width);

    return house;
  }

  private buildFieldHouse(height, width): House {
    const house = new House();

    house.setFloor(new Floor(FloorTypeEnum.HORMIGON));
    house.setWalls(new Walls(WallsTypeEnum.PLADUR));
    house.setRoofs(new Roofs(RoofsTypeEnum.CHAPA));
    house.setFaçade(new Façade(FaçadeTypeEnum.TRADICIONAL));
    house.setWindows(new Windows(WindowsTypeEnum.MADERA));
    house.setArea(height, width);

    return house;
  }
}

enum HouseTypeEnum {
  CIUDAD = "Ciudad",
  MONTAÑA = "Montaña",
  PLAYA = "Playa",
  CAMPO = "Campo",
}
