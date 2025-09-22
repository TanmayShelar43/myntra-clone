function toggleMenu() {
  document.querySelector('.navbar').classList.toggle('active');
}
let itemsContainerElement=document.querySelector('.items-container');
const items = [
  {
      id: '001',
      image: 'images/item2.jpg',
      company: 'Carlton London',
      item_name: 'Rhodium-Plated CZ Floral',
      original_price: 1045,
      current_price: 606,
      discount_percentage: 42,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: 4.5,
          count: 1400,
      },
  },
  {
      id: '002',
      image: 'images/item1.jpg',
      company: 'CUKOO',
      item_name: 'Women Padded Dress',
      original_price: 2599,
      current_price: 1507,
      discount_percentage: 42,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: 4.3,
          count: 24,
      },
  },
  {
      id: '003',
      image: 'images/item3.jpg',
      company: 'NUEVOSDAMAS',
      item_name: 'Women Red & Printed Skirts',
      original_price: 1599,
      current_price: 495,
      discount_percentage: 69,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: 4.1,
          count: 249,
      },
  },
  {
      id: '004',
      image: 'images/item4.jpg',
      company: 'ADIDAS',
      item_name: 'Indian Cricket ODI Jersey',
      original_price: 999,
      current_price: 999,
      discount_percentage: 0,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: 5.0,
          count: 10,
      },
  },
  {
      id: '005',
      image: 'images/item5.jpg',
      company: 'Roadster',
      item_name: 'Pure Cotton T-shirt',
      original_price: 1399,
      current_price: 489,
      discount_percentage: 65,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: 4.2,
          count: 3500,
      },
  },
  {
      id: '006',
      image: 'images/item6.jpg',
      company: 'Nike',
      item_name: 'Men ReactX Running Shoes',
      original_price: 14995,
      current_price: 14995,
      discount_percentage: 0,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: 0.0,
          count: 0,
      },
  },
  {
      id: '007',
      image: 'images/item7.jpg',
      company: 'The Indian Garage Co',
      item_name: 'Men Slim Fit Regular Shorts',
      original_price: 1599,
      current_price: 639,
      discount_percentage: 60,
      rating: {
          stars: 4.2,
          count: 388,
      },
  },
  {
      id: '008',
      image: 'images/item8.jpg',
      company: 'Nivea',
      item_name: 'Men Fresh Deodrant 150ml',
      original_price: 285,
      current_price: 142,
      discount_percentage: 50,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: 4.2,
          count: 5200,
      },
    },
    {
      id: '009',
      image: 'images/shirt (1).jpg',
      company: 'Roadster',
      item_name: 'Slim Fit Casual Shirt',
      original_price: 1299,
      current_price: 799,
      discount_percentage: 38,
      return_period: 14,
      delivery_date: '25 Sep 2025',
      rating: {
          stars: 4.4,
          count: 1200,
      },
  },
  {
      id: '010',
      image: 'images/shirt (5).jpg',
      company: 'H&M',
      item_name: 'Printed Cotton T-Shirt',
      original_price: 799,
      current_price: 499,
      discount_percentage: 38,
      return_period: 14,
      delivery_date: '25 Sep 2025',
      rating: {
          stars: 4.2,
          count: 850,
      },
  },
  {
      id: '011',
      image: 'images/shirt (3).jpg',
      company: 'Nike',
      item_name: 'winter bomber jacket',
      original_price: 2499,
      current_price: 1749,
      discount_percentage: 30,
      return_period: 14,
      delivery_date: '26 Sep 2025',
      rating: {
          stars: 4.6,
          count: 430,
      },
  },
  {
      id: '012',
      image: 'images/earbuds.jpg',
      company: 'boAt',
      item_name: 'Wireless Earbuds Driver',
      original_price: 1999,
      current_price: 1499,
      discount_percentage: 25,
      return_period: 14,
      delivery_date: '26 Sep 2025',
      rating: {
          stars: 4.3,
          count: 2200,
      },
  },
  
];


function displayItem()
{
    let innerHTML=``
    items.forEach(item=>{
    innerHTML+=`
    <div class="item">
    <img src="${item.image}" alt="">
     <div class="rating">
      ${item.rating.stars} ⭐ | ${item.rating.count}
     </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
      <span class="current-price">${item.current_price}</span>
      <span class="original-price"><strike>Rs${item.original_price}</strike></span>
      <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id});"
    >Add to bag</button>
    </div>`
    });
    itemsContainerElement.innerHTML=innerHTML;
}
let bagItems;
function addToBag(itemID)
{
    let BagItemsStr=localStorage.getItem('BagItems');
    bagItems=BagItemsStr?JSON.parse(BagItemsStr):[];
    if(itemID!==undefined)
    {
        bagItems.push(itemID);
    }
  let countNO=bagItems.length;
  localStorage.setItem('BagItems',JSON.stringify(bagItems));
  if(countNO>0)
  document.querySelector('.bag-item-count').innerHTML=countNO;
}
addToBag();
displayItem();


