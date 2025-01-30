import { HarvesterRole } from "roles/HarvesterRole";
import CreepManager from "./creep-manager";
import RoomManager from "./room-manager";
import SpawnManager from "./spawn-manager";

export default class GameManager {
  roomManager: RoomManager;
  spawnManager: SpawnManager;
  creepManager: CreepManager;
  harvesterRole: HarvesterRole;
  sourceManager: string;

  constructor() {
    this.roomManager = new RoomManager();
    this.spawnManager = new SpawnManager();
    this.creepManager = new CreepManager();
    this.sourceManager = "source manager";
    this.harvesterRole = new HarvesterRole();

    this.bootstrap();
  }

  bootstrap() {
    this.spawnManager.updateSpawns();
    this.creepManager.loadCreeps();
    // load the source manager?
  }

  loop() {}
}
