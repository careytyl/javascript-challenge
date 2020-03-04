// from data.js
var sighting = data;
var tbody = d3.select("tbody");

// Appends all objects from sighting to HTML table
sighting.forEach((ufoSighting) => {
	var row = tbody.append("tr");
	Object.entries(ufoSighting).forEach(([key, value]) => {
		var cell = row.append("td");
		cell.text(value);
	});
});

// Selects filter-btn as function target
var button = d3.select("#filter-btn");

// Filter function to select by date (m/d/yyyy)
button.on("click", function() {
	// Select the filter element
	var inputElement = d3.select("#datetime");

	// Get the the input element and logs to console
	var inputValue = inputElement.property("value");
	console.log(inputValue);

	// Filters array and logs to console
	var filteredSighting = sighting.filter(sighting => sighting.datetime === inputValue);
	console.log(filteredSighting);
	
	// Clears table on page
	tbody.html("");
	
	// Appends all objects from filteredSighting to HTML table
	filteredSighting.forEach((ufoSighting) => {
		var row = tbody.append("tr");
		Object.entries(ufoSighting).forEach(([key, value]) => {
			var cell = row.append("td");
			cell.text(value);
		});
	});
	
});
