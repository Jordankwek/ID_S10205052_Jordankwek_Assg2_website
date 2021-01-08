function Data(name, category, price) {
    this.dname = name;
    this.dcategory = category;
    this.dprice = price;
}

let itemArray = [];
let storedArray = [];

document.addEventListener('submit', function (event) {


    event.preventDefault();

    let dname = document.getElementById('item-name').value;
    let dcategory = document.getElementById('category').value;
    let dprice = document.getElementById('price').value;

    let data = new Data(dname, dcategory, dprice);

    itemArray.push(data);

    localStorage.setItem("data", JSON.stringify(itemArray));

    var returnData = JSON.parse(localStorage.getItem("data"))

    document.getElementById('history-form').reset();

    let row = ``;
    row += `
    <tr> 
        <td class="name">${dname}</td>
        <td class="category">${dcategory}</td>
        <td class="price">${dprice}</td>
    </tr>    
`;

document.getElementById('record-body').insertAdjacentHTML('afterbegin',row);
})

