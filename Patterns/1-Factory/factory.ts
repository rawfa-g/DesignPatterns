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
    if (houseType === HouseTypeEnum.CIUDAD) {
      return this.buildCityHouse();
    } else if (houseType === HouseTypeEnum.MONTAÑA) {
      return this.buildMountainHouse();
    } else if (houseType === HouseTypeEnum.PLAYA) {
      return this.buildBeachHouse();
    } else if (houseType === HouseTypeEnum.CAMPO) {
      return this.buildFieldHouse();
    }

    throw new Error(`The House type "${houseType}" is not implemented`);
  }

  private buildCityHouse(): House {
    const house = new House();

    house.setFloor(new Floor(FloorTypeEnum.CERAMICA));
    house.setWalls(new Walls(WallsTypeEnum.PLADUR));
    house.setRoofs(new Roofs(RoofsTypeEnum.PLANAAJARDINADA));
    house.setFaçade(new Façade(FaçadeTypeEnum.PREFABRICADA));
    house.setWindows(new Windows(WindowsTypeEnum.PVC));

    return house;
  }

  private buildMountainHouse(): House {
    const house = new House();

    house.setFloor(new Floor(FloorTypeEnum.PIEDRA));
    house.setWalls(new Walls(WallsTypeEnum.LADRILLO));
    house.setRoofs(new Roofs(RoofsTypeEnum.PIZARRA));
    house.setFaçade(new Façade(FaçadeTypeEnum.SATE));
    house.setWindows(new Windows(WindowsTypeEnum.MADERA));

    return house;
  }

  private buildBeachHouse(): House {
    const house = new House();

    house.setFloor(new Floor(FloorTypeEnum.CERAMICA));
    house.setWalls(new Walls(WallsTypeEnum.LADRILLO));
    house.setRoofs(new Roofs(RoofsTypeEnum.PLANAAJARDINADA));
    house.setFaçade(new Façade(FaçadeTypeEnum.VENTILADA));
    house.setWindows(new Windows(WindowsTypeEnum.ALUMINIO));

    return house;
  }

  private buildFieldHouse(): House {
    const house = new House();

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
