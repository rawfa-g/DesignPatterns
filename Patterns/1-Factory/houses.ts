import { Floor, Walls, Roofs, Façade, Windows } from "./house-parts";

export class House {
  private floor!: Floor;
  private walls!: Walls;
  private roofs!: Roofs;
  private façade!: Façade;
  private windows!: Windows;
  readonly height: number;
  readonly width: number;

  constructor(height: number = 1, width: number = 1) {
    this.height = height;
    this.width = width;
  }

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

  get getArea(): number {
    return this.height * this.width;
  }
}
