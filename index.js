var noble = require('noble');

//UUIDs
var customServiceUUID = 'df264931-0c69-481f-95e6-456ac7bb886f';
var customCharacteristicUUID = 'cf178e50-594e-4599-905e-8b53ab510cb7';


var p = document.createElement("p");
var p2 = document.createElement('p');
document.body.appendChild(p);
document.body.appendChild(p2);


console.log("Noble Oject Properties: " + noble);

noble.on('stateChange', function(state) {
  console.log('noble.on(stateChange..) method activated')
  if (state === 'poweredOn') {//check the state

    noble.startScanning([]);//leave array empty for it to discorver my device, worked in my case
    console.log('startScanning() method activated!');
    p.innerHTML= 'scanning ...';

    console.log("Target UUID Service: " + customServiceUUID);

  }
  else {

    p.innerHTML = 'stopScanning... timeout';
    noble.stopScanning();
  }
})

//this is the custom service object
var customCharacteristic = null;
p2.innerHTML = '<p/><p> html debug line ONE..';



noble.on('discover', function(peripheral) {

//p2.innerHTML = ' on discover running...';
console.log('noble.on(discorver..) method activated')
console.log('display device localName: ' + peripheral.advertisement.localName)

if(peripheral.advertisement.localName === 'XT1563'){

  //p2.innerHTML = "found device!, stopScanning...";\
  console.log('found device!, stopScanning');

  noble.stopScanning();




//
// Once the peripheral has been discovered, then connect to it.
//
peripheral.connect(function(err) {
  console.log('starting connect function...');
  //
  // Once the peripheral has been connected, then discover the
  // services and characteristics of interest.
  //
  peripheral.discoverServices([], function(err, services) {
  console.log('starting discorverServices() function');


    services.forEach(function(service) {


      // if(service.uuid !== customServiceUUID){
      //   return;
      // }

        console.log('found service:', service.uuid);


        //discorver sevice characteristic
        service.discoverCharacteristics([], function(err, characteristics) {
        console.log('starting discorverCharacteristics() function');

        characteristics.forEach(function(characteristic) {
          //
          // Loop through each characteristic and match them to the
          // UUIDs that we know about.
          //


          console.log('found characteristic:', characteristic.uuid);


          // p2.innerHTML + ' found characteristic: ' + characteristic.uuid;

          // if (customCharacteristicUUID !== characteristic.uuid) {
          //   return;
          // }
          customCharacteristic = characteristic;
          console.log('assigned characteristic to Object: ', customCharacteristic);

        });


          console.log("random debug code line ONE");
          sendMessage();

      })
    })
  })
})


}else {

  console.log('bluetooth advertisement != XT1563 device');

}

  console.log('random debug code line TWO');
  p2.innerHTML = '<p></p> html debug line TWO..';



  // The advertisment data contains a name, power level (if available),
  // certain advertised service uuids, as well as manufacturer data,
  // which could be formatted as an iBeacon.
  //
  console.log('found peripheral advertisement:', peripheral.advertisement);
  //p2.innerHTML = "advertisement : " + peripheral.advertisement;


 })


function sendMessage() {
  console.log('sendMessage() method activated!!');
  //const buf = Buffer.allocUnsafe(4);
  var binaryWord = Buffer.from('hello world');

//  console.log(Object.getOwnPropertyNames(customCharacteristic));

  customCharacteristic.write(binaryWord, true, function(err) {//true to send without response
    if (!err) {

      //p2.innerHTML + ' succesful write';
      console.log('succesful write');


    }
    else {
      //p.innerHTML = "characteristic write error";
      console.log('write error');
    }
  })
}
