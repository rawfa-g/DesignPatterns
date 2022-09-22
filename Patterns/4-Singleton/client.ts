import { QualityEnum } from "../2-Abastract-factory/abstract-factory";
import { Land } from "../2-Abastract-factory/land";

export class Client {
  private readonly lands: Land[] = [];

  public createLand(landQuality: QualityEnum) {
    //crear string template para la constante name
    const name = "Land #" + (this.lands.length + 1).toString();

    this.lands.push(new Land(landQuality, name));
  }

  public getLand(name: string): Land {
    const filteredLand = this.lands.find((land) => land.name === name);

    if (filteredLand) return filteredLand;

    throw new Error("Land not found");
  }
}
