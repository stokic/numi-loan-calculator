//RATE function, calculate loan rate
//Arguments: loan amount, yearly interest, loan duration in years

numi.addFunction({ "id": "rate", "phrases": "rate" }, function(values) {

	var principal = parseFloat(values[0].double);
	var interest = parseFloat(values[1].double) / 100 / 12;
	var payments = parseFloat(values[2].double) * 12;
  
	// compute the monthly payment figure
	var x = Math.pow(1 + interest, payments);
	var monthly = (principal*x*interest)/(x-1);
	
	return { "double": monthly };
});
