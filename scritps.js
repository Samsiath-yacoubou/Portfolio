document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let nom = document.getElementById("nom").value.trim();
    let prenom = document.getElementById("prenom").value.trim();
    let message = document.getElementById("message").value.trim();

    let nomError = document.getElementById("nomError");
    let prenomError = document.getElementById("prenomError");
    let messageError = document.getElementById("messageError");

    
    nomError.textContent = "";
    prenomError.textContent = "";
    messageError.textContent = "";

    let valid = true;

    if (nom === "") {
        nomError.textContent = "Le nom est obligatoire.";
        valid = false;
    }

    if (prenom === "") {
        prenomError.textContent = "Le prénom est obligatoire.";
        valid = false;
    }

    if (message.length < 10) {
        messageError.textContent = "Le message doit contenir au moins 10 caractères.";
        valid = false;
    }

    if (valid) {
        alert("Message envoyé avec succès !");
        this.submit(); 
    }
});
