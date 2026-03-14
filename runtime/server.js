// runtime/server.js
export class HTML6Server {
  constructor(id, cloud, multiplayer) {
    this.id = id
    this.cloud = cloud
    this.multiplayer = multiplayer
    this.handlers = {}
  }
  
  addHandler(path, raw) {
    this.handlers[path] = raw
  }
}
