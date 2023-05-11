const countriesContainer = document.querySelector('.countries-container')

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
         console.log(country);
        const countryCard = document.createElement('a')
        countryCard.classList.add('country-card')
        // countryCard.href = `/country.html?name=${country.name.common}`
        countryCard.innerHTML = `
            
            <div class="card-text">
            <img src=${country.flags.png}/>
                <h3 class="card-title">${country.name}</h3>
                <p><b>Flags: </b>${country.png}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Latlng: </b>${country.latlng}</p>
                <p><b>CountryCode: </b>${country.alpha2Code}</p>
                <p><b>Capital: </b>${country.capital?.[0]}</p>
                <div>
                <button type="button" onClick = "weather()" class="btn btn-primary">${country. Weather}</button>
                </div>
            </div>
    `
        countriesContainer.append(countryCard)
    })
  })



  
