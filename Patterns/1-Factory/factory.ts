import { Floor, FloorTypeEnum, Walls, WallsTypeEnum } from "./house-parts";
import { House } from "./houses";

export class HouseFactory {
  public buildHouse(params: { houseType: HouseTypeEnum }): House {
    const { houseType } = params;
    if (houseType === HouseTypeEnum.CIUDAD) {
      return this.buildModularHouse();
    }

    throw new Error(`The House type "${houseType}" is not implemented`);
  }

  private buildModularHouse(): House {
    const house = new House();

    house.setFloor(new Floor(FloorTypeEnum.CERAMICA));
    house.setWalls(new Walls(WallsTypeEnum.PLADUR));

    return house;
  }
}

enum HouseTypeEnum {
  CIUDAD = "Ciudad",
  MONTAÑA = "Montaña",
  PLAYA = "Playa",
  CAMPO = "Campo",
}
