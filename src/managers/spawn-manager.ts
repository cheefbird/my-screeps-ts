import { Config } from "config";

export class SpawnManager {
  public spawns: StructureSpawn[] = [];
  public spawnNames: string[] = [];
  public spawnCount: number = 0;

  public constructor() {
    for (const [key, value] of Object.entries(Game.spawns)) {
      this.spawns.push(value);
      this.spawnNames.push(key);
    }
  }

  public updateSpawns() {
    this.spawnCount = _.size(this.spawnNames);
    if (Config.VERBOSE) {
      console.log(`INFO: ${this.spawnCount} spawns in room`);
    }
  }
}
