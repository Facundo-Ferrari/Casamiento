const images=["Img/Hotel/hotel1.jpg","Img/Hotel/hotel2.jpg","Img/Hotel/hotel3.jpg","Img/Hotel/hotel4.jpg","Img/Hotel/hotel5.jpg","Img/Hotel/hotel6.jpg","Img/Hotel/hotel7.jpg"];let currentIndex=0;const imageContainer=document.querySelector(".image-container img"),prevButton=document.querySelector(".prev"),nextButton=document.querySelector(".next");function showImage(e){imageContainer.style.opacity=0,setTimeout(()=>{imageContainer.src=images[e],imageContainer.style.opacity=1,currentIndex=e},1e3)}imageContainer.style.transition="opacity 1s ease-in-out",prevButton.addEventListener("click",()=>{currentIndex=(currentIndex-1+images.length)%images.length,showImage(currentIndex)}),nextButton.addEventListener("click",()=>{currentIndex=(currentIndex+1)%images.length,showImage(currentIndex)}),showImage(currentIndex);