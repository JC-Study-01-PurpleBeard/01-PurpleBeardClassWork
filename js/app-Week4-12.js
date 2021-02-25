/*
localStorage.setItem('name', 'justin');
let name = localStorage.getItem('name');
console.log(name);

let users = ['blue', 'red', 'green'];
let userData = JSON.stringify(users);
console.log(userData);
console.log(users);
localStorage.setItem('users', userData);

userData = localStorage.getItem('users');
console.log(userData);

let usersObject = [{ username: 'pass', password: 'pass' }];
let userDataObject = JSON.stringify(userDataObject);
console.log(userDataObject);
console.log(usersObject);
localStorage.setItem('usersObject', useruserDataObjectData);

userDataObject = localStorage.getItem('usersObject');
console.log(userDataObject);
*/

// let users = [];
// let users = [
// 	{ name: 'test', username: 'test1', password: 'test2' },
// 	{ name: 'testa', username: 'test1a', password: 'test2a' },
// 	{ name: 'testb', username: 'test1b', password: 'test2b' },
// ];
// localStorage.setItem('users', JSON.stringify(users));

let currentUser = '';
localStorage.setItem('currentUser', '');

let name = '';
let username = '';
let password = '';

const createUser = (name, username, password) => {
	return { name: name, username: username, password: password };
};

const addUser = (user) => {
	const users = JSON.parse(localStorage.getItem('users'));
	users.push(user);
	localStorage.setItem('users', JSON.stringify(users));
};

const input = () => {
	name = document.getElementById('name').Value;
	username = document.getElementById('username').Value;
	password = document.getElementById('password').Value;
};

const signUp = () => {
	input();
	addUser(createUser(name, username, password));
	// console.log(`${name} registered`);
	window.location.href = 'index-Week4-12login.html';
};

const login = () => {
	input();
	const users = JSON.parse(localStorage.getItem('users'));
	let found = false;

	users.forEach((ele) => {
		if (
			ele.name == name &&
			ele.username == username &&
			ele.password == password
		) {
			found = true;
		}
	});

	if (!found) {
		console.log('user not found');
	} else {
		currentUser = name;
		localStorage.setItem('currentUser', name);
		console.log('Logging in..');
		window.location.href = 'index-Week4-12.html';
	}
};
