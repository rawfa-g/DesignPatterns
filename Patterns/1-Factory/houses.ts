import { Floor, Walls, Roofs, Façade } from "./house-parts";

export class House {
  private floor: Floor;
  private walls: Walls;
  private roofs: Roofs;
  private façade: Façade;

  public setFloor(floor: Floor) {
    this.floor = floor;
  }

  public setWalls(walls: Walls) {
    this.walls = walls;
  }

  public setRoofs(roofs: Roofs) {
    this.roofs = roofs;
  }

  public setFaçade(façade: Façade) {
    this.façade = façade;
  }
}
