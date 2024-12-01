if (typeof globalThis === 'undefined') {
  global.globalThis = global;
}

const fetch = require("node-fetch");
globalThis.fetch = fetch;

console.log("Lighthouse CI setup complete.");
