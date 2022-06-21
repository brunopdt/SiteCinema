const parametros = new URLSearchParams(location.search)
let idfilme = parametros.get('id')
let url =
  'https://api.themoviedb.org/3/movie/' +
  idfilme +
  '?api_key=906630b6b95297f078ebc2b6b77d1036&language=pt-BR'

function showMovie() {
  let write = document.getElementById('divDetalheFilme')
  let text = ''
  let dadosFilmes = JSON.parse(this.responseText)
  console.log(dadosFilmes)
  let estreia = new Date(dadosFilmes.release_date)

  text =
    text +
    `<div class="row" style="display:flex">
  <img class="col-md-12 col-lg-6" class="card-img-top" id="poster" src="https://image.tmdb.org/t/p/w500${
    dadosFilmes.poster_path
  }" alt="Card image cap">
  <div class="col-md-12 col-lg-6 mx-auto" class="card-body" >
      <h1 class="card-title">${dadosFilmes.title}</h1>
      <h6 class="card-text subtitle">(${
        dadosFilmes.original_title
      } - ${estreia.toLocaleDateString()})</h6>
      <p class="card-text">${dadosFilmes.overview}</p>
      <p class="card-text ${getColor(dadosFilmes.vote_average)}" >${
      dadosFilmes.vote_average
    }</p>
      <p class="card-text" id="ultimaInfo">Idioma original: ${
        dadosFilmes.original_language
      }</p>
  </div>
</div>`
  write.innerHTML = text
}

function getColor(vote) {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}

function buscarFilmes(url) {
  let xhr = new XMLHttpRequest()

  xhr.onload = showMovie

  xhr.open('GET', url, false)
  xhr.send()
}

buscarFilmes(url)
