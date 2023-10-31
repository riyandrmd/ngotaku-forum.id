fetch('https://api.jikan.moe/v4/manga')
.then((response) => response.json())
.then((res) => {
    for(let m=0;m<15;m++){
        const root = document.querySelector(".manga")
        const container = document.createElement("div")
        const mangacards = document.createElement('div')
        const image = document.createElement('img')
        const title = document.createElement('p')
        const sinopsis = document.createElement('div')
        const text = document.createElement('p')
        const cover = document.createElement('div')
         
        cover.classList.add("cover")
        sinopsis.classList.add("sinopsis")
        mangacards.classList.add("mangacard")
        container.classList.add("mangabox")

        title.innerText = res.data[m].title;
        image.src = res.data[m].images.jpg.image_url;
        text.innerText = res.data[m].synopsis;

        cover.appendChild(image)
        sinopsis.appendChild(text)
        mangacards.appendChild(cover)
        mangacards.appendChild(sinopsis)
        container.appendChild(title)
        container.appendChild(mangacards)
        root.appendChild(container)
    }
})

function showsignin(){
    document.getElementById("login").style.display = "none";
    document.getElementById("signin").style.display = "flex";
}

function showlogin(){
    document.getElementById("signin").style.display = "none";
    document.getElementById("login").style.display = "flex";
}


fetch('https://api.jikan.moe/v4/anime')
.then((response) => response.json())
.then((res) => {
    for(let m=9;m<24;m++){
        const root = document.querySelector(".anime")
        const container = document.createElement("div")
        const animecard = document.createElement('div')
        const image = document.createElement('img')
        const title = document.createElement('p')
        const sinopsis = document.createElement('div')
        const text = document.createElement('p')
        const cover = document.createElement('div')
        const hipe = document.createElement('p')
         
        cover.classList.add("cover")
        sinopsis.classList.add("sinopsis")
        hipe.classList.add("status")
        animecard.classList.add("animecard")
        container.classList.add("animebox")
        hipe.classList.add("status")

        title.innerText = res.data[m].title;
        image.src = res.data[m].images.jpg.image_url;
        text.innerText = res.data[m].synopsis;
        hipe.innerText = `status : ${res.data[m].status}`;

        cover.appendChild(image)
        sinopsis.appendChild(text)
        animecard.appendChild(cover)
        animecard.appendChild(sinopsis)
        container.appendChild(title)
        container.appendChild(animecard)
        container.appendChild(hipe)
        root.appendChild(container)
    }
})

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
