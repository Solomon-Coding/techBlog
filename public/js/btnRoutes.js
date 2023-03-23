const individualRecipeEl = document.getElementById("recipeList");
const viewRecipesEl = document.getElementById("view-recipes");
const editRecipeEl = document.getElementById("edit-recipe");
const addRecipeEl = document.getElementById("add-recipe");
// const deletebtn = document.getElementById('delete-btn');

// View all recipes
function toAllRecipes() {
    document.location.href = "/recipes"
}
viewRecipesEl?.addEventListener("click", toAllRecipes);

// View one recipe
function toRecipe(e) {
    const btnId = e.target.dataset.rid;
    document.location.href = `/recipes/${btnId}`;
}
individualRecipeEl?.addEventListener("click", toRecipe);

// Add recipe
function addRecipe() {
    document.location.href = `/addRecipe`;
}
addRecipeEl?.addEventListener("click", addRecipe);

// Edit recipe
function editRecipe(e) {
    const btnId = e.target.dataset.rid;
    document.location.href = `/edit/${btnId}`;
    // document.location.href = `/editRecipe`;
}
editRecipeEl?.addEventListener("click", editRecipe);

// // Delete recipe
// function deleteRecipe(e) {
//     const  btnId = e.target.dataset.rid;
//     document.location.href = `/recipes/${btnId}`;
// }
// deletebtn?.addEventListener("click", editRecipe);