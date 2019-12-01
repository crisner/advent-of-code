function totalFuel(input) {
	let fuelPerMod = 0;
	
	return input.reduce((total, module) => {
		calculateFuelPerMod(module)
		let totalFuelReq = fuelPerMod
		fuelPerMod = 0
		return total + totalFuelReq
	}, 0)
  
	function calculateFuelPerMod(fuel) {
		if(fuel === 0 || Math.floor(fuel / 3) <= 0) return 0
		let fuelReq = Math.floor(fuel / 3) - 2;
		if(fuelReq > 0) fuelPerMod += fuelReq;
		return calculateFuelPerMod(fuelReq)
	}
}
