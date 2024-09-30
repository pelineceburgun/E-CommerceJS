const cartItems=[
    {name:"product 1",quantity:2,price:50},
    {name:"product 2",quantity:1,price:30},
    {name:"product 3",quantity:3,price:20}
];

function displayCart(){
    const table=document.querySelector(".cart");
    let total=0;
    
    cartItems.forEach(item=>{
        const row=document.createElement('tr');
        const nameCell=document.createElement('td');
        const quantityCell=document.createElement('tr');
        nameCell.textContent=item.quantity;
        row.appendChild(quantityCell);

        const priceCell=document.createElement('td');
        priceCell.textContent=item.price+'TL';
        row.appendChild(priceCell);

        const totalCell=document.createElement('td');
        const itemTotal=item.quantity*item.price;
        totalCell.textContent=itemTotal+'TL';
        row.appendChild(totalCell);

        total+=itemTotal;
        table.appendChild(row);
    });
    const totalRow=document.createElement('tr');
    totalRow.innerHTML = `<td colspan="3">Total Price</td><td>${total} TL</td>`;
    table.appendChild(totalRow);
}
function proceedToCheckout(){
    alert("you are redirected to payment");
}
window.onload=displayCart;
