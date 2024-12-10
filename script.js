// script.js

// Gestion des formulaires de connexion et d'inscription
function showLogin() {
    document.getElementById('login-container').classList.add('active');
    document.getElementById('signup-container').classList.remove('active');
    document.querySelector('.overlay').classList.add('active');
}

function showSignup() {
    document.getElementById('signup-container').classList.add('active');
    document.getElementById('login-container').classList.remove('active');
    document.querySelector('.overlay').classList.add('active');
}

function hideForms() {
    document.getElementById('login-container').classList.remove('active');
    document.getElementById('signup-container').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
}

// Fonction de connexion
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email && password) {
        alert(`Bienvenue, ${email}! Connexion réussie.`);
        hideForms();
    } else {
        alert('Veuillez remplir tous les champs de connexion.');
    }
}

// Fonction d'inscription
function signup() {
    const firstname = document.getElementById('signup-firstname').value;
    const lastname = document.getElementById('signup-lastname').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (firstname && lastname && email && password) {
        alert(`Merci pour votre inscription, ${firstname} ${lastname}!`);
        hideForms();
    } else {
        alert('Veuillez remplir tous les champs d\'inscription.');
    }
}

// Gestion du formulaire de contact
document.querySelector('.submit-button').addEventListener('click', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page
    alert('Merci pour votre message! Nous vous répondrons bientôt.');
});

// Gestion de la fermeture des formulaires via l'overlay
document.querySelector('.overlay').addEventListener('click', hideForms);
