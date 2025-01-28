type SpawnList = { [spawnName: string]: StructureSpawn };

export class SpawnManager {
  public spawns: SpawnList;
  public spawnNames: string[] = [];
  public spawnCount: number = 0;

  public constructor() {
    this.spawns = Game.spawns;
  }
}
