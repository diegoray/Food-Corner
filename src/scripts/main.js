function main() {

    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken')
        .then(response => response.json())
        .then(meal => {
            const cards = meal.meals;
            let mealCards = '';
            cards.forEach(meal => mealCards += showMealCards(meal))
            const listRecipeElement = document.querySelector(".listRecipe");
            listRecipeElement.innerHTML = mealCards;

            // When button "Details" on clicked
            const detailsButton = document.querySelectorAll('.modal-details-button');
            detailsButton.forEach(btn => {
                btn.addEventListener('click', function () {
                    const mealid = this.dataset.mealid;
                    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
                    .then(response => response.json())
                    .then(meal => {
                        const detail = meal.meals;
                        let mealDetail = '';
                        detail.forEach(meal => mealDetail += showMealDetail(meal))
                        let mealElement = document.querySelector(".modal-body");
                        mealElement.innerHTML = mealDetail;                        
                    })
                    .catch(message => {
                        showResponseMessage(message);
                    });
                });
            });        
        })
        .catch(message => {
            showResponseMessage(message);
        })    
    };

    function showMealCards (meal) {
        return `
        <div class="card mx-auto col-lg-4 col-md-6 col-sm-12" style="width: 18rem; margin-top: 12px;">
            <img class="card-img-top" src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <a href="" class="btn btn-primary modal-details-button" data-toggle="modal" data-target="#mealDetailsModal" data-mealid="${meal.idMeal}">Details</a>
            </div>
        </div>`;
    }
    
    function showMealDetail (meal) {
        return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${meal.strMealThumb}" class="img-fluid">
                    </div>
                    <div class="col-md">
                    <ul class="list-group">
                        <li class="list-group-item"><h4>${meal.strMeal}</h4></li>
                        <li class="list-group-item"><strong>Area : </strong>${meal.strArea}</li>
                        <li class="list-group-item">
                            <strong>Ingrediendt : </strong> <br> 
                            <i><b>${meal.strIngredient1}</b></i> 
                            ${meal.strIngredient2} 
                            <i><b>${meal.strIngredient3}</b></i>
                            ${meal.strIngredient4} 
                            <i><b>${meal.strIngredient5}</b></i>
                            ${meal.strIngredient6} 
                            <i><b>${meal.strIngredient7}</b></i>
                            ${meal.strIngredient8} 
                            <i><b>${meal.strIngredient9}</b></i>
                            ${meal.strIngredient10}
                            <i><b>${meal.strIngredient11}</b></i>
                            ${meal.strIngredient12}
                            <i><b>${meal.strIngredient13}</b></i>
                            ${meal.strIngredient14}
                            <i><b>${meal.strIngredient15}</b></i>
                            ${meal.strIngredient16}
                            <i><b>${meal.strIngredient17}</b></i>
                            ${meal.strIngredient18}
                            <i><b>${meal.strIngredient19}</b></i>
                            ${meal.strIngredient20}
                        </li>
                        <li class="list-group-item"><strong>Instructions : </strong> <br> ${meal.strInstructions}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
    }

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

export default main;
