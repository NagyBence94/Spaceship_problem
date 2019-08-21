function calculateFuelToOffload(){
	var totalDistance = prompt('Hány kilométer távolságot kíván megtenni? Adjon meg egy szám!');
	var avgLiterOverHundred = prompt('Mi az űrhajó átlagos fogyasztása literben? Adjon meg egy számot!');
	var tankCapacity = prompt('Mi az űrhajó üzemanyagtartályának űrtartalma literben? Adjon meg egy számot!');

	var requiredFuel = totalDistance * (avgLiterOverHundred / 100);
	var fuelToOffload = tankCapacity - requiredFuel;
	alert('Szükséges üzemanyag-mennyiség:'  + requiredFuel + ' L\n ' +
		'Leeresztendő üzemanyag: ' + fuelToOffload + ' L');	
}
calculateFuelToOffload();

