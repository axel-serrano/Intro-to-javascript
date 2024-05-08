//breakfastMenu 

const breakfastMenu = ['Pancakes -$12.00', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15.00'];
const mainCourseMenu = ['Steak -$20.00' , 'Pasta -$15.00' , 'Burger -$10.00' , 'Salmon -$25.00'];
const dessertMenu = ['Cake -$10.00' , 'Ice Cream -$10.00' , 'Pudding -$10.00' , 'Fruit Salad -$10.00'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index +1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

//mainCourseItem

let mainCourseItem = '';

mainCourseMenu.forEach((item, index)=>{
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`
});

document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

//dessertitems

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++){
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}`;
}

document.getElementById('dessertMenuItems').innerHTML = dessertItem;