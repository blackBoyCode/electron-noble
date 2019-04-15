//is it normal that my modules don't appear in github?

//electron sample code
const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({ width: 800, height: 600 })


  // and load the index.html of the app.
  win.loadFile('index.html')


}

app.on('ready', createWindow)


//NOBLE SAMPLE CODE:
// var noble = require('noble');
//
// console.log("noble is here!!!!");
// noble.on('stateChange', function(state) {
//   if (state === 'poweredOn') {
//     noble.startScanning();
//   } else {
//     noble.stopScanning();
//   }
// });
//
// noble.on('discover', function(peripheral) {
//   console.log('peripheral discovered (' + peripheral.id +
//               ' with address <' + peripheral.address +  ', ' + peripheral.addressType + '>,' +
//               ' connectable ' + peripheral.connectable + ',' +
//               ' RSSI ' + peripheral.rssi + ':');
//   console.log('\thello my local name is:');
//   console.log('\t\t' + peripheral.advertisement.localName);
//   console.log('\tcan I interest you in any of the following advertised services:');
//   console.log('\t\t' + JSON.stringify(peripheral.advertisement.serviceUuids));
//
//   var serviceData = peripheral.advertisement.serviceData;
//   if (serviceData && serviceData.length) {
//     console.log('\there is my service data:');
//     for (var i in serviceData) {
//       console.log('\t\t' + JSON.stringify(serviceData[i].uuid) + ': ' + JSON.stringify(serviceData[i].data.toString('hex')));
//     }
//   }
//   if (peripheral.advertisement.manufacturerData) {
//     console.log('\there is my manufacturer data:');
//     console.log('\t\t' + JSON.stringify(peripheral.advertisement.manufacturerData.toString('hex')));
//   }
//   if (peripheral.advertisement.txPowerLevel !== undefined) {
//     console.log('\tmy TX power level is:');
//     console.log('\t\t' + peripheral.advertisement.txPowerLevel);
//   }
//
//   console.log();
// });

//paragrah tag
