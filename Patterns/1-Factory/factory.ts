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
  public buildHouse(params: {
    houseType: HouseTypeEnum;
    height: number;
    width: number;
  }): House {
    const { houseType, height, width } = params;

    const house = new House(height, width);

    if (houseType === HouseTypeEnum.CIUDAD) return this.buildCityHouse(house);

    if (houseType === HouseTypeEnum.MONTAÑA)
      return this.buildMountainHouse(house);

    if (houseType === HouseTypeEnum.PLAYA) return this.buildBeachHouse(house);

    if (houseType === HouseTypeEnum.CAMPO) return this.buildFieldHouse(house);

    throw new Error(`The House type "${houseType}" is not implemented`);
  }

  private buildCityHouse(house: House): House {
    house.setFloor(new Floor(FloorTypeEnum.CERAMICA));
    house.setWalls(new Walls(WallsTypeEnum.PLADUR));
    house.setRoofs(new Roofs(RoofsTypeEnum.PLANAAJARDINADA));
    house.setFaçade(new Façade(FaçadeTypeEnum.PREFABRICADA));
    house.setWindows(new Windows(WindowsTypeEnum.PVC));

    return house;
  }

  private buildMountainHouse(house: House): House {
    house.setFloor(new Floor(FloorTypeEnum.PIEDRA));
    house.setWalls(new Walls(WallsTypeEnum.LADRILLO));
    house.setRoofs(new Roofs(RoofsTypeEnum.PIZARRA));
    house.setFaçade(new Façade(FaçadeTypeEnum.SATE));
    house.setWindows(new Windows(WindowsTypeEnum.MADERA));

    return house;
  }

  private buildBeachHouse(house: House): House {
    house.setFloor(new Floor(FloorTypeEnum.CERAMICA));
    house.setWalls(new Walls(WallsTypeEnum.LADRILLO));
    house.setRoofs(new Roofs(RoofsTypeEnum.PLANAAJARDINADA));
    house.setFaçade(new Façade(FaçadeTypeEnum.VENTILADA));
    house.setWindows(new Windows(WindowsTypeEnum.ALUMINIO));

    return house;
  }

  private buildFieldHouse(house: House): House {
    house.setFloor(new Floor(FloorTypeEnum.HORMIGON));
    house.setWalls(new Walls(WallsTypeEnum.PLADUR));
    house.setRoofs(new Roofs(RoofsTypeEnum.CHAPA));
    house.setFaçade(new Façade(FaçadeTypeEnum.TRADICIONAL));
    house.setWindows(new Windows(WindowsTypeEnum.MADERA));

    return house;
  }
}

enum HouseTypeEnum {
  CIUDAD = "Ciudad",
  MONTAÑA = "Montaña",
  PLAYA = "Playa",
  CAMPO = "Campo",
}
