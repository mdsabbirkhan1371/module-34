const searchFood = async () => {
    const searchField = document.getElementById('search-field')

    const searchText = searchField.value;
    searchField.value = ''

    if (searchText == '') {
        'no result'
    }
    else {
        // load data 

        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

        const res = await fetch(url)
        const data = await res.json()
        diplayMeal(data.meals)
        /*  fetch(url)
             .then(res => res.json())
             .then(data => diplayMeal(data.meals)) */
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

const loadMealdetails = async mealID => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`

    const res = await fetch(url)
    const data = await res.json()
    diplayMealDetail(data.meals[0])

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => diplayMealDetail(data.meals[0]))
}

const diplayMealDetail = (meal) => {
    // console.log(meal)

    const mealDetails = document.getElementById('meal-details')
    // mealDetails.innerText = ''
    mealDetails.textContent = ''
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