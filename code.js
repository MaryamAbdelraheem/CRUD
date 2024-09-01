//اول حاجة نادي على العناصر الي هتشتغل عليها
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
//test
//console.log(title,price,taxes,ads,discount,total,count,category,submit);

//اول حاجة هتقابلنا الحساب
//get total
function getTotal(){
    
    //check on the price اهم حاجة
    if(price.value != ''){
        let sum = (+price.value +
                    +taxes.value + 
                    +ads.value) 
        let result = sum - ((sum * +discount.value)/100);
        total.innerHTML = result ;
        total.style.background = "#3a8178"
    }
    else{
        total.innerHTML = '' ;
        total.style.background = "#10006d"
    }
    //test
    //console.log('done')
}
//create product
//عقل الموقع
let dataPro;
    if(localStorage.product != null){
        //json.parse عشان ترجع لاصلها
        let dataPro = JSON.parse(localStorage.getItem('product'));
        submit.onclick = function(){
            let newPro = {
                title: title.value,
                price: price.value,
                taxes: taxes.value,
                ads: ads.value,
                discount: discount.value,
                total: total.innerHTML,
                count:count.value,
                category: category.value
            };
            //console.log(newPro);
            dataPro.push(newPro);
            //save in local storage
            localStorage.setItem('product', JSON.stringify(dataPro));
            //test
            console.log(dataPro);
            clearData();
            showData();
        }
        
    }
    else{
        dataPro = [];
    }
    

//save in local storage

//clear inputs after save
function clearData(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}

//-----------------------------

//read product
function showData(){
    table.innerHTML = ``;
    dataPro.foreach((product,index)=>
        table.innerHTML +=`
            <tr>
            <td>${index}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.taxes}</td>
            <td>${product.ads}</td>
            <td>${product.discount}</td>
            <td>${product.total}</td>
            <td>${product.category}</td>
            <td><button id="update">update</button></td>
            <td><button id="delete">delete</button></td>
        </tr>
        `
    )}
    showData();

    //let table = document.querySelector('tbody');
    //loop on the array
    //d.foreach((element,index) =>{
    //    table.innerHTML +=`
    //        <tr>
    /*        <td>${i}</td>
            <td>${dataPro[i].title}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].taxes}</td>
            <td>${dataPro[i].ads}</td>
            <td>${dataPro[i].discount}</td>
            <td>${dataPro[i].total}</td>
            <td>${dataPro[i].category}</td>
            <td><button id="update">update</button></td>
            <td><button id="delete">delete</button></td>
        </tr>
        `
        
    });*/

//count

//delete
//-----------------------------
//update

//search

//validate (clean data)