import { HouseFactory, HouseTypeEnum } from "./factory";
import { House } from "./houses";

export * from "./houses";
export * from "./house-parts";
export * from "./factory";

const houseFactory: HouseFactory = new HouseFactory();

const mountainHouse: House = houseFactory.buildHouse({
  houseType: HouseTypeEnum.MONTAÑA,
  height: 10,
  width: 20,
});

console.log({ mountainHouse: mountainHouse.getArea });
