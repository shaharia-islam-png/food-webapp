document.getElementById("btn").onclick = function(){
    const country = document.getElementById("inputField").value
 
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)

    .then(response => {
        if(!response.ok){
            throw new Error("Failed to fetch data")
        }
        return response.json()

    })
   .then(data => {
  document.getElementById("food").innerHTML = "";
  document.getElementById("print").innerText = "";

  if (data.meals) {
    document.getElementById("print").innerText = `Here is the list of ${country} food`;

    data.meals.forEach(meal => {
  document.getElementById("food").innerHTML += `
    <div class="card">
      <img class="image" src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <p class="foodname">${meal.strMeal}</p>
    </div>
  `;
});
  }
  else{
    document.getElementById("print").innerText = "No image found";
  }
})
    .catch(error => {
         document.getElementById("print").innerText = error.message
    })
}