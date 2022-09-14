import { Floor, FloorTypeEnum } from "./house-parts";
import { House } from "./houses";

export class HouseFactory {
  public buildHouse(params: { houseType: HouseTypeEnum }): House {
    const { houseType } = params;
    if (houseType === HouseTypeEnum.MODULAR) {
      return this.buildModularHouse();
    }

    throw new Error(`The House type "${houseType}" is not implemented`);
  }

  private buildModularHouse(): House {
    const house = new House();

    house.setFloor(new Floor(FloorTypeEnum.CERAMICA));

    return house;
  }
}

enum HouseTypeEnum {
  MODULAR = "Modular",
  CONTAINERS = "Containers",
  MADERA = "Madera",
  MOVILES = "Moviles",
}
