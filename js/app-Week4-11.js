let API_Key = `563492ad6f91700001000001d3a32ef416904ce18eb06b96c2222211`;
let BaseURL = 'https://api.pexels.com/v1/curated?per_page=24';
let main = document.querySelector('main');

fetch(BaseURL, { headers: { Authorization: API_Key } })
	.then((res) => res.json())
	.then((data) => {
		data.photos.forEach((pics) => {
			let img = document.createElement('div');
			img.className = 'imgDetails';
			// img.style.backgroundImage = `url(${data.photos[1].src.medium})`;
			img.style.backgroundImage = `url(${pics.src.medium})`;
			main.appendChild(img);
		});

		console.log(data);
	})
	.catch((err) => console.log(err));
