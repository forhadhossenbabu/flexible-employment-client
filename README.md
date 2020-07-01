This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Developer

Forhad Chowdhury

const interfaces = require("os").networkInterfaces();
let addresses = {};

for (let interface in interfaces) {
  for (let k2 in interfaces[interface]) {
    const address = interfaces[interface][k2];
    if (address.family === "IPv4" && !address.internal) {
      addresses["MAC"] = address.mac;
      addresses["IPv4"] = address.address;
      addresses["NET_MASK"] = address.netmask;
      console.log("Internal Info :: " + address.internal);
    }
  }
}

console.log(addresses);
