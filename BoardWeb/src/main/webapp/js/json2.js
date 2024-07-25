/**
 * json2.js
 */

document.querySelector('div.container-fluid>div:nth-of-type(2)').remove();
document.querySelector('div.container-fluid>table').remove();

let json = `[{"id":1,"first_name":"Andreas","last_name":"Gorler","email":"agorler0@apache.org","gender":"Male","salary":3146},
{"id":2,"first_name":"minsu","last_name":"park","email":"ideener1@state.gov","gender":"Male","salary":8732},
{"id":3,"first_name":"minsu","last_name":"lee","email":"achick2@hatena.ne.jp","gender":"Female","salary":5205},
{"id":4,"first_name":"minsu","last_name":"an","email":"ederisly3@smugmug.com","gender":"Female","salary":9312},
{"id":5,"first_name":"minsu","last_name":"bae","email":"aahmad4@163.com","gender":"Female","salary":6165},
{"id":6,"first_name":"minsu","last_name":"ha","email":"ehudel5@histats.com","gender":"Male","salary":9448},
{"id":7,"first_name":"minsu","last_name":"java","email":"cbirds6@mit.edu","gender":"Female","salary":7285},
{"id":8,"first_name":"minsu","last_name":"javaee","email":"fstrelitzer7@engadget.com","gender":"Female","salary":5394},
{"id":9,"first_name":"minsu","last_name":"hosic","email":"tfitchett8@unicef.org","gender":"Female","salary":3323},
{"id":10,"first_name":"minsu","last_name":"omg","email":"bdonisi9@adobe.com","gender":"Polygender","salary":1391},
{"id":11,"first_name":"minsu","last_name":"fuck","email":"ggoodliffa@eepurl.com","gender":"Female","salary":5421},
{"id":12,"first_name":"minsu","last_name":"hi","email":"arivelesb@irs.gov","gender":"Female","salary":5449},
{"id":13,"first_name":"minsu","last_name":"bye","email":"kweondc@networksolutions.com","gender":"Agender","salary":1054},
{"id":14,"first_name":"minsu","last_name":"how","email":"twinchcombd@wikia.com","gender":"Male","salary":1164},
{"id":15,"first_name":"minsu","last_name":"are","email":"gwellmane@aboutads.info","gender":"Female","salary":1879},
{"id":16,"first_name":"minsu","last_name":"you","email":"gpainef@yandex.ru","gender":"Male","salary":6044},
{"id":17,"first_name":"minsu","last_name":"minsu","email":"dpottageg@infoseek.co.jp","gender":"Male","salary":1568},
{"id":18,"first_name":"minsu","last_name":"bangabgo","email":"eromanskih@msn.com","gender":"Male","salary":9890},
{"id":19,"first_name":"minsu","last_name":"jalgago","email":"oswainstoni@uol.com.br","gender":"Male","salary":5797},
{"id":20,"first_name":"minsu","last_name":"sugoring","email":"hkemptonj@statcounter.com","gender":"Male","salary":8569}]`

let employees = JSON.parse(json);
console.log(employees);

document.querySelector('#searchGender').addEventListener('change', function(e) {
	
})

function initList() {
	let target = document.getElementById('empList');
	target.innerHTML = '';
	let selValue = document.querySelector('#searchGender').value;
	employees.forEach(emp => {
		if(selValue == 'All' || emp.gender == selValue){
			target.appendChild(makeRow(emp));
		}
	});
}
initList();

// 사원정보 => row 생성.
function makeRow(emp = {}) {
	let fields = ['id', 'first_name', 'last_name', 'salary'];
	let tr = document.createElement('tr');
	fields.forEach(field => {
		let td = document.createElement('td');
		td.innerHTML = emp[field];
		tr.appendChild(td);
	})
	return tr;
}