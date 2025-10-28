
const list = document.querySelector("#categories");
const categorie = document.querySelectorAll(".item");

console.log(`Number of categories: ${categorie.length}`);

categorie.forEach(item => {
    const title = item.querySelector("h2");
    const itemsCount = item.querySelectorAll("ul li");
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${itemsCount.length}`);
})