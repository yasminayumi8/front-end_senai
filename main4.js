/// Elementos HTML
const $list = document.getElementById('list');
const $error = document.getElementById('error');
const $loading = document.getElementById('loading'); // Corrigido aqui (era "loanding")
const $toggleBtn = document.getElementById('toggle-theme');

const API = 'https://dummyjson.com/products'; // API pública de testes

// Função para mostrar/ocultar o spinner
function loading(show = true) {
    $loading.innerHTML = show
        ? `<div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Carregando...</span>
           </div>`
        : '';
}

// Função para exibir erro
function showError(msg) {
    $error.textContent = msg || '';
}

// Função para renderizar os cards de produtos
function renderPost(posts) {
    $list.innerHTML = posts.products.map(p => `
        <div class="card" style="width: 18rem;">
            <img src="${p.thumbnail}" class="card-img-top" alt="${p.title}">
            <div class="card-body">
                <h5 class="card-title">${p.title}</h5>
                <p class="card-text"><strong>Categoria:</strong> ${p.category}</p>
                <p class="card-text"><strong>Preço:</strong> $${p.price}</p>
                <p class="card-text"><strong>Avaliação:</strong> ${p.rating}</p>
                <p class="card-text"><strong>Estoque:</strong> ${p.stock}</p>
            </div>
        </div>
    `).join('');
}

// Função principal para buscar os produtos
async function getProducts() {
    showError('');
    loading(true); // Mostrar loading
    $list.innerHTML = ''; // Limpar lista

    const btn = document.getElementById('btn-load');
    if (btn) {
        btn.disabled = true;
        btn.textContent = 'Carregando...';
    }

    try {
        await delay(2000);
        const res = await fetch(API);
        if (!res.ok) {
            throw new Error(`Erro HTTP ${res.status}`);
        }
        const data = await res.json();
        renderPost(data);
    } catch (err) {
        showError(err.message ?? 'Falha ao buscar dados');
    } finally {
        loading(false); // Esconder loading
        if (btn) {
            btn.disabled = false;
            btn.textContent = 'Carregar (GET)';
        }
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



function toggleDarkMode() {
    document.body.classList.toggle('ux-dark-mode');

    // Alterna o ícone do botão
    const isDark = document.body.classList.contains('ux-dark-mode');
    $toggleBtn.textContent = isDark ? '☀️' : '🌙';
}

// Evento de clique para alternar tema
$toggleBtn.addEventListener('click', toggleDarkMode);
