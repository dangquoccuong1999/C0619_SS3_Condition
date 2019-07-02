function chuyen_anh(id_anh) {
    let image = [
        "anh1.jpg",
        "anh2.jpg",
        "anh3.jpg",
    ];
    var i = Number(document.getElementById(id_anh).alt);

    if (i < image.length - 1) {
        i++;
    } else {
        i = 0;
    }
    document.getElementById(id_anh).alt = i;
    document.getElementById(id_anh).src = image[i];
    win();
}

function win() {
    let a = Number(document.getElementById("anh_1").alt);
    let b = Number(document.getElementById("anh_2").alt);
    let c = Number(document.getElementById("anh_3").alt);
    if (a == b && b == c) {
        alert('Bạn đã win');
        // document.getElementById('khung').style.backgroundColor = "red";
        $('#khung').css({"background-color":"red"});
    }
};
