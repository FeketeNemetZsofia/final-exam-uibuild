const rootElem = document.getElementById("root")



rootElem.insertAdjacentHTML("beforeend", `<header><p>New York Times Bestsellers</p></header>`)

rootElem.insertAdjacentHTML("beforeend", `<div class="wrapper"></div>`)

const wrapperElem = document.querySelector(".wrapper")

const cardSkeleton = (data, index) => `

<div class="card"><p class="number">${index+1}</p>
<p class="sub">${data.sub}</p>
<p class="title">${data.title}</p>
<p class="text">${data.text}</p>
<button class="readmore">read more</button>


</div>


`
books.forEach((book, index) => {
    wrapperElem.insertAdjacentHTML("beforeend", cardSkeleton(book, index))
})


