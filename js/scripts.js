var btnNewPost = document.getElementById("CriarPost");
var btnViewPost = document.getElementById("view");
var btnEditPost = document.getElementById("edit");
var btnDeletePost = document.getElementById("delete");

var modalDelete = document.getElementById("modalDelete");
var modalNewPost = document.getElementById("modalNewPost");
var newPostBox = document.getElementById("newPostBox");
var modalEditPost = document.getElementById("modalEditPost");
var modalViewPost = document.getElementById("modalViewPost");


var closeDelete = document.getElementById("closeDelete")[0];
var closeNewPost = document.getElementById("closeNewPost")[0];

btnViewPost.onclick=function(){
    modalViewPost.style.display = "block";
    newPostBox.style.display = "none";
}

btnEditPost.onclick=function(){
    modalEditPost.style.display = "block";
    newPostBox.style.display = "none";
}

btnNewPost.onclick =function(){
    modalNewPost.style.display = "block";
    newPostBox.style.display = "none";

}


btnDeletePost.onclick = function(){
    modalDelete.style.display = "block";
    newPostBox.style.display = "none";
}

closeDelete.onclick = function(){
    modalDelete.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modalDelete){
        modalDelete.style.display = "none";
    }
}