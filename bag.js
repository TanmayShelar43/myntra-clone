let bagElement=document.querySelector('.bag-items-container');
let display=[];

pushIntodisplay();
function pushIntodisplay(){
  bagItems.forEach(itemID => {
    for(let i=0;i<items.length;i++)
    {
    if(itemID==items[i].id)
    {
     display.push(items[i]);
    }
  }
  });}
  function displayBagItems()
  {
    
    let innerHtml=``;
  for(let i=0;i<display.length;i++)
  {
     innerHtml+=displayHtml(display[i]);
  }
  bagElement.innerHTML=innerHtml;
  
}
function displayHtml(item)
{
  return `<div class="bag-item-container">
  <div class="item-left-part">
    <img class="bag-item-img" src="${item.image}">
  </div>
  <div class="item-right-part">
    <div class="company">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price-container">
      <span class="current-price">Rs ${item.current_price}</span>
      <span class="original-price">Rs ${item.original_price}</span>
      <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
    </div>
    <div class="return-period">
      <span class="return-period-days">${item.return_period} days</span> return available
    </div>
    <div class="delivery-details">
      Delivery by
      <span class="delivery-details-days">${item.delivery_date}</span>
    </div>
  </div>
  <div class="remove-from-cart" onclick="removeBagItem(${item.id});">X</div>
</div>`;
}
function removeBagItem(itemId)
{
  
  for(let i=0;i<display.length;i++)
  {
    if(display[i].id==itemId)
    {
      display.splice(i,1);
      console.log(display);
    }
  }
  for(let i=0;i<bagItems.length;i++)
  {
    if(bagItems[i]==itemId)
    {
      bagItems.splice(i,1);
      console.log(bagItems);
    }
  }
  displayBagItems();
  console.log(display[0]);
  if(display[0]==undefined)
    bagSummary.innerHTML=``;
  else
  displayBill();
  localStorage.setItem('BagItems',JSON.stringify(bagItems));
  countNO=bagItems.length;
  if(countNO>0)
  document.querySelector('.bag-item-count').innerHTML=countNO;
else
document.querySelector('.bag-item-count').innerHTML='';
}
displayBagItems();
let bagSummary=document.querySelector('.bag-summary');
function displayBill()
{
  let totalPrice=0;
  let discountPrice=0;
  let difference=0;
  for(let i=0;i<display.length;i++)
  {
  totalPrice+=display[i].original_price;
  discountPrice+=display[i].current_price;
  }
  difference=totalPrice-discountPrice;
  console.log(totalPrice);
  console.log(difference);
  let innerHTML=``;
innerHTML+=`<div class="bag-details-container">
<div class="price-header">PRICE DETAILS (Price DETAILS (${display.length} Items) </div>
<div class="price-item">
  <span class="price-item-tag">Total MRP</span>
  <span class="price-item-value">${totalPrice}</span>
</div>
<div class="price-item">
  <span class="price-item-tag">Discount on MRP</span>
  <span class="price-item-value priceDetail-base-discount">-${difference}</span>
</div>
<div class="price-item">
  <span class="price-item-tag">Convenience Fee</span>
  <span class="price-item-value">99</span>
</div>
<hr>
<div class="price-footer">
  <span class="price-item-tag">Total Amount</span>
  <span class="price-item-value">${totalPrice-difference+99}</span>
</div>
</div>
<button class="btn-place-order">
<div class="css-xjhrni" onclick="orderPlaced();">PLACE ORDER</div>
</button>
`;
bagSummary.innerHTML=innerHTML;
}
function orderPlaced()
{
  alert('Order placed Successfully');
  display=[];
  bagItems=[];
  let countNO=bagItems.length;
  console.log(countNO);
  localStorage.setItem('BagItems',JSON.stringify(bagItems));
  if(countNO>0)
  document.querySelector('.bag-item-count').innerHTML=countNO;
  else
  document.querySelector('.bag-item-count').innerHTML='';
  bagSummary.innerHTML=``;
  displayBagItems();
}
if(display[0]==undefined)
    bagSummary.innerHTML=``;
  else
  displayBill();
