var like = 3
var likeElement = document.querySelector('#like');

function add1() {
    like++;
    likeElement.innerText = like + " Like(s)";
}