   // const div = document.querySelector('body')
    // const sty = window.getComputedStyle(div);
    // // const bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    // console.log(sty.backgroundImage)
    // const image=sty.backgroundImage;
    // const url= image.slice(5,-2);
    // console.log(url);
    var arr=["/img/bg.png.jpg","/img/bg1.png.jpg","/img/bg2.png.jpg","/img/bg3.jpg"]
    var i=0;
    document.body.style.backgroundImage = `url(${arr[3]})`;
    function carousel(){
        document.body.style.backgroundImage = `url(${arr[i]})`;
        i++;
        if(i>=arr.length){
            i=0;
        }
    }
    setInterval("carousel()",3000);

    function getdata(){
        alert("Congratulation! You are now are our member 😍 !!")
    }



