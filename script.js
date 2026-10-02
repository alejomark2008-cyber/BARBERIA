const menuBtn=document.getElementById("menuBtn"),sideMenu=document.getElementById("sideMenu"),closeBtn=document.getElementById("closeBtn"),overlay=document.getElementById("overlay");
function openMenu(){sideMenu.classList.add("open");overlay.classList.add("open");document.body.style.overflow="hidden"}
function closeMenu(){sideMenu.classList.remove("open");overlay.classList.remove("open");document.body.style.overflow=""}
menuBtn?.addEventListener("click",openMenu);closeBtn?.addEventListener("click",closeMenu);overlay?.addEventListener("click",closeMenu);
document.querySelectorAll(".side-menu a").forEach(a=>a.addEventListener("click",closeMenu));

const modal=document.getElementById("modal"),modalClose=document.getElementById("modalClose");
const modalAvatar=document.getElementById("modalAvatar"),modalName=document.getElementById("modalName"),modalRole=document.getElementById("modalRole"),modalRating=document.getElementById("modalRating"),modalReviews=document.getElementById("modalReviews"),modalBio=document.getElementById("modalBio"),modalBook=document.getElementById("modalBook");
document.querySelectorAll(".barber-card").forEach(card=>{
  card.addEventListener("click",()=>{
    modalAvatar.textContent=card.dataset.name.split(" ").map(x=>x[0]).join("").replace(".","");
    modalName.textContent=card.dataset.name;
    modalRole.textContent=card.dataset.role;
    modalRating.textContent=card.dataset.rating;
    modalReviews.textContent=card.dataset.reviews;
    modalBio.textContent=card.dataset.bio;
    modal.classList.add("open");
  });
});
document.querySelectorAll(".service-card").forEach(card=>{
  card.addEventListener("click",()=>{
    modalAvatar.textContent="✂";
    modalName.textContent=card.dataset.title;
    modalRole.textContent="SERVICIO";
    modalRating.textContent=card.dataset.price;
    modalReviews.textContent="";
    modalBio.textContent=card.dataset.desc;
    modal.classList.add("open");
  });
});
function closeModal(){modal.classList.remove("open")}
modalClose?.addEventListener("click",closeModal);
modal?.addEventListener("click",e=>{if(e.target===modal)closeModal()});
modalBook?.addEventListener("click",closeModal);
