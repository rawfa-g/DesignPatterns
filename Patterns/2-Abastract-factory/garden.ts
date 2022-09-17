import { House } from "../1-Factory";
import { Factory } from "./abstract-factory";

export class Garden extends Factory<Garden> {
  buildLowCost(): Garden {
    throw new Error("Method not implemented.");
  }
  buildStandard(): Garden {
    throw new Error("Method not implemented.");
  }
  buildPremmium(): Garden {
    throw new Error("Method not implemented.");
  }
  isPremmium(): boolean {
    throw new Error("Method not implemented.");
  }
}
