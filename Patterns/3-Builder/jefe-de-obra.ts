import { ConstructionBuilder } from "./construction-builder";

export class JefeDeObra {
  private constructionBuilder!: ConstructionBuilder;

  public setBuilder(constructionBuilder: ConstructionBuilder): void {
    this.constructionBuilder = constructionBuilder;
  }

  public buildBasicProperty(): void {
    this.constructionBuilder.buildInfraestructure();
  }

  public buildStandardProperty(): void {
    this.buildBasicProperty();

    this.constructionBuilder.buildGarden();
  }

  public buildPremiumProperty(): void {
    this.buildStandardProperty();

    this.constructionBuilder.buildSwimmingPool();
  }
}
