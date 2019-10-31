/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = ['Students', 'Faculty', "What's New", 'Tech Trends', 'Music', 'Log Out'];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

//These are located outside the menuComponent function so we don't loop and output these each time
const header = document.querySelector('.header');
const menuButton = document.querySelector('.menu-button');

function menuComponent(data) {
  //Step1: create the elements using createElement -> only need li to to pass in menuItems to log out the items
  const menuContainer = document.createElement('div');
  const unorderList = document.createElement('ul');

  //Step 2:create structure of elements using appendChild
  menuContainer.appendChild(unorderList);
  //create an ordered(let orderedlist) list so we can inject the 'data' into individual 'li', which 'orderedList' is appended to 'unorderdList'.
  data.forEach(item => {
    let orderedList = document.createElement('li');
    unorderList.appendChild(orderedList);
    orderedList.textContent = item;
  });

  //Step 3: set up the classes using 'classList'
  menuContainer.classList.add('menu');

  //Step 5: add eventlistener to open the menu button
  menuButton.addEventListener('click', event => {
    menuContainer.classList.toggle('menu--open');
  });

  return menuContainer; //returns the entire menu component
}
//top level parent 'header' appendChild the function component(menuComponent)
header.appendChild(menuComponent(menuItems)); //pass 'menuItems' array as 'data' argument
