import { Floor, Walls, Roofs, Façade, Windows } from "./house-parts";

export class House {
  private floor: Floor;
  private walls: Walls;
  private roofs: Roofs;
  private façade: Façade;
  private windows: Windows;
  private height: number;
  private width: number;

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

  public setWindows(windows: Windows) {
    this.windows = windows;
  }

  public setArea(height: number, width: number) {
    let Area = height * width;
    return Area;
  }
}
