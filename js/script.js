// (image banner)
const id = ["51009", "51179", "54112", "53998"]

id.map((val) =>
    fetch(`https://api.jikan.moe/v4/anime/${val}`).then((data) => data.json()).then((res) => {
        console.log(res);
        const banner = document.getElementById("banner");
        const divBaru = document.createElement('div');
        const imgBaru = document.createElement('img');;
        const judul = document.createElement('h1');
        const genre = document.createElement('p');

        const a = res.data.genres
        genre.innerText = `${res.data.genres[0].name}, ${res.data.genres[1].name}`
        divBaru.classList.add('slider');
        imgBaru.src = res.data.images.webp.large_image_url;
        judul.textContent = res.data.title;

        divBaru.appendChild(judul)
        divBaru.appendChild(genre)
        divBaru.appendChild(imgBaru)
        banner.appendChild(divBaru)
    })
)

fetch('https://api.jikan.moe/v4/seasons/now')
.then((response) => response.json())
.then((res) => {
    // console.log(res)
    let loop = res.data
    let b = 0
    for (let x of loop) {
        if (b != 6) {
            const container = document.querySelector(".ongoing")

            const cards = document.createElement("div")
            const poster = document.createElement("img")
            const title = document.createElement("div")
            const rate = document.createElement("p")
            const images = document.createElement("div")


            cards.title = res.data[b].title;
            title.classList.add("title")

            poster.src = res.data[b].images.jpg.image_url;
            rate.innerText = res.data[b].score;

            console.log(rate)
            title.innerText = res.data[b].title;
            cards.classList.add("card")
            images.classList.add("images")

            images.appendChild(poster);
            cards.appendChild(images);
            cards.appendChild(title);
            cards.appendChild(rate);

            container.appendChild(cards);
        }
        b++;
    }
})

fetch('https://api.jikan.moe/v4/seasons/upcoming')
.then((response) => response.json())
.then((res) => {
    // console.log(res)
    let loop = res.data
    let b = 0
    for (let x of loop) {
            const container2 = document.querySelector(".video-container")
            const video = document.createElement("iframe")
            const vidcards = document.createElement("div")
            
            const container = document.querySelector(".upcoming")
            const cards = document.createElement("div")
            const poster = document.createElement("img")
            const title = document.createElement("div")
            const title2 = document.createElement("div")
            const rate = document.createElement("p")
            const images = document.createElement("div")

            
            cards.title = res.data[b].title;
            
            title2.classList.add("title")
            poster.src = res.data[b].images.jpg.image_url;
            rate.innerText = "-";
            title2.innerText = res.data[b].title;
            
            cards.classList.add("card")
            images.classList.add("images")
            images.appendChild(poster);
            cards.appendChild(images);
            cards.appendChild(title2);
            cards.appendChild(rate);

            if(res.data[b].trailer.embed_url != null && res.data[b].mal_id != 41467){
                video.src = res.data[b].trailer.embed_url
                video.setAttribute("allow","fullscreen")
                vidcards.classList.add("video")
                vidcards.title = res.data[b].title;
                title.innerText = res.data[b].title;
                title.classList.add("title")

                vidcards.appendChild(video)
                vidcards.appendChild(title)
                container.appendChild(cards);                    
                container2.appendChild(vidcards)
            }
        b++;
    }
})

fetch('https://api.jikan.moe/v4/recommendations/anime')
.then((response) => response.json())
.then((res) => {
    console.log(res)
    for (let x = 0 ; x<=10 ; x++) {
            const container = document.querySelector(".recommendation")
            const cards = document.createElement("div")
            const poster = document.createElement("img")
            const images = document.createElement("div")
            const title = document.createElement("div")
            const rate = document.createElement("p")

            cards.title = res.data[x].entry[0].title;
            title.classList.add("title")
            images.classList.add("images")
            rate.innerText = "-"
            poster.src = res.data[x].entry[0].images.jpg.image_url;
            title.innerText = res.data[x].entry[0].title;

            cards.classList.add("card")
            images.appendChild(poster);
            cards.appendChild(images);
            cards.appendChild(title);
            cards.appendChild(rate);
            container.appendChild(cards);
    }
})

function scrolling(buff){
    buff.addEventListener('wheel',(e)=> {
        e.preventDefault();
        buff.scrollLeft += e.deltaX;
        buff.scrollLeft += e.deltaY;
    })
}

const scrollUpcoming = document.querySelector(".upcoming");
const scrollOngoing = document.querySelector(".ongoing");
const scrollRecommend = document.querySelector(".recommendation")
const scrollVideo = document.querySelector(".video-container")
scrolling(scrollOngoing);
scrolling(scrollRecommend);
scrolling(scrollUpcoming)
scrolling(scrollVideo)


function menuDrop() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
window.onclick = function(event) {
    if (!event.target.matches('#menu')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}
  