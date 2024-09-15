
const shareSection = document.querySelector('.share-container');
const shareBtn = document.querySelector('.btn');
console.log(shareBtn);
console.log(shareBtn);

function showShareSection(){
    shareSection.classList.toggle('active');
}

shareBtn.addEventListener('click',showShareSection
)
