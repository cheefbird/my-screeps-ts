import { Config } from "config";

export default class CreepManager {
  creeps: Creep[] = [];
  creepNames: string[] = [];
  creepCount: number = 0;

  loadCreeps(): void {
    this.creepCount = 0;
    let currentCreeps = Game.creeps;
    for (const [key, value] of Object.entries(currentCreeps)) {
      this.creepNames.push(key);
      this.creeps.push(value);
      console.log(`LOADCREEPS: ${key}: ${value}`);
    }
    this.creepCount = _.size(this.creepNames);
    if (Config.VERBOSE) {
      console.log(`${this.creepCount} creeps found.`);
    }
  }

  canSpawnCreep(spawn: StructureSpawn): boolean {
    let canSpawn = spawn.spawnCreep([WORK, CARRY, MOVE], "dry run", {
      dryRun: true
    });
    return canSpawn == OK ? true : false;
  }

  spawnHarvesterCreep(spawn: StructureSpawn, count?: number): void {
    if (!this.canSpawnCreep(spawn)) {
      return;
    }
    count = count ?? 1;
    let bodyParts: BodyPartConstant[] = [MOVE, MOVE, WORK, CARRY];
    let memory: SpawnOptions = {
      memory: {
        role: "harvester"
      }
    };
    for (let i = 0; i < count; i++) {
      let name = `Harvester${i + 1}`;
      let result = spawn.spawnCreep(bodyParts, name, memory);

      if (result != OK) {
        console.log(`Problem creating ${name}: code ${result}`);
        return;
      }
    }
  }
}
