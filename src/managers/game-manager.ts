import RoomManager from "./room-manager";
import SpawnManager from "./spawn-manager";

export default class GameManager {
  roomManager: RoomManager;
  spawnManager: SpawnManager;
  sourceManager: string;

  constructor() {
    this.roomManager = new RoomManager();
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
