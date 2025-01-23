export class SpawnManager {
  public spawns: StructureSpawn[] = [];

  public constructor() {
    this.spawns = Game.spawns;
  }
}
