const API_URL = "http://localhost:3000/filmes";

async function carregarDetalhes() {

    const params = new URLSearchParams(window.location.search);

    const id = params.get("id");

    if (!id) {

        document.getElementById("detalhes").innerHTML =
            "<h2>ID não informado.</h2>";

        return;
    }

    try {

        const response = await fetch(`${API_URL}/${id}`);

        if (!response.ok) {
            throw new Error("Curso não encontrado");
        }

        const curso = await response.json();

        document.getElementById("detalhes").innerHTML = `
            <img src="${curso.imagem}" width="400">

            <h1>${curso.nome}</h1>

            <p>
                <strong>Categoria:</strong>
                ${curso.categoria}
            </p>

            <p>
                <strong>Preço:</strong>
                R$ ${curso.preco}
            </p>

            <p>${curso.descricaoCompleta}</p>

            <h3>Tags</h3>

            <ul>
                ${curso.tags.map(tag => `<li>${tag}</li>`).join("")}
            </ul>

            <a href="index.html">Voltar</a>
        `;

    } catch (erro) {

        document.getElementById("detalhes").innerHTML =
            "<h2>Item não encontrado.</h2>";
    }
}

carregarDetalhes();