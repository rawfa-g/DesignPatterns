import { Builder } from "./builder";

export class HouseBuilder implements Builder {
  private house!: House;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.house = new House();
  }

  public produceWalls(): void {
    this.house.parts.push("Walls");
  }

  public produceRoof(): void {
    this.house.parts.push("Roof");
  }

  public produceFloor(): void {
    this.house.parts.push("Floor");
  }

  public ProduceDoors(): void {
    this.house.parts.push("Doors");
  }

  public ProduceWindows(): void {
    this.house.parts.push("Windows");
  }

  public produceSwimmingPool(): void {
    this.house.parts.push("SwimmingPool");
  }

  public produceGarden(): void {
    this.house.parts.push("Garden");
  }

  public produceMonumentalEntrance(): void {
    this.house.parts.push("MonumentalEntrance");
  }

  public produceGarage(): void {
    this.house.parts.push("Garage");
  }

  public getHouse(): House {
    const result = this.house;
    this.reset();
    return result;
  }
}

class House {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`House parts: ${this.parts.join(", ")}\n`);
  }
}
