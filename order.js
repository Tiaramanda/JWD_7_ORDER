let itemOrder = [
    {
        dipesan : false,
        harga : 20000,
        nama : 'Roti Bakar',
    },
    {
        dipesan : false,
        harga : 30000,
        nama : 'Martabak',
    },
    {
        dipesan : false,
        harga : 15000,
        nama : 'Ayam Geprek',
    },
    {
        dipesan : false,
        harga : 15000,
        nama : 'Ayam Penyet',
    },
    {
        dipesan : false,
        harga : 12000,
        nama : 'Jus Alpukat',
    },
    {
        dipesan : false,
        harga : 12000,
        nama : 'Jus Mangga',
    },
    {
        dipesan : false,
        harga : 8000,
        nama : 'Lemon Tea',
    },
    {
        dipesan : false,
        harga : 15000,
        nama : 'Thai Tea',
    }
]

let totalOrder = 0;

const itemTerpilih = document.getElementsByClassName('item');

const textTotal = document.getElementById('last-item');

for(let i = 0; i < itemTerpilih.length; i++){
    itemTerpilih[i].addEventListener('click', function () {
      setItemPemesanan(i, itemTerpilih[i]);
    });
}

function setItemPemesanan(index, elemen){
    if (itemOrder [index].dipesan == false){
        itemOrder[index].dipesan = true;
        elemen.style.backgroundColor = "brown";
        elemen.style.color ="white";
        totalOrder = totalOrder + itemOrder[index].harga;
    }
    else{
        itemOrder[index].dipesan = false;
        elemen.style.backgroundColor = "lightsalmon";
        elemen.style.color ="black";
        totalOrder = totalOrder - itemOrder[index].harga;
    }
    textTotal.innerHTML = 'Total <span> Rp ' + totalOrder + '</span>';
}