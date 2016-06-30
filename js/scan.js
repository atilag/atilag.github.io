$('#scanButton').on('click', function (e) {
	navigator.bluetooth.requestDevice({
		filters: [{
			services: [0xFEAA]
		}]
	}).then( device => {
		device.watchAdvertisements();
		device.addEventListener('advertisementreceived', parseBeacon);
		//console.log(device.manufacturerData);

	}).catch( error => { 
		console.error(error); 
	});
});

function parseBeacon(event) {
  var rssi = event.rssi;
  var data = event.manufacturerData;
  //...
}