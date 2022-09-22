import { ConstructionBuilder } from "./construction-builder";

export class JefeDeObra {
  private constructionBuilder!: ConstructionBuilder;

  public setBuilder(constructionBuilder: ConstructionBuilder): void {
    this.constructionBuilder = constructionBuilder;
  }

  public buildMinimalHouse(): void {
    this.constructionBuilder.buildHouse();
  }

  public buildStandardHouse(): void {
    this.buildMinimalHouse();

    this.constructionBuilder.buildGarden();
  }

  public buildPremiumHouse(): void {
    this.buildStandardHouse();

    this.constructionBuilder.buildSwimmingPool();
  }
}
