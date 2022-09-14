import { Floor } from "./house-parts";

export class House {
  private floor: Floor;

  public setFloor(floor: Floor) {
    this.floor = floor;
  }
}
