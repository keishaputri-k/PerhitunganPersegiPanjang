function hitungLuas(){
    Panjang = document.getElementById("txtPanjang").value;
    Lebar = document.getElementById("txtLebar").value;
    Luas = Panjang * Lebar;
    document.getElementById("txtLuas").value = Luas;
 }