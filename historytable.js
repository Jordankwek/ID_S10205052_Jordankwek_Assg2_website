function Data(name, category, price) {
    this.dname = name;
    this.dcategory = category;
    this.dprice = price;
}


var returnData = JSON.parse(localStorage.getItem("data"));
var number = 1;

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

        document.getElementById('history-form').reset();

        let row = ``;
        row += `
        <tr> 
            <td class="name">${dname}</td>
            <td class="category">${dcategory}</td>
            <td class="price">${dprice}</td>
        </tr>    
        `;

        document.getElementById('record-body').insertAdjacentHTML('afterbegin', row);

        if ((number == 1) && (returnData.length != null)){
            for (let i = 0; i < returnData.length; i++) {
                dataname = returnData[i].dname;
                dataprice = returnData[i].dprice;
                datacat = returnData[i].dcategory;
                let row = ``;
                row += `
                <tr> 
                    <td class="name">${dataname}</td>
                    <td class="category">${datacat}</td>
                    <td class="price">${dataprice}</td>
                </tr>  
                `;
                document.getElementById('record-body').insertAdjacentHTML('afterbegin', row);
            };
            number += 1;
        }
    })



