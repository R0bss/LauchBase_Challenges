const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

for (item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}




/*
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');

const cards = document.querySelectorAll('.card');


for(let card of cards){
    card.addEventListener("click", function(){
        const postId = card.getAttribute("id")
        //modalOverlay.classList.add('active')
        //modalOverlay.querySelector("iframe").src = `https://blog.rocketseat.com.br/${postId}`
        window.location.href = `courses/${postId}`
    })
}*/
/*
document.querySelector(".maximize-modal").addEventListener("click", function(){
 
    if(modal.className == "modal maximize" ){
        modal.classList.remove("maximize");
    }else{
        modal.classList.add("maximize");
    }
})

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src = ""
    modal.classList.remove("maximize");
})
*/
