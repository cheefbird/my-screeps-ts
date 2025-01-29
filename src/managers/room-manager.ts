import { Config } from "config";

export default class RoomManager {
  rooms: Room[] = [];
  roomNames: string[] = [];

  constructor() {
    const myRooms = Game.rooms;
    for (const [name, value] of Object.entries(myRooms)) {
      this.rooms.push(value);
      this.roomNames.push(name);
    }
    if (Config.VERBOSE) {
      let count = _.size(this.roomNames);
      console.log(`INFO: ${count} rooms found.`);
    }
  }
}
