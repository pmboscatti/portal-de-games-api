// FUNÇÃO PARA O CAMPO DE PESQUISA DO HEADER

let barraPesquisaHeader = document.querySelector('.barra--pesquisa');

barraPesquisaHeader.addEventListener('submit', (event) => {
    if (document.querySelector('#input-pesquisa').value.length < 1) {
        event.preventDefault();
    }
});

//////

function exibeDestaques() {
    fetch ('https://api.rawg.io/api/games?key=199fdfc3bbfd46088f3911c6c58ba89e&metacritic=80,100')
        .then(resposta => resposta.json ())
        .then(dados => {
            let str = '';
            for (let i = 0; i < 5; i++) {
                let destaque = dados.results[i];

                if (i==0) {
                    str += `<div class="carousel-item active principal--carrossel--item--imagem">
                                <img src="${destaque.background_image}" class="d-block w-100" alt="Imagem do jogo">

                                <div class="principal--carrossel--item--imagem--legenda--metacritica">
                                    <p>${destaque.metacritic}</p>
                                    <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                                </div>
                                
                                <div class="principal--carrossel--item--imagem--legenda--tag">
                                    <p>${destaque['tags'][0].name}</p>
                                </div>

                                <div class="principal--carrossel--item--imagem--legenda">
                                    <a href="detalhes.html?dd=${[i]}" target="_blank">
                                        <h1>${destaque.name}</h1>
                                    </a>
                                    <h5>Lançamento: <span
                                            style="font-weight: 300; margin-left: 10px;">${destaque.released}</span></h5>
                                </div>
                            </div>`;
                } else {
                    str += `<div class="carousel-item principal--carrossel--item--imagem">
                                <img src="${destaque.background_image}" class="d-block w-100" alt="Imagem do jogo">

                                <div class="principal--carrossel--item--imagem--legenda--metacritica">
                                    <p>${destaque.metacritic}</p>
                                    <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                                </div>
                                
                                <div class="principal--carrossel--item--imagem--legenda--tag">
                                    <p>${destaque['tags'][0].name}</p>
                                </div>

                                <div class="principal--carrossel--item--imagem--legenda">
                                    <a href="detalhes.html?dd=${[i]}" target="_blank">
                                        <h1>${destaque.name}</h1>
                                    </a>
                                    <h5>Lançamento: <span
                                            style="font-weight: 300; margin-left: 10px;">${destaque.released}</span></h5>
                                </div>
                            </div>`;
                }
            }

            document.getElementById('telaDestaques').innerHTML = str;
        })
}

function exibeLancamentos() {
    fetch ('https://api.rawg.io/api/games?key=199fdfc3bbfd46088f3911c6c58ba89e&dates=2022-01-01,2022-11-13')
        .then(resposta => resposta.json ())
        .then(dados => {
            let str = '';
            for (let i = 1; i < 7; i++) {
                let lancamento = dados.results[i];

                str += `<div class="col-12 col-md-6 col-xl-4 principal--lancamentos--card">
                            <div class="principal--lancamentos--item">
                                <div class="principal--lancamentos--item--imagem">
                                    <img src="${lancamento.background_image}" alt="capa do jogo">
                                </div>

                                <div class="principal--lancamentos--item--descricao">
                                    <div class="principal--lancamentos--item--descricao--titulos">
                                        <h5>${lancamento.name}</h5>
                                        <p>${lancamento['genres'][0].name}/${lancamento['genres'][1].name}</p>
                                    </div>

                                    <div class="principal--lancamentos--item--descricao--textos">
                                        <div class="principal--lancamentos--item--descricao--textos--titulos">
                                            <p>Lançamento:</p>
                                            <p>Plataformas:</p>
                                            <p>Lojas:</p>
                                        </div>

                                        <div class="principal--lancamentos--item--descricao--textos--complementos">
                                            <p>${lancamento.released}</p>
                                            <p>${lancamento['platforms'][0].platform.name}</p>
                                            <p>${lancamento['stores'][0].store.name}</p>
                                        </div>
                                    </div>

                                    <div class="principal--lancamentos--item--descricao--estatisticas">
                                        <div class="principal--lancamentos--item--descricao--estatisticas--contador">
                                            <p><i class="fa-solid fa-ranking-star"></i>${lancamento.ratings_count}</p>
                                        </div>
                                        <div class="principal--lancamentos--item--descricao--estatisticas--adicionados">
                                            <p><i class="fa-solid fa-cloud-arrow-down"></i>${lancamento.added}</p>
                                        </div>
                                        <div class="principal--lancamentos--item--descricao--estatisticas--detalhes">
                                            <a href="detalhes.html?id=${[i]}" target="_blank"><button>Ver Mais</button></a>
                                        </div>
                                    </div>
                                </div>

                                <div class="principal--lancamentos--item--avaliacao">
                                    <p>${lancamento.rating}</p>
                                    <p>Avaliação</p>
                                </div>
                            </div>
                        </div>`;
            }

            document.getElementById('telaLancamentos').innerHTML = str;
        })
}

function exibeDevelopers() {
    fetch ('https://api.rawg.io/api/developers?key=199fdfc3bbfd46088f3911c6c58ba89e')
        .then(resposta => resposta.json ())
        .then(dados => {
            let str = '';
            for (let i = 0; i < 4; i++) {
                let developers = dados.results[i];
                str += `<div class="col-12 col-lg-6 principal--developers--card">
                            <div class="principal--developers--item">
                                <div class="principal--developers--item--imagem">
                                    <img src="${developers.image_background}" alt="capa do jogo">
                                </div>

                                <div class="principal--developers--item--descricao">
                                    <div class="principal--developers--item--descricao--titulo">
                                        <h4>${developers.name}</h4>
                                    </div>

                                    <div class="principal--developers--item--descricao--estatisticas">
                                        <div class="principal--developers--item--descricao--estatisticas--contador">
                                            <p><i class="fa-solid fa-trophy"></i>${developers.games_count}</p>
                                        </div>

                                        <div class="principal--developers--item--descricao--estatisticas--jogos">
                                            <div
                                                class="principal--developers--item--descricao--estatisticas--jogos--titulo">
                                                <p>Principais jogos:</p>
                                            </div>
                                            <div
                                                class="principal--developers--item--descricao--estatisticas--jogos--principais">
                                                <p>${developers['games'][0].name}</p>
                                                <p>${developers['games'][1].name}</p>
                                                <p>${developers['games'][2].name}</p>
                                                <p>${developers['games'][3].name}</p>
                                                <p>${developers['games'][4].name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
            }

            document.getElementById('telaDevelopers').innerHTML = str;
        })
}

function exibePlataformas() {
    fetch ('https://api.rawg.io/api/platforms?key=199fdfc3bbfd46088f3911c6c58ba89e')
        .then(resposta => resposta.json ())
        .then(dados => {
            let str = '';
            for (let i = 0; i < 6; i++) {
                let plataformas = dados.results[i];
                str += `<div class="col-12 col-md-6 col-xl-4 principal--plataformas--card">
                            <div class="principal--plataformas--item">
                                <div class="principal--plataformas--item--imagem">
                                    <img src="${plataformas.image_background}" alt="Capa do jogo">
                                </div>

                                <div class="principal--plataformas--item--nome">
                                    <p>${plataformas.name}</p>
                                </div>

                                <div class="principal--plataformas--item--jogos">
                                    <p><i class="fa-solid fa-globe"></i>${plataformas.games_count}</p>
                                </div>
                            </div>
                        </div>`;
            }

            document.getElementById('telaPlataformas').innerHTML = str;
        })
}

function exibeLojas() {
    fetch ('https://api.rawg.io/api/stores?key=199fdfc3bbfd46088f3911c6c58ba89e')
        .then(resposta => resposta.json ())
        .then(dados => {
            let str = '';
            for (let i = 0; i < 4; i++) {
                let lojas = dados.results[i];
                str += `<div class="col-12 col-md-6 col-xl-3 principal--lojas--card">
                            <div class="principal--lojas--item">
                                <div class="principal--lojas--item--imagem">
                                    <img src="${lojas.image_background}" alt="capa do jogo">
                                </div>

                                <div class="principal--lojas--item--nome">
                                    <h4>${lojas.name}</h4>
                                </div>

                                <div class="principal--lojas--item--link">
                                    <a href="https://${lojas.domain}" target="_blank"><i class="fa-solid fa-up-right-from-square fa-xl"></i></a>
                                </div>
                            </div>
                        </div>`;
            }

            document.getElementById('telaLojas').innerHTML = str;
        })
}

//////

function exibePaginaLancamento(it) {
    fetch ('https://api.rawg.io/api/games?key=199fdfc3bbfd46088f3911c6c58ba89e&dates=2022-01-01,2022-11-13')
    .then(resposta => resposta.json ())
    .then(dados => {
        let jogo = dados.results[it];
        
        let strTitle = '';
        
        let strImagem = '';
        let strTitulo = '';
        let strPlataformas = '';
        let strLancamento = '';
        let strAvaliacao = '';
        let strGeneros = '';
        
        let strStatus1 = '';
        let strStatus2 = '';
        
        let strUpdate = '';
        
        let strLojas = '';

        strTitle = `Página do Game - ${jogo.name}`;

        strImagem = `<img src="${jogo.background_image}" alt="Imagem do jogo">`;

        strTitulo = `<h1>${jogo.name}</h1>`;

        for (let i = 0; i < jogo.platforms.length; i++) {
            strPlataformas += `<p>${jogo['platforms'][i].platform.name}</p>`;
        }

        strLancamento = `<p>Lançamento: ${jogo.released}</p>`;

        strAvaliacao = `<p>${jogo.rating}</p>`;

        for (let i = 0; i < jogo.genres.length; i++) {
            strGeneros += `<h4><i class="fa-solid fa-hashtag fa-sm"></i>${jogo['genres'][i].name}</h4>`;
        }

        strStatus1 = `
        <p>Yet:</p>
        <div class="progress status--barra">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-label="Animated striped example" aria-valuenow="${((jogo.added_by_status.yet)*100)/(jogo.added)}" aria-valuemin="0" aria-valuemax="${jogo.added}" style="width: ${(jogo.added_by_status.yet*100)/(jogo.added)}%"></div>
        </div>
        <p>Owned:</p>
        <div class="progress status--barra">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-label="Animated striped example" aria-valuenow="${((jogo.added_by_status.owned)*100)/(jogo.added)}" aria-valuemin="0" aria-valuemax="${jogo.added}" style="width: ${(jogo.added_by_status.owned*100)/(jogo.added)}%"></div>
        </div>
        <p>Beaten:</p>
        <div class="progress status--barra">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-label="Animated striped example" aria-valuenow="${((jogo.added_by_status.beaten)*100)/(jogo.added)}" aria-valuemin="0" aria-valuemax="${jogo.added}" style="width: ${(jogo.added_by_status.beaten*100)/(jogo.added)}%"></div>
        </div>`;

        strStatus2 = `
        <p>To play:</p>
        <div class="progress status--barra">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-label="Animated striped example" aria-valuenow="${((jogo.added_by_status.toplay)*100)/(jogo.added)}" aria-valuemin="0" aria-valuemax="${jogo.added}" style="width: ${(jogo.added_by_status.toplay*100)/(jogo.added)}%"></div>
        </div>
        <p>Dropped:</p>
        <div class="progress status--barra">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-label="Animated striped example" aria-valuenow="${((jogo.added_by_status.dropped)*100)/(jogo.added)}" aria-valuemin="0" aria-valuemax="${jogo.added}" style="width: ${(jogo.added_by_status.dropped*100)/(jogo.added)}%"></div>
        </div>
        <p>Playing:</p>
        <div class="progress status--barra">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-label="Animated striped example" aria-valuenow="${((jogo.added_by_status.playing)*100)/(jogo.added)}" aria-valuemin="0" aria-valuemax="${jogo.added}" style="width: ${(jogo.added_by_status.playing*100)/(jogo.added)}%"></div>
        </div>`;

        strUpdate = `<h3>Última atualização: ${jogo.updated}</h3>`;

        for (let i = 0; i < jogo.stores.length; i++) {
            strLojas += `<h5><i class="fa-solid fa-globe"></i>${jogo['stores'][i].store.name}</h5>`;
        }

        document.querySelector('title').innerHTML = strTitle;
        
        document.getElementById('bannerImagem').innerHTML = strImagem;
        document.getElementById('bannerTitulo').innerHTML = strTitulo;
        document.getElementById('bannerPlataformas').innerHTML = strPlataformas;
        document.getElementById('bannerLancamento').innerHTML = strLancamento;
        document.getElementById('bannerAvaliacao').innerHTML = strAvaliacao;
        document.getElementById('bannerGeneros').innerHTML = strGeneros;
        
        document.getElementById('infoStatus1').innerHTML = strStatus1;
        document.getElementById('infoStatus2').innerHTML = strStatus2;
        
        document.getElementById('infoUpdate').innerHTML = strUpdate;
        
        document.getElementById('infoLojas').innerHTML = strLojas;
    })
}

function exibePaginaDestaque(it) {
    fetch ('https://api.rawg.io/api/games?key=199fdfc3bbfd46088f3911c6c58ba89e&metacritic=80,100')
    .then(resposta => resposta.json ())
    .then(dados => {
        let jogo = dados.results[it];

        let strTitle = '';
        
        let strImagem = '';
        let strTitulo = '';
        let strPlataformas = '';
        let strLancamento = '';
        let strAvaliacao = '';
        let strGeneros = '';
        
        let strStatus1 = '';
        let strStatus2 = '';
        
        let strUpdate = '';
        
        let strLojas = '';

        strTitle = `Página do Game - ${jogo.name}`;

        strImagem = `<img src="${jogo.background_image}" alt="Imagem do jogo">`;

        strTitulo = `<h1>${jogo.name}</h1>`;

        for (let i = 0; i < jogo.platforms.length; i++) {
            strPlataformas += `<p>${jogo['platforms'][i].platform.name}</p>`;
        }

        strLancamento = `<p>Lançamento: ${jogo.released}</p>`;

        strAvaliacao = `<p>${jogo.rating}</p>`;

        for (let i = 0; i < jogo.genres.length; i++) {
            strGeneros += `<h4><i class="fa-solid fa-hashtag fa-sm"></i>${jogo['genres'][i].name}</h4>`;
        }

        strStatus1 = `
        <p>Yet:</p>
        <div class="progress status--barra">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-label="Animated striped example" aria-valuenow="${((jogo.added_by_status.yet)*100)/(jogo.added)}" aria-valuemin="0" aria-valuemax="${jogo.added}" style="width: ${(jogo.added_by_status.yet*100)/(jogo.added)}%"></div>
        </div>
        <p>Owned:</p>
        <div class="progress status--barra">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-label="Animated striped example" aria-valuenow="${((jogo.added_by_status.owned)*100)/(jogo.added)}" aria-valuemin="0" aria-valuemax="${jogo.added}" style="width: ${(jogo.added_by_status.owned*100)/(jogo.added)}%"></div>
        </div>
        <p>Beaten:</p>
        <div class="progress status--barra">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-label="Animated striped example" aria-valuenow="${((jogo.added_by_status.beaten)*100)/(jogo.added)}" aria-valuemin="0" aria-valuemax="${jogo.added}" style="width: ${(jogo.added_by_status.beaten*100)/(jogo.added)}%"></div>
        </div>`;

        strStatus2 = `
        <p>To play:</p>
        <div class="progress status--barra">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-label="Animated striped example" aria-valuenow="${((jogo.added_by_status.toplay)*100)/(jogo.added)}" aria-valuemin="0" aria-valuemax="${jogo.added}" style="width: ${(jogo.added_by_status.toplay*100)/(jogo.added)}%"></div>
        </div>
        <p>Dropped:</p>
        <div class="progress status--barra">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-label="Animated striped example" aria-valuenow="${((jogo.added_by_status.dropped)*100)/(jogo.added)}" aria-valuemin="0" aria-valuemax="${jogo.added}" style="width: ${(jogo.added_by_status.dropped*100)/(jogo.added)}%"></div>
        </div>
        <p>Playing:</p>
        <div class="progress status--barra">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-label="Animated striped example" aria-valuenow="${((jogo.added_by_status.playing)*100)/(jogo.added)}" aria-valuemin="0" aria-valuemax="${jogo.added}" style="width: ${(jogo.added_by_status.playing*100)/(jogo.added)}%"></div>
        </div>`;

        strUpdate = `<h3>Última atualização: ${jogo.updated}</h3>`;

        for (let i = 0; i < jogo.stores.length; i++) {
            strLojas += `<h5><i class="fa-solid fa-globe"></i>${jogo['stores'][i].store.name}</h5>`;
        }

        document.querySelector('title').innerHTML = strTitle;

        document.getElementById('bannerImagem').innerHTML = strImagem;
        document.getElementById('bannerTitulo').innerHTML = strTitulo;
        document.getElementById('bannerPlataformas').innerHTML = strPlataformas;
        document.getElementById('bannerLancamento').innerHTML = strLancamento;
        document.getElementById('bannerAvaliacao').innerHTML = strAvaliacao;
        document.getElementById('bannerGeneros').innerHTML = strGeneros;
        
        document.getElementById('infoStatus1').innerHTML = strStatus1;
        document.getElementById('infoStatus2').innerHTML = strStatus2;
        
        document.getElementById('infoUpdate').innerHTML = strUpdate;
        
        document.getElementById('infoLojas').innerHTML = strLojas;
    })
}

function exibePaginaGeral(linha, coluna) {
    Promise.all([
    fetch ('https://api.rawg.io/api/games?key=199fdfc3bbfd46088f3911c6c58ba89e&page=1&page_size=100').then(resposta => resposta.json ()),
    fetch ('https://api.rawg.io/api/games?key=199fdfc3bbfd46088f3911c6c58ba89e&page=2&page_size=100').then(resposta => resposta.json ()),
    fetch ('https://api.rawg.io/api/games?key=199fdfc3bbfd46088f3911c6c58ba89e&page=3&page_size=100').then(resposta => resposta.json ()),
    ])
        .then(dados => {
            let jogo = dados[linha].results[coluna];

            let strTitle = '';
            
            let strImagem = '';
            let strTitulo = '';
            let strPlataformas = '';
            let strLancamento = '';
            let strAvaliacao = '';
            let strGeneros = '';
            
            let strStatus1 = '';
            let strStatus2 = '';
            
            let strUpdate = '';
            
            let strLojas = '';

            strTitle = `Página do Game - ${jogo.name}`;

            strImagem = `<img src="${jogo.background_image}" alt="Imagem do jogo">`;

            strTitulo = `<h1>${jogo.name}</h1>`;

            for (let i = 0; i < jogo.platforms.length; i++) {
                strPlataformas += `<p>${jogo['platforms'][i].platform.name}</p>`;
            }

            strLancamento = `<p>Lançamento: ${jogo.released}</p>`;

            strAvaliacao = `<p>${jogo.rating}</p>`;

            for (let i = 0; i < jogo.genres.length; i++) {
                strGeneros += `<h4><i class="fa-solid fa-hashtag fa-sm"></i>${jogo['genres'][i].name}</h4>`;
            }

            strStatus1 = `
            <p>Yet:</p>
            <div class="progress status--barra">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-label="Animated striped example" aria-valuenow="${((jogo.added_by_status.yet)*100)/(jogo.added)}" aria-valuemin="0" aria-valuemax="${jogo.added}" style="width: ${(jogo.added_by_status.yet*100)/(jogo.added)}%"></div>
            </div>
            <p>Owned:</p>
            <div class="progress status--barra">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-label="Animated striped example" aria-valuenow="${((jogo.added_by_status.owned)*100)/(jogo.added)}" aria-valuemin="0" aria-valuemax="${jogo.added}" style="width: ${(jogo.added_by_status.owned*100)/(jogo.added)}%"></div>
            </div>
            <p>Beaten:</p>
            <div class="progress status--barra">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-label="Animated striped example" aria-valuenow="${((jogo.added_by_status.beaten)*100)/(jogo.added)}" aria-valuemin="0" aria-valuemax="${jogo.added}" style="width: ${(jogo.added_by_status.beaten*100)/(jogo.added)}%"></div>
            </div>`;

            strStatus2 = `
            <p>To play:</p>
            <div class="progress status--barra">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-label="Animated striped example" aria-valuenow="${((jogo.added_by_status.toplay)*100)/(jogo.added)}" aria-valuemin="0" aria-valuemax="${jogo.added}" style="width: ${(jogo.added_by_status.toplay*100)/(jogo.added)}%"></div>
            </div>
            <p>Dropped:</p>
            <div class="progress status--barra">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-label="Animated striped example" aria-valuenow="${((jogo.added_by_status.dropped)*100)/(jogo.added)}" aria-valuemin="0" aria-valuemax="${jogo.added}" style="width: ${(jogo.added_by_status.dropped*100)/(jogo.added)}%"></div>
            </div>
            <p>Playing:</p>
            <div class="progress status--barra">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-label="Animated striped example" aria-valuenow="${((jogo.added_by_status.playing)*100)/(jogo.added)}" aria-valuemin="0" aria-valuemax="${jogo.added}" style="width: ${(jogo.added_by_status.playing*100)/(jogo.added)}%"></div>
            </div>`;

            strUpdate = `<h3>Última atualização: ${jogo.updated}</h3>`;

            for (let i = 0; i < jogo.stores.length; i++) {
                strLojas += `<h5><i class="fa-solid fa-globe"></i>${jogo['stores'][i].store.name}</h5>`;
            }

            document.querySelector('title').innerHTML = strTitle;

            document.getElementById('bannerImagem').innerHTML = strImagem;
            document.getElementById('bannerTitulo').innerHTML = strTitulo;
            document.getElementById('bannerPlataformas').innerHTML = strPlataformas;
            document.getElementById('bannerLancamento').innerHTML = strLancamento;
            document.getElementById('bannerAvaliacao').innerHTML = strAvaliacao;
            document.getElementById('bannerGeneros').innerHTML = strGeneros;
            
            document.getElementById('infoStatus1').innerHTML = strStatus1;
            document.getElementById('infoStatus2').innerHTML = strStatus2;
            
            document.getElementById('infoUpdate').innerHTML = strUpdate;
            
            document.getElementById('infoLojas').innerHTML = strLojas;
        })
}

//////

function exibePesquisaGames(nomeGame) {

    let loader = `<div class="d-flex justify-content-center loader--pesquisa">
                        <div class="spinner-border text-danger" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>`;

    document.getElementById('resultadoPesquisa').innerHTML = loader;

    Promise.all([
    fetch ('https://api.rawg.io/api/games?key=199fdfc3bbfd46088f3911c6c58ba89e&page=1&page_size=100').then(resposta => resposta.json ()),
    fetch ('https://api.rawg.io/api/games?key=199fdfc3bbfd46088f3911c6c58ba89e&page=2&page_size=100').then(resposta => resposta.json ()),
    fetch ('https://api.rawg.io/api/games?key=199fdfc3bbfd46088f3911c6c58ba89e&page=3&page_size=100').then(resposta => resposta.json ()),
    ])
        .then(dados => {
            let str = '';
            let strCabecalho = '';
            let filter = nomeGame.toUpperCase();

            let cont = 0;

            strCabecalho = `<h4>${cont} resultado(s) encontrado(s) para: <span style="color: var(--vermelho-marca)">"${nomeGame}"</span></h4>`;

            for (let j=0; j < dados.length; j++) {
                for (let i = 0; i < dados[j].results.length; i++) {
                    let game = dados[j].results[i];
                    txtValue = game.name;

                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        cont++;

                        strCabecalho = `<h4>${cont} resultado(s) encontrado(s) para: <span style="color: var(--vermelho-marca)">"${nomeGame}"</span></h4>`;
                        
                        str += `<div class="col-12 col-md-6 col-xl-4 resultado--pesquisa--card">
                                    <div class="resultado--pesquisa--item">
                                        <div class="resultado--pesquisa--item--imagem">
                                            <img src="${game.background_image}" alt="Imagem do jogo">
                                        </div>

                                        <div class="resultado--pesquisa--item--descricao">
                                            <h5>${game.name}</h5>
                                            <div class="resultado--pesquisa--item--descricao--infos">
                                                <div class="resultado--pesquisa--item--descricao--infos--titulos">
                                                    <p>Lançamento:</p>
                                                    <p>Gênero:</p>
                                                </div>

                                                <div class="resultado--pesquisa--item--descricao--infos--dados">
                                                    <p>${game.released}</p>
                                                    <p>${game['genres'][0].name}</p>
                                                </div>
                                            </div>

                                            <div class="resultado--pesquisa--item--descricao--estatisticas">
                                                <div class="resultado--pesquisa--item--descricao--estatisticas--avaliacao">
                                                    <p><i class="fa-solid fa-star"></i>${game.rating}</p>
                                                </div>

                                                <div class="resultado--pesquisa--item--descricao--estatisticas--link">
                                                    <a href="detalhes.html?rd=${[j]}&cd=${[i]}" target="_blank"><button><p>Ver jogo</p></button></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                    }
                }
            }

            document.getElementById('resultadoPesquisa').innerHTML = str;
            document.getElementById('cabecalhoPesquisa').innerHTML = strCabecalho;
        })  
}