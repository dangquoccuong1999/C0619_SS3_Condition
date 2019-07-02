function input(value) {
    let gia_tri= Number(document.getElementById('input').value+=value);
}
function tinh() {
    let kq= eval(document.getElementById('input').value);
    document.getElementById('input').value=kq;
}
function ac() {
    document.getElementById("input").value= "";
}