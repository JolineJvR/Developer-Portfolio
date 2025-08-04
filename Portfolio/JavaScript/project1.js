// Ingredient list
const orderList = [];

/* Function takeOrders => Takes the order from the user */
function takeOrders() {
    const ingredient = prompt("What would you like to order?");
    const changedIngredient = ingredient.toLowerCase().replace(/ /g, "_");
    if (changedIngredient) {
        orderList.push(changedIngredient);
        storeOrders(orderList);
    } // Add to the list
}

/* Function fetchMeal => Fetches a meal from a given ingredient*/
function fetchMeal(ingredient) {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then(res => {
            if (!res.ok) {
                throw new Error("Network is not Okay");
            }
            // Parse response as JSON
            return res.json();
        })
        // Log the data
        .then(data => console.log(data))
        .catch(error => console.error("Error:", error));
}

/* Function fetchRandomMeal => Fetches a random meal*/
async function fetchRandomMeal() {
    const url = ("https://www.themealdb.com/api/json/v1/1/random.php");

    try {
        const res = await fetch(url);

        // Log status code to see if the request is successful
        console.log("Response Status:", res.status);
        if (!res.ok) {
            throw new Error("Failed to fetch meals");
        }

        const data = await res.json();

        // Log the raw data to see what the response contains
        console.log("API Response Data:", data);

        if (!data.meals || data.meals.length === 0) {
            return "No meals found.";
        }

        const meal = data.meals[0];
        await new Promise(resolve => setTimeout(resolve, Math.random() * 100));
        orderList.push(meal.strMeal);
        storeOrders(orderList); // Store orderList with new random meal
        return meal.strMeal;
    } catch (error) {
        console.error("Error:", error);
        return "Error fetching meal";
    }
}
// fetchingRandomMEals().then(meal => console.log(meal));

/* Function storeOrders => Takes the order and saves it in the session storage
*/
function storeOrders(orderList) {
    sessionStorage.setItem("mealOrders", JSON.stringify(orderList));
}

/* Function getOrders => Fetches the order from the session storage */
function getOrders() {
    const mealOrders = sessionStorage.getItem("mealOrders");
    if (mealOrders) {
        return JSON.parse(mealOrders);
    }
    return [];
}

/* Function displayOrders => Displays the fetched order(s) */
function displayOrders() {
    const orderList = getOrders();
    if (!Array.isArray(orderList)) {
        alert("Error orderList is not an array.");
    }
    if (orderList.length === 0) {
        alert("No orders yet!");
    } else {
        alert(`Current orders:\n ${orderList.join("\n")}`);
    }
}

/* Function optionMenu => A menu option for the user
1. Take order
2. Show order
3. Random Meal
4. Exit */
async function optionMenu() {
    while (true) {
        let menu = prompt("1. Take Order \n2. Show order \n3. Random Meal \n4. Exit");

        if (menu === "1") {
            alert("Taking order...");
            takeOrders();
        } else if (menu === "2") {
            alert("Showing order...");
            displayOrders();
        } else if (menu === "3") {
            alert("Fetching Random meal...");
            let meal = await fetchRandomMeal();
            alert(`Random meal: ${meal ? meal : "Meal not found"}`);
        } else if (menu === "4") {
            alert("Exiting...");
            break;
        } else {
            alert("You have entered an invalid choice, please try again.");
        }
    }
}

optionMenu();