let bilangan1 = 0;
let bilangan2 = 0;
var a;

const setBil1 = function(bil1)
{
    bilangan1 = parseInt(bil1);
}

const setBil2 = function(bil2)
{
    bilangan2 = parseInt(bil2);
}

const hitungTambah = function(a,b)
{
    return a + b;
}

const tambah = function()
{
    const hasil = hitungTambah(bilangan1, bilangan2);
    document.getElementById("hasil").value = hasil;
}

function show_hide()
{
    if(a==1)
    {
        document.getElementById("cal").style.display="block";
        return a=0;
    }
    else
    {
        document.getElementById("cal").style.display="none";
        return a=1;
    }
}

function tampilkan()
{
    if(a==1)
    {
        document.getElementById("riw").style.display="block";
        return a=0;
    }
    else
    {
        document.getElementById("riw").style.display="none";
        return a=1;
    }
}