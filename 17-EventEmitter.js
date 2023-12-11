const EventEmitter = require("events");
const customEvent = new EventEmitter();
customEvent.on("response", (name, id) => {
  console.log(`data recieved name: ${name} and id: ${id}`);
});

customEvent.on("response", () => {
  console.log(`this is different `);
});
customEvent.emit("response", "john", 26);
