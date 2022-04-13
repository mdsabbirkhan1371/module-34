const searchFood = () => {
    const searchField = document.getElementById('search-field')

    const searchText = searchField.value;
    searchField.value = ''

    if (searchText == '') {
        'no result'
    }
    else {
        // load data 

        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

        fetch(url)
            .then(res => res.json())
            .then(data => diplayMeal(data.meals))
    }

};


const diplayMeal = (meals) => {
    // console.log(meals)
    const searchResult = document.getElementById('search-result')
    // searchResult.innerText = '' for clear prvious data
    searchResult.textContent = ''

    meals.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="loadMealdetails(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
        </div>
    </div>`
        searchResult.appendChild(div)
    });

}

const loadMealdetails = mealID => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
    fetch(url)
        .then(res => res.json())
        .then(data => diplayMealDetail(data.meals[0]))
}

const diplayMealDetail = (meal) => {
    // console.log(meal)

    const mealDetails = document.getElementById('meal-details')
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
        <a target="_blank" href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>`
    mealDetails.appendChild(div)
}