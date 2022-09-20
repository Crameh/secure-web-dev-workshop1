// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict'

// https://opendata.paris.fr/explore/dataset/lieux-de-tournage-a-paris/information
const filmingLocations = require('./lieux-de-tournage-a-paris.json')

console.log('🚀 It Works!');

/**
 * 💅 Try to produce the most readable code, use meaningful variable names
 * Your intentions should be clear by just reading the code
 * Good luck, have fun !
 */

// 📝 TODO: Number of filming locations
// 1. Make the function return the number of filming locations
function getFilmingLocationsNumber () {
	return filmingLocations.length
}
console.log(`There is ${getFilmingLocationsNumber()} filming locations in Paris`)

// 📝 TODO: Filming locations sorted by start date, from most recent to oldest.
// 1. Implement the function
// 2. Log the first and last item in array
function sortFilmingLocationsByStartDate () {
	let newJson = filmingLocations.sort(function(itemA, itemB) {return new Date(itemB.fields.date_debut) - new Date(itemA.fields.date_debut)})
	/*const newJson = Object.keys(filmingLocations).map(function (key) {
		return filmingLocations[key];
	  })
	  .sort(function (itemB, itemA) {
		return itemA.fields.date_debut - itemB.fields.date_debut;
	  });*/
	return newJson
}
console.log('Le premier et le dernier (date début): ')
console.log(sortFilmingLocationsByStartDate()[0].fields.date_debut)
console.log(sortFilmingLocationsByStartDate()[filmingLocations.length-1].fields.date_debut)

// 📝 TODO: Number of filming locations in 2020 only
// 1. Make the function return the number of filming locations in 2020 only
// 2. Log the result
function getFilmingLocationsNumber2020 () {
	return filmingLocations.filter(function(o) {return o.fields.id_lieu.substring(0,4) == '2020'}).length
}
console.log(`There is ${getFilmingLocationsNumber2020()} filming locations in 2020 only`)

// 📝 TODO: Number of filming locations per year
// 1. Implement the function, the expected result is an object with years as
// keys and filming locations number as value, e.g:
//    const filmingLocationsPerYear = {
//      '2020': 1234,
//      '2021': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerYear () {
	const setYear = new Set()
	for(let i = parseInt(sortFilmingLocationsByStartDate()[filmingLocations.length - 1].fields.date_debut.substring(0,4)); i < parseInt(sortFilmingLocationsByStartDate()[0].fields.date_debut.substring(0,4)); i++) {
		setYear.add(i)
	}
	let dico = {}
	setYear.forEach(year => dico[year] = filmingLocations.filter(function(o) {return o.fields.id_lieu.substring(0,4) == year}).length)
	return dico
}
console.log('Films locations per year : ')
console.log(getFilmingLocationsNumberPerYear())

// 📝 TODO: Number of filming locations by district (arrondissement)
// 1. Implement the function, the expected result is an object with
// district as keys and filming locations number as value, e.g:
//    const filmingLocationsPerDistrict = {
//      '75013': 1234,
//      '75014': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerDistrict () {
	const setDist = new Set()
	filmingLocations.forEach(film => setDist.add(film.fields.ardt_lieu))
	let dico = {}
	setDist.forEach(dist => dico[dist] = filmingLocations.filter(function(o) {return o.fields.ardt_lieu == dist}).length)
	return dico
}
console.log('Films locations per district : ')
console.log(getFilmingLocationsNumberPerDistrict())

// 📝 TODO: Number of locations per film, sorted in descending order
// 1. Implement the function, result expected as an array of object like:
//    const result = [{film: 'LRDM - Patriot season 2', locations: 12}, {...}]
// 2. Log the first and last item of the array
function getFilmLocationsByFilm () {
	const setName = new Set()
	filmingLocations.forEach(film => setName.add(film.fields.nom_tournage))
	let array = []
	setName.forEach(name => array.push({film : name, locations: filmingLocations.filter(function(o) {return o.fields.nom_tournage == name}).length}))
	return array
}
console.log('Films locations by film')
console.log(getFilmLocationsByFilm())

// 📝 TODO: Number of different films
// 1. Implement the function
// 2. Log the result
function getNumberOfFilms() {
	const setName = new Set()
	filmingLocations.forEach(film => setName.add(film.fields.nom_tournage))
	return setName.size
}
console.log('Number of different films : ' + getNumberOfFilms())


// 📝 TODO: All the filming locations of `LRDM - Patriot season 2`
// 1. Return an array with all filming locations of LRDM - Patriot season 2
// 2. Log the result
function getArseneFilmingLocations () {
	let array = []
	filmingLocations.filter(function(o) {return o.fields.nom_tournage == `LRDM - Patriot season 2`}).forEach(film => array.push(film))
	return array
}
console.log('Tous les films de `LRDM - Patriot season 2` : ')
console.log(getArseneFilmingLocations())

// 📝 TODO: Tous les arrondissement des lieux de tournage de nos films favoris
//  (favoriteFilms)
// 1. Return an array of all the districts of each favorite films given as a
//    parameter. e.g. :
//    const films = { 'LRDM - Patriot season 2': ['75013'] }
// 2. Log the result
function getFavoriteFilmsLocations (favoriteFilmsNames) {
	return []
}
const favoriteFilms =
	[
		'LRDM - Patriot season 2',
		'Alice NEVERS',
		'Emily in Paris',
	]

// 📝 TODO: All filming locations for each film
//     e.g. :
//     const films = {
//        'LRDM - Patriot season 2': [{...}],
//        'Une jeune fille qui va bien': [{...}]
//     }
function getFilmingLocationsPerFilm () {
	return { }
}

// 📝 TODO: Count each type of film (Long métrage, Série TV, etc...)
// 1. Implement the function
// 2. Log the result
function countFilmingTypes () {
	return {}
}

// 📝 TODO: Sort each type of filming by count, from highest to lowest
// 1. Implement the function. It should return a sorted array of objects like:
//    [{type: 'Long métrage', count: 1234}, {...}]
// 2. Log the result
function sortedCountFilmingTypes () {
	return []
}

/**
 * This arrow functions takes a duration in milliseconds and returns a
 * human-readable string of the duration
 * @param ms
 * @returns string
 */
const duration = (ms) => `${(ms/(1000*60*60*24)).toFixed(0)} days, ${((ms/(1000*60*60))%24).toFixed(0)} hours and ${((ms/(1000*60))%60).toFixed(0)} minutes`

// 📝 TODO: Find the filming location with the longest duration
// 1. Implement the function
// 2. Log the filming location, and its computed duration

// 📝 TODO: Compute the average filming duration
// 1. Implement the function
// 2. Log the result
