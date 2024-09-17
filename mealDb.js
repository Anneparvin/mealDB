
const loadMeals = (searchText) =>{
 fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
.then(res => res.json())
.then(meals => displayMeals(meals.meals))
}

const displayMeals = (meals) => {
  const mealContainer = document.getElementById('meal-container');
  mealContainer.innerText="";
  console.log(meals);
for(const meal of meals){
  console.log(meal);
   const mealDiv = document.createElement('div');
   mealDiv.classList.add('col');
   mealDiv.innerHTML= `
  <div class="card" style="width: 18rem;">
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions}</p>
 <div class="text-center mt-5">
    <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
      MealDeatils
    </button>
  </div>
  </div>
</div>
   `
   mealContainer.appendChild(mealDiv);

 }
}
// search by Item
const searchMeals = ()=>{
  const searchText = document.getElementById('search-field').value;
  console.log(searchText);
  loadMeals(searchText)
}
// search by IdName
const loadMealDetails = (idMeal) => {
  const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  console.log(url)
  fetch(url)

  .then(res =>res.json())
  .then(data => displayLoadMealsDetails(data.meals[0]))
  .catch(err =>{
    console.log(err)
  })
}

// This is async/ await  maethod

// const loadMealDetails2 = async(idMeal) => {
//   const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
//   console.log(url)
//   try{
//     const res = await fetch(url);
//     const data = await res.json();
//     displayLoadMealsDetails(data.meals[0])
//   }
//   catch(error){
// console.log(error)
//   }
// }

const displayLoadMealsDetails = meal => {
  document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
  const mealsBody = document.getElementById('mealDetailsBody');
  mealsBody.innerHTML = `
  <img class="img-fluid" src="${meal.strMealThumb}"/>
  <p>${meal.strSource}</p>
  `
}

loadMeals('fish');