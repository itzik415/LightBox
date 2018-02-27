
var imageIndex;
let main = document.getElementById('hide');
let main_img = document.createElement("img");
main.appendChild(main_img)
for(var i=0; i < 12; i++){    
    let src = document.getElementById("photos");
    let img = document.createElement("img");
    img.src = "images/photo" + i + ".jpg";
    img.setAttribute('image', "photo"+i);
    src.appendChild(img);
    img.classList.add('images');
    img.addEventListener('click',(event)=>{
        var photo = event.target.attributes.image.value
        imageIndex = photo.charAt(5);
        main_img.setAttribute('src', `images/${photo}.jpg`)
        main_img.setAttribute('id','main_image')
        if(document.querySelector('#hide').style.display  === 'none' || document.querySelector('#hide').style.display  === '' ){
            document.querySelector('#hide').style.display = 'block';
        }
        else if(document.querySelector('#hide').addEventListener('click', function(){
            if(document.querySelector('#hide').style.display  === 'block'){
                document.querySelector('#hide').style.display = 'none';
            }
        }));
    })
    
}
document.querySelector('.ion-close-round').addEventListener('click', function(){
    if(document.querySelector('#hide').style.display  === 'block'){
        document.querySelector('#hide').style.display = 'none';
    }else{
        document.querySelector('#hide').style.display = "none";
    }
});
        
document.querySelector('.ion-ios-arrow-back').addEventListener('click', function(){
    var image = document.querySelector('#main_image');
    var imgsrc = image.getAttribute('src');
    if (imageIndex == 0){
        imageIndex = 11
    }else{
        imageIndex -=1;
    }
    image.setAttribute('src', `images/photo${imageIndex}.jpg`)
    
});

document.querySelector('.ion-ios-arrow-forward').addEventListener('click', function(){
    var image = document.querySelector('#main_image');
    var imgsrc = image.getAttribute('src');
    if(imageIndex == 11){
        imageIndex = 0;
    }else{
        imageIndex = Number(imageIndex);
        imageIndex +=1;
    }
    image.setAttribute('src', `images/photo${imageIndex}.jpg`);
    
});
