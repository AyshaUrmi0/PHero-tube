// step-1 : fetch,load ,show categories in html


// create loadCategories
const loadCategories=()=>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=>res.json())
    .then((data)=>displayCategories(data.categories))
   .catch((error)=>console.log(error))


};
const loadVideos=()=>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res)=>res.json())
    .then((data)=>displayVideos(data.videos))
   .catch((error)=>console.log(error))


};


// create displayVideos
const displayVideos=(videos)=>{
    const videoContainer=document.getElementById("videos");
    console.log(videoContainer);
    
    videos.forEach((video)=> {
        const videoDiv=document.createElement("div");
        videoDiv.classList="card card-compact";
        videoDiv.innerHTML=
        `  <figure class="h-[200px]">
    <img class="h-full w-full object-cover"
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2 flex gap-2">

    <div>
      <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} alt=""/>

    </div>
    <div>
      <h2 class="text-lg font-bold">${video.title}</h2>
      <div class="flex items-center gap-2">
      <p class="text-sm opacity-70">${video.authors[0].profile_name}</p>
      ${video.authors[0].verified? `<img class="w-5" src=https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png alt=""/>`: ""}
      </div>
    </div>
  </div>`;
        videoContainer.appendChild(videoDiv);
    });

}



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



loadVideos();

