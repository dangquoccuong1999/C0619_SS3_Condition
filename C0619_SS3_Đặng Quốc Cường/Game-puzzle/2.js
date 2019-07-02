function chuyen_anh(id_anh) {
    let name = document.getElementById(id_anh).alt;

    if (name === "anh1") {
        name = "anh2";
    } else if (name === "anh2") {
        name = "anh3";
    } else if (name === "anh3") {
        name = "anh1";
    }

    document.getElementById(id_anh).alt = name;
    document.getElementById(id_anh).src = name +".jpg";
}