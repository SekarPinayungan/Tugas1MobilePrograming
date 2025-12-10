// 1. Buatlah Pola Segitiga dari NIM, 
// Ambil digit terakhir NIM Anda sebagai tinggi segitiga
var nim = "049868957";
var tinggi = parseInt(nim[nim.length - 1]);
console.log("1. Pola segitiga dari nim ".concat(nim));
console.log("Tinggi segitiga = ".concat(tinggi, "\n"));
for (var i = 1; i <= tinggi; i++) {
    var baris = "";
    for (var s = tinggi - i; s > 0; s--) {
        baris += " ";
    }
    for (var j = i; j >= 1; j--) {
        baris += j;
    }
    for (var j = 2; j <= i; j++) {
        baris += j;
    }
    console.log(baris);
}
// 2. Buatlah Deret Aritmatika dengan NIM. Ambil 2 digit terakhir NIM, jadikan angka awal deret. 
// Ambil digit ke-3 dari belakang, jadikan beda (step). 
// Buat program TypeScript untuk mencetak 10 angka pertama dari deret aritmatika tersebut.
var angkaAwal = parseInt(nim.slice(-2));
var beda = parseInt(nim[nim.length - 3]);
var jumlahDeret = 10;
console.log("\n2. Deret Aritmatika");
var deret = [];
for (var i = 0; i < jumlahDeret; i++) {
    deret.push(angkaAwal + i * beda);
}
console.log(deret.join(", "));
// 3. Buatlah Bilangan Prima dari NIM. 
// Ambil 2 digit terakhir NIM dan tambahkan 10, jadikan batas akhir pencarian bilangan prima. 
// Buat program TypeScript untuk menampilkan semua bilangan prima dari 1 sampai batas tersebut.
var batas = parseInt(nim.slice(-2)) + 10;
console.log("\n3. Bilangan Prima:");
var prima = [];
function isPrima(angka) {
    if (angka < 2)
        return false;
    for (var i = 2; i <= Math.sqrt(angka); i++) {
        if (angka % i === 0)
            return false;
    }
    return true;
}
for (var i = 1; i <= batas; i++) {
    if (isPrima(i))
        prima.push(i);
}
console.log(prima.join(", "));
