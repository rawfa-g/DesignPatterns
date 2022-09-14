import { Floor, Walls } from "./house-parts";

export class House {
  private floor: Floor;
  private walls: Walls;

  public setFloor(floor: Floor) {
    this.floor = floor;
  }
  public setWalls(walls: Walls) {
    this.walls = walls;
  }
}
