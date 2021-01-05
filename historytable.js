function Data(name,category,price){
    this.dname = name;
    this.dcategory = category;
    this.dprice = price;
}

let itemArray = [];

document.addEventListener('submit', function(event){
    event.preventDefault();

    let dname = document.getElementById('item-name').value;
    let dcategory = document.getElementById('category').value;
    let dprice = document.getElementById('price').value;

    let data = new Data(dname,dcategory,dprice);

    itemArray.push(data);

    localStorage.setItem("data", JSON.stringify(itemArray));

    var returnData = JSON.parse(localStorage.getItem("data"))

    document.getElementById('history-form').reset();

    for (var i=0; i<returnData.Length; i++){
        var table = document.getElementById("record-table");
        var row = table.insertRow(0);
        var indexcell = row.insertCell(0);
        var namecell = row.insertCell(1);
        var catcell = row.insertCell(2);
        var pricecell = row.insertCell(3);
        indexcell.innerHTML = i+1;
        namecell.innerHTML = returnData[i].dname;
        catcell.innerHTML = returnData[i].dcategory;
        pricecell.innerHTML = returnData[i].dprice;

    }
})

