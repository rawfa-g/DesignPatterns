import { Land } from "../2-Abastract-factory/land";
import { ChaletBuilder } from "../3-Builder/chalet";
import { JefeDeObra } from "../3-Builder/jefe-de-obra";

export class BuildService {
  private static buildService: BuildService;

  private jefeDeObra = new JefeDeObra();

  private constructor() {}

  public static getService(): BuildService {
    if (BuildService.buildService == null) {
      console.log("Service creado");
      this.buildService = new BuildService();
    }

    console.log("Service existente");

    return this.buildService;
  }

  public buildChalet(land: Land) {
    const chaletBuilder = new ChaletBuilder(land);

    this.jefeDeObra.setBuilder(chaletBuilder);
    this.jefeDeObra.buildPremiumProperty();
  }
}
