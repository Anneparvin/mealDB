// function loadData() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => displayPosts(data));
// }

// function displayPosts(posts){
//     console.log(posts);
//     const postContainer = document.getElementById('post-container');
//     for(const post of posts){
//         const postDiv = document.createElement('div');
//         postDiv.innerHTML = `
//         <h5>user- ${post.userId}</h5>
//         <h5>title- ${post.title}</h5>`
//         ;
//         postContainer.appendChild(postDiv);
//     }
// }
// function loadTodo(){
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(res => res.json())
//     .then (data => displayTodo(data));
// }

// function displayTodo(todos){
// const todoContainer = document.getElementById('todo-container')
// for(const todo of todos){
//     console.log(todo);
//     const todoDiv = document.createElement('div')
//     todoDiv.innerHTML = `
//     <h5>user: ${todo.title}</h5>
//     <h5>user: ${todo.userId}</h5>`;
//     todoContainer.appendChild(todoDiv);

// }
// }

// function loadData2(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => displayUsers2(data));

// }
// function displayUsers2(data){
//     const ul = document.getElementById('users-list');
//     for(const user of data){
//         console.log(user.name);
//         const li = document.createElement('li');
//         li.innerText ='user';
//         ul.appendChild(li);
//     }
// }
// // randomUser
// function loadUsers3(){
//     fetch('https://randomuser.me/api/?gender=female')
//     .then(res => res.json())
//     .then(data => displayUser(data));
// }

// function displayUser(user){
//     const genderTag = document.getElementById('gender');
//     genderTag.innerHTML = user.results[0].gender;
//     const name = user.results[0].name.first + ' ' + user.results[0].name.last;
//     document.getElementById('name').innerHTML= name;
// }


// restCountries
function restCountries(){
    fetch ('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then (data => displayCountries(data));
}

function displayCountries(countries){
    const countriesContainer = document.getElementById('all-countries');
    // console.log(countries);
    // for(const country of countries){
    //     console.log(country);
    // }
    countries.forEach(country =>{
        console.log(country.cca2);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Country: ${country.name.common}</h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    })
}

 

function loadCountryDetails(code){
    url = `https://restcountries.com/v3.1/alpha/${code}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then (data => showCountryDetails(data[0]))
}

const showCountryDetails = country =>{
    console.log(country);
    const detailContainer = document.getElementById('country-detail')
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country');
    
    detailContainer.innerHTML=`
    <h3>Name: ${country.name.common}</h3>
    <img src="${country.flags.png}">
    `;
    
}
restCountries();
