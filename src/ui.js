class UI {
	constructor() {
		this.results = document.querySelector('#results');
		this.books = document.querySelector('#books');
		this.characters = document.querySelector('#characters');
		this.houses = document.querySelector('#houses');
	}
	
	clearResults() {
		this.books.innerHTML = '';
		this.characters.innerHTML = '';
		this.houses.innerHTML = '';
	}

	showBooks(dataBooks) {
		let output = '';

		dataBooks.forEach((book, index) => {
			output += `
				<div class="card bg-primary mb-5">
					<div class="card-header">
						Book ${index+1}
					</div>
					<div class="card-body">
						<h5 class="card-title">${book.name}, ${book.authors[0]}</h5>
						<ul class="list-group">
							<li class="list-group-item">Country: ${book.country}</li>
							<li class="list-group-item">Type of cover: ${book.mediaType}</li>
							<li class="list-group-item">Number of pages: ${book.numberOfPages}</li>
							<li class="list-group-item">Publisher: ${book.publisher}</li>
							<li class="list-group-item">Released: ${book.released}</li>
						</ul>
					</div>
				</div>
			`;
		});

		this.books.innerHTML = output;
	}

	showCharacters(dataCharacters) {
		let output = '';

		dataCharacters.forEach(character => {
			let tvSeries = character.tvSeries;
			let series = [];
			tvSeries.forEach(season => {
				return series.push(season);
			});

			let seasons = series.join(', ');

			output += `
				<div class="card bg-info mb-5">
					<div class="card-header">
						Name: ${character.name}
					</div>
					<div class="card-body">
						<ul class="list-group">
							<li class="list-group-item">Aliases: ${character.aliases[0]}</li>
							<li class="list-group-item">Culture: ${character.culture}</li>
							<li class="list-group-item">Gender: ${character.gender}</li>
							<li class="list-group-item">Born: ${character.born}</li>
							<li class="list-group-item">Title: ${character.titles[0]}</li>
							<li class="list-group-item">Role in Season: ${seasons}</li>
							<li class="list-group-item">Publisher: ${character.publisher}</li>
							<li class="list-group-item">Released: ${character.released}</li>
						</ul>
					</div>
				</div>
			`;
		});

		this.characters.innerHTML = output;
	}

	showHouses(dataHouses) {
		let output = '';

		dataHouses.forEach(house => {
			output += `
				<div class="card bg-danger mb-5">
					<div class="card-header">
						Name: ${house.name}
					</div>
					<div class="card-body">
						<ul class="list-group">
							<li class="list-group-item">Coat of Arms: ${house.coatOfArms}</li>
							<li class="list-group-item">Region: ${house.region}</li>
							<li class="list-group-item">Seats: ${house.seats[0]}</li>
							<li class="list-group-item">Titles: ${house.titles[0]}</li>
							<li class="list-group-item">Words: ${house.words}</li>
						</ul>
					</div>
				</div>
			`;
		});

		this.houses.innerHTML = output;
	}
}

export const ui = new UI();