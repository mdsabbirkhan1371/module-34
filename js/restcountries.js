const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')

        .then(res => res.json())
        .then(data => displayCountryies(data))
}
loadCountries()
const displayCountryies = (countryies) => {
    // for of and for each diye kora

    /* 
    for (const country of countryies) {
    console.log(country)}
    */

    const countryiesDiv = document.getElementById('countries')
    countryies.forEach(country => {
        // console.log(country)
        const div = document.createElement('div')
        div.classList.add('country')

        /* const h3 = document.createElement('h3')
        h3.innerText = country.name;
        div.appendChild(h3)
        const p = document.createElement('p')
        p.innerText = c;
        div.appendChild(p) */

        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>

        <button onclick="loadBycountryName('${country.name}')">Details</button>
        `
        countryiesDiv.appendChild(div)

    })
}

const loadBycountryName = (name) => {
    const url = `https://restcountries.com/v2/name/${name}
    `
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = (country) => {
    console.log(country)
    const countryDiv = document.getElementById('country-details')
    countryDiv.innerHTML =
        `
    <h3>Name:${country.name}</h3>
    <p>Capital: ${country.capital}</p>
    <img width="150px" src="${country.flag}"/>
    `
}