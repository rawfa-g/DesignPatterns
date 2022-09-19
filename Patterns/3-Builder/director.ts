import { Builder } from "./builder";

export class Director {
  private builder!: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalHouse(): void {
    this.builder.ProduceDoors();
    this.builder.ProduceWindows();
    this.builder.produceFloor();
    this.builder.produceRoof();
    this.builder.produceWalls();
  }

  public buildStandardHouse(): void {
    this.builder.ProduceDoors();
    this.builder.ProduceWindows();
    this.builder.produceFloor();
    this.builder.produceRoof();
    this.builder.produceWalls();
    this.builder.produceGarden();
    this.builder.produceGarage();
  }

  public buildPremiumHouse(): void {
    this.builder.ProduceDoors();
    this.builder.ProduceWindows();
    this.builder.produceFloor();
    this.builder.produceRoof();
    this.builder.produceWalls();
    this.builder.produceGarden();
    this.builder.produceGarage();
    this.builder.produceMonumentalEntrance();
    this.builder.produceSwimmingPool();
  }
}
