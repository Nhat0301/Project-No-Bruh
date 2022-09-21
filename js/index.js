function ten() {
    var tennhap = document.getElementById("nameinput").value;

    if(tennhap==""){
        document.getElementById("vungchua").innerHTML = '<div class="alert alert-danger">Không được để rỗng</div>'
    } else {
        document.getElementById("vungchua").innerHTML = '<div class="alert alert-success">Yêu bạn '+ tennhap+' lắm á <3</div>';
    }
}