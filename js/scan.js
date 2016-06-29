$('#scanButton').on('click', function (e) {
	navigator.bluetooth.requestDevice({
		filters: [{
			services: [0xFEAA]
		}]
	}).then( device => {

	}).catch( error => { 
		console.error(); 
	});
});