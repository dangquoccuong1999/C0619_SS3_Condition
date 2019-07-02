function thongbao() {
    alert('Tôi Cũng Thích Bạn <3 !');
}

function leap() {
    let width = Math.random() * window.innerWidth;
    let height = Math.random() * window.innerHeight;
    console.log(width);
    document.getElementById("no").style.left = width + 'px';
    document.getElementById("no").style.top = height + "px";

}