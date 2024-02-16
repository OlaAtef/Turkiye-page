let img = document.querySelector('.img');
function phones(phone){
    img.src = phone;
}

var lang = document.querySelector(".lang .language");

document.querySelector("#lang").onclick = () =>{
    lang.classList.toggle("active");
};

var imglinks = document.getElementsByClassName("img-links");
var textcontents = document.getElementsByClassName("text-contents");

function openimg( tabname ){

for(imglink of imglinks){
    imglink.classList.remove("active-img");
}

for(textcontent of textcontents){
    textcontent.classList.remove("active-text");
}  document.getElementById(tabname).classList.add("active-text");

}






