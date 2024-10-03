// step-1 : fetch,load ,show categories in html


// create loadCategories
const loadCategories=()=>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=>res.json())
    .then((data)=>displayCategories(data.categories))
   .catch((error)=>console.log(error))


};

// {
//     "category_id": "1001",
//     "category": "Music"
// }

// create DisplayCategories
const displayCategories=(categories)=>{
    const categoryContainer=document.getElementById("categories");
  categories.forEach(item => {
    const button=document.createElement("button");
    button.classList="btn";
    button.innerText=item.category;

    categoryContainer.appendChild(button);

    
  });
}



loadCategories();

displayCategories();
