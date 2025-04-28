const menubtn = document.querySelector('.menu-btn');
const Grupomenu = document.querySelector('.Grupo-menu');
const Janelas = document.querySelector('.Janelas');
const menuopcao = document.querySelector('.menu-opcao');
const fecharmenu = document.querySelector('.fechar-menu');

menubtn.addEventListener('click', () => {
    Grupomenu.classList.add("active");
    setTimeout(() => {
        Janelas.classList.add("active");
    }, 1);
    setTimeout(() => {
        menuopcao.classList.add("active");
    }, 1000);
});

fecharmenu.addEventListener('click', () => {
    menuopcao.classList.remove("active");
    Janelas.classList.remove("active");
    setTimeout(() => {
        Grupomenu.classList.remove("active");
    }, 500);
});


const modal = document.querySelector("#jobModal");

function openModal(jobTitle, jobCompany, jobCity, jobDescription) {
    modal.querySelector("#jobTitle").textContent = jobTitle;  
    modal.querySelector("#jobCompany").textContent = jobCompany; 
    modal.querySelector("#jobCity").textContent = jobCity;  l
    modal.querySelector("#jobDescription").textContent = jobDescription;  
    modal.style.display = "flex"; 
}


function closeModal() {
    modal.style.display = "none"; 
}


window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

