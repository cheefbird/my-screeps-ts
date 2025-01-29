import { Config } from "config";

export default class SpawnManager {
  spawns: StructureSpawn[] = [];
  spawnNames: string[] = [];
  spawnCount: number = 0;

  constructor() {
    for (const [key, value] of Object.entries(Game.spawns)) {
      this.spawns.push(value);
      this.spawnNames.push(key);
    }
  }

  updateSpawns() {
    this.spawnCount = _.size(this.spawnNames);
    if (Config.VERBOSE) {
      console.log(`INFO: ${this.spawnCount} spawns in room`);
    }
  }

  getFirstSpawn(): StructureSpawn {
    return this.spawns[0];
  }
}
