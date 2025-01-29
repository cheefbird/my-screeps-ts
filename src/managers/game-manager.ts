import SpawnManager from "./spawn-manager";

export default class GameManager {
  roomManager: string;
  spawnManager: SpawnManager;
  sourceManager: string;

  constructor() {
    this.roomManager = "room manager";
    this.spawnManager = new SpawnManager();
    this.sourceManager = "source manager";

    this.bootstrap();
  }

  bootstrap() {
    // load the room manager
    this.spawnManager.updateSpawns();
    // load the source manager
  }

  loop() {}
}
