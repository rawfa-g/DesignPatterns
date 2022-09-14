import { Floor, Walls, Roofs } from "./house-parts";

export class House {
  private floor: Floor;
  private walls: Walls;
  private roofs: Roofs;

  public setFloor(floor: Floor) {
    this.floor = floor;
  }

  public setWalls(walls: Walls) {
    this.walls = walls;
  }

  public setRoofs(roofs: Roofs) {
    this.roofs = roofs;
  }
}
