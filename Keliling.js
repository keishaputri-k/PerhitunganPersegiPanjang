function hitungKel(){
    Panjang = document.getElementById("txtPanjang").value;
    Lebar = document.getElementById("txtLebar").value;
    Keliling = (Panjang * 2) + (Lebar * 2);
    document.getElementById("txtKeliling").value = Keliling;
 }