//api.openweathermap.org/data/2.5/weather?q=london&appid=403a5bd6bf1655d08900982bd784b88d
//403a5bd6bf1655d08900982bd784b88d - API Key

const APIKey = `403a5bd6bf1655d08900982bd784b88d`;
let search = () => {
	let cityname = document.querySelector('input').value;

	let data = fetch(
		`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}`
	)
		.then((res) => res.json())
		.then((data) => {
			let temp = Math.trunc(data.main.temp) - 273;
			document.getElementById(
				'results'
			).innerHTML = `<p>temperature <b>${temp} °C</b><br>${data.weather[0].description}</p>`;
		})
		.catch((err) => console.log(err));
};
