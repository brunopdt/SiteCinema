const mostraFilmes = data => {
  let dadosFilmes = JSON.parse(data.target.response)
  localStorage.setItem('db_filmes', data.target.response)
  let dadosHTML = ''
  for (let i = 0; i < dadosFilmes.results.length; i++) {
    let filme = dadosFilmes.results[i]
    dadosHTML += `
        <div class="card col-xs-12 col-sm-12 col-md-3 col-lg-2">
        <a href="detalhes_filme.html?id=${filme.id}"><img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" width="200" alt="FilmeXPTO"></a>
                <div class="card-body">
                    <h5 class="card-title">${filme.title}</h5>
                    <p class="card-text">${filme.vote_average}</p>
                    <p class="card-text" id="ultimaInfo">${filme.release_date}</p>
                </div>
            </div>
        `
  }
  document.getElementById('populares').innerHTML = dadosHTML
}

const mostraFilmes2 = data => {
  let dadosFilmes = JSON.parse(data.target.response)
  localStorage.setItem('db_filmes2', data.target.response)
  let dadosHTML = ''
  for (let i = 0; i < dadosFilmes.results.length; i++) {
    let filme = dadosFilmes.results[i]
    dadosHTML += `
        <div class="card col-xs-12 col-sm-12 col-md-3 col-lg-2">
        <a href="detalhes_filme.html?id=${filme.id}"><img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" width="200" alt="FilmeXPTO"></a>
                <div class="card-body">
                    <h5 class="card-title">${filme.title}</h5>
                    <p class="card-text">${filme.vote_average}</p>
                    <p class="card-text" id="ultimaInfo">${filme.release_date}</p>
                </div>
            </div>
        `
  }
  document.getElementById('lancamentos').innerHTML = dadosHTML
}

const mostraFilmes3 = data => {
  let dadosFilmes = JSON.parse(data.target.response)
  localStorage.setItem('db_filmes3', data.target.response)
  let dadosHTML = ''
  for (let i = 0; i < dadosFilmes.results.length; i++) {
    let filme = dadosFilmes.results[i]
    dadosHTML += `
        <div class="card col-xs-12 col-sm-12 col-md-3 col-lg-2">
        <a href="detalhes_filme.html?id=${filme.id}"><img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" width="200" alt="FilmeXPTO"></a>
                <div class="card-body">
                    <h5 class="card-title">${filme.title}</h5>
                    <p class="card-text">${filme.vote_average}</p>
                    <p class="card-text" id="ultimaInfo">${filme.release_date}</p>
                </div>
            </div>
        `
  }
  document.getElementById('cinemas').innerHTML = dadosHTML
}

const mostraErro = data => {
  alert('Deu erro na requisição')
}

const init = () => {
  let xhr = new XMLHttpRequest()
  let url =
    'https://api.themoviedb.org/3/movie/popular?api_key=906630b6b95297f078ebc2b6b77d1036&language=pt-BR'
  xhr.onload = mostraFilmes
  xhr.onerror = mostraErro
  xhr.open('GET', url, true)
  xhr.send()

  let xhr2 = new XMLHttpRequest()
  xhr2.onload = mostraFilmes2
  xhr2.onerror = mostraErro
  xhr2.open(
    'GET',
    'https://api.themoviedb.org/3/movie/upcoming?api_key=906630b6b95297f078ebc2b6b77d1036&language=pt-BR&page=1',
    true
  )
  xhr2.send()

  let xhr3 = new XMLHttpRequest()
  xhr3.onload = mostraFilmes3
  xhr3.onerror = mostraErro
  xhr3.open(
    'GET',
    'https://api.themoviedb.org/3/movie/now_playing?api_key=906630b6b95297f078ebc2b6b77d1036&language=pt-BR&page=1',
    true
  )
  xhr3.send()
}
