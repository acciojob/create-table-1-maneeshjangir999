let table = document.getElementById("sampleTable")
function insert_Row() {
	let newRow = table.insertRow(0)
	let leftCell = newRow.insertCell(0)
	let rightCell = newRow.insertCell(1)
	leftCell.textContent = "New Cell1"
	rightCell.textContent = "New Cell2"
	
	
}
