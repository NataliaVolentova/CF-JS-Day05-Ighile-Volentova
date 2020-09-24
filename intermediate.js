//javascrip syntax 

var workers = `
	[{
		"uniqueId":"123",
		"firstName":"Pedro",
		"lastName" : "Ighile",
		"emailAddress": "pedro@gmail.com",
		"jobTitle" : "software_engineer",
		"salary":"70.000"
	}, {
		"uniqueid":"12345",
		"firstName":"Natali",
		"lastName" : "Volentova",
		"emailAddress": "pedro@gmail.com",
		"jobTitle" : "software_engineer",
		"salary":"70.000"
	}, {
		"uniqueid":"123",
		"firstName":"Pedro",
		"lastName" : "Ighile",
		"emailAddress": "pedro@gmail.com",
		"jobTitle" : "software_engineer",
		"salary":"70.000"
	},{
		"uniqueid":"123",
		"firstName":"Pedro",
		"lastName" : "Ighile",
		"emailAddress": "pedro@gmail.com",
		"jobTitle" : "software_engineer",
		"salary":"70.000"
	}, {
		"uniqueid":"123",
		"firstName":"Pedro",
		"lastName" : "Ighile",
		"emailAddress": "pedro@gmail.com",
		"jobTitle" : "software_engineer",
		"salary":"70.000"
	}, {
		"uniqueid":"123",
		"firstName":"Pedro",
		"lastName" : "Ighile",
		"emailAddress": "pedro@gmail.com",
		"jobTitle" : "software_engineer",
		"salary":"70.000"
	}, {
		"uniqueid":"123",
		"firstName":"Pedro",
		"lastName" : "Ighile",
		"emailAddress": "pedro@gmail.com",
		"jobTitle" : "software_engineer",
		"salary":"70.000"
	}, {
		"uniqueid":"123",
		"firstName":"Pedro",
		"lastName" : "Ighile",
		"emailAddress": "pedro@gmail.com",
		"jobTitle" : "software_engineer",
		"salary":"70.000"
	
	}
	]
`;


var mydata= JSON.parse(workers);

console.table(mydata);

document.getElementById("result").innerHTML += ("the table of employee:  " + workers.firstName[1]);