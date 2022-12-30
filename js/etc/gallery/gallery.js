const gallery = document.querySelectorAll(".gallery .image");
const previewBox = document.querySelector(".preview-box");
const closeIcon = document.querySelector("#icon");

const perviewImg = previewBox.querySelector("img");


window.onload = ()=>{
    for(let i=0; i < gallery.length; i++){
        let newIndex = i;
        gallery[i].onclick = ()=>{
            let clickImgIndex = newIndex;
            function preview(){
                let selectedImgUrl = gallery[newIndex].querySelector("img").src;            
                perviewImg.src = selectedImgUrl;
            }
            
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex==0){
                prevBtn.style.display="none";
            }
            else if(newIndex >=gallery.length-1){
                nextBtn.style.display="none";
            }
            prevBtn.onclick = ()=>{
                newIndex--;
                if(newIndex==0){
                    prevBtn.style.display="none";
                    preview();
                }
                else{
                    preview();
                    nextBtn.style.display="block";

                }
            }
            nextBtn.onclick = ()=>{
                newIndex++;
                if(newIndex >= gallery.length-1){
                    nextBtn.style.display="none";
                    preview();
                }
                else{
                    preview();
                    prevBtn.style.display="block";
                }
            }

            preview();
            previewBox.classList.add("show");
            
            closeIcon.onclick = ()=>{
                newIndex = clickImgIndex;
                prevBtn.style.display="block";
                nextBtn.style.display="block";
                previewBox.classList.remove("show");
            }
        }
    }
}