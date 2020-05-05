var index = 1; 
show_slides(index);

function next(){
    show_slides(++index);
}

function prev() {
	show_slides(--index);
}

function show_slides(n){

   console.log({n});

   let images  = document.querySelectorAll(".item");

   if(n > images.length){
     index = 1;
   }

   if(n < 1){
      index = images.length;
   }

   console.log({index});
    
   for(let i = 0; i < images.length; i++){
     images[i].style.display = "none";
   }

   images[index - 1].style.display = "block";
} 