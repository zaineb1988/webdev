 let champ = document.getElementById('tache');
 let btnAjouter = document.getElementById('ajouter');
 let btnSupprimer = document.getElementById('supprimer');
 let liste = document.getElementById('liste');
 let message = document.getElementById('message');

function afficherMessage(texte, couleur) {
  message.textContent = texte;
  message.style.color = couleur;
}

function ajouterTache() {
  if (champ.value.trim() === '') {
    afficherMessage("Le champ ne doit pas être vide.", "red");
  } else {
     let li = document.createElement('li');
     let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

     let texteSpan = document.createElement('span');
    texteSpan.innerText =  champ.value.trim();

    li.appendChild(checkbox);
    li.appendChild(texteSpan);
    liste.appendChild(li);

    champ.value = '';
    afficherMessage("Tâche ajoutée !", "green");
    btnSupprimer.style.display = "inline-block";

    // Survol visuel <=> hover
    li.addEventListener('mousemove', () => {
      li.style.backgroundColor = "lightgreen";
    });
    li.addEventListener('mouseout', () => {
      li.style.backgroundColor = "";
    });

    // Clic sur toute la zone <li> coche la case
    li.addEventListener('click', function (event) {
      if (event.target !== 'input') {
        checkbox.checked = !checkbox.checked;
      }
    });
  }
}


function supprimerTaches() {
   let elements = liste.querySelectorAll('li');
  let supprimé = false;

  elements.forEach(el => {
     let cb = el.querySelector('input[type="checkbox"]');
    if (cb.checked) {

      el.remove();
    
      supprimé = true;
    }

   
  });

  if (supprimé) {
    afficherMessage("Tâche(s) supprimée(s) !", "orange");
  }

  if (liste.querySelectorAll('li').length === 0) {
  btnSupprimer.style.display = "none";
}
 
}

btnAjouter.addEventListener('click', function(){
    ajouterTache();
}
);

champ.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    ajouterTache();
  }
});

btnSupprimer.addEventListener('click', supprimerTaches);

document.addEventListener('keypress', (event) => {
  if (event.key === 'CapsLock') {
    supprimerTaches();
  }
});




