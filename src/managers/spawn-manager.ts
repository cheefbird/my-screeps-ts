import { Config } from "config";

export default class SpawnManager {
  spawns: StructureSpawn[] = [];
  spawnNames: string[] = [];

  constructor() {
    this.updateSpawns();
  }

  updateSpawns(): void {
    var spawnCount = this.getSpawnCount();

    for (const [key, value] of Object.entries(Game.spawns)) {
      this.spawns.push(value);
      this.spawnNames.push(key);
    }

    if (Config.VERBOSE) {
      let spawnCount = _.size(this.spawnNames);
      console.log(`INFO: ${spawnCount} spawn(s) found.`);
    }
  }

  getSpawnCount(): number {
    return _.size(this.spawnNames);
  }

  getFirstSpawn(): StructureSpawn {
    return this.spawns[0];
  }
}
