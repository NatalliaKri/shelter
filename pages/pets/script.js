
let paginationArray =[
    {
        id: 1,
        name: "Jennifer",
        img: "../../assets/images/jennifer.png",
        type: "Dog",
        breed: "Labrador",
        description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        age: "2 months",
        inoculations: ["none"],
        diseases: ["none"],
        parasites: ["none"]
      },
      {
        id: 2,
        name: "Sophia",
        img: "../../assets/images/sophia.png",
        type: "Dog",
        breed: "Shih tzu",
        description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        age: "1 month",
        inoculations: ["parvovirus"],
        diseases: ["none"],
        parasites: ["none"]
      },
      {
        id: 3,
        name: "Woody",
        img: "../../assets/images/woody.png",
        type: "Dog",
        breed: "Golden Retriever",
        description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        age: "3 years 6 months",
        inoculations: ["adenovirus", "distemper"],
        diseases: ["right back leg mobility reduced"],
        parasites: ["none"]
      },
      {
        id: 4,
        name: "Scarlett",
        img: "../../assets/images/scarlett.png",
        type: "Dog",
        breed: "Jack Russell Terrier",
        description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        age: "3 months",
        inoculations: ["parainfluenza"],
        diseases: ["none"],
        parasites: ["none"]
      },
      {
        id: 5,
        name: "Katrine",
        img: "../../assets/images/katrine.png",
        type: "Cat",
        breed: "British Shorthair",
        description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        age: "6 months",
        inoculations: ["panleukopenia"],
        diseases: ["none"],
        parasites: ["none"]
      },
      {
        id: 6,
        name: "Timmy",
        img: "../../assets/images/timmy.png",
        type: "Cat",
        breed: "British Shorthair",
        description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        age: "2 years 3 months",
        inoculations: ["calicivirus", "viral rhinotracheitis"],
        diseases: ["kidney stones"],
        parasites: ["none"]
      },
      {
        id: 7,
        name: "Freddie",
        img: "../../assets/images/freddie.png",
        type: "Cat",
        breed: "British Shorthair",
        description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        age: "2 months",
        inoculations: ["rabies"],
        diseases: ["none"],
        parasites: ["none"]
      },
      {
        id: 8,
        name: "Charly",
        img: "../../assets/images/charly.png",
        type: "Dog",
        breed: "Jack Russell Terrier",
        description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        age: "8 years",
        inoculations: ["bordetella bronchiseptica", "leptospirosis"],
        diseases: ["deafness", "blindness"],
        parasites: ["lice", "fleas"]
      },
      
];


window.onload = function(){
  
  addCardsClickHandler();

  hideModalWindow();
};


let pets = [];
let fullPetsList = [];

let clickedCard = '';
let pet = document.querySelectorAll('.pet');


const addCardsClickHandler = () => {
  
  for(let i = 0; i < pet.length; i++)
  {
    let petCard = pet[i];
  
    petCard.addEventListener('click', (e) => {         
    if(e.target.classList.contains('pet_photo') 
       || e.target.classList.contains('name')
       || e.target.classList.contains('learn_more')
       || e.target.classList.contains('pet_card'))
       {
        clickedCard = petCard.children[1].innerHTML;
        console.log(clickedCard);
        showModalWindow(clickedCard);
       }
     });
  };
}


const showModalWindow = (clickedCard) => {
  let text = document.querySelector('.popup .information');
  text.innerText ='';
    let popup = document.querySelector('.popup');
    popup.classList.remove('popup');
    popup.classList.add('popup_active');
    
      for(let i = 0; i < paginationArray.length; i++){
        if(clickedCard === paginationArray[i].name)
        {
          let modalka = (new Modal(paginationArray[i])).generateModal();
          text.appendChild(modalka);
      }
    }    
};


const hideModalWindow = () => {
  let popup = document.querySelector('.popup');
  popup.addEventListener('click', (e) => {

  if(e.target.classList.contains('popup_active') 
   || e.target.classList.contains('cross')
   ||e.target.classList.contains('cross-line'))
   {
      popup.classList.remove('popup_active');
      popup.classList.add('popup');
    }
});
};


const cleanContainer = () => { //очищает полностью контент
  let layout = document.querySelector('.layout-4-columns');
  layout.innerHTML = '';
  

const createPets = (paginationArray) => {
  let layout = document.querySelector('.layout-4-columns');
  layout.innerHTML += createElement(paginationArray);
}


const createElement = (paginationArray) => {
  let str = '';
  for(let i = 0; i < paginationArray.length; i++){
    str += `<div class = "pet"><img class = "pet_photo" 
            src = "${paginationArray[i].img}" width = "270px" height ="270px">
            <p class = "name">${paginationArray[i].name}</p>
            <button type="button" class="learn_more">Learn more</button></div> `
  }
  return str;   
}


 fullPetsList = (() => {
  let tempArr = [];
  for(let i = 0; i < 6; i++){
    const newPets = paginationArray;
    for(let j = paginationArray.length; j > 0; j--){
        let randomIndex = Math.floor(Math.random() * j);
        let randomElement = newPets.splice(randomIndex, 1)[0];
        newPets.push(randomElement);
    }
    tempArr = [...tempArr, ...newPets];
  }
  return tempArr;
})();


fullPetsList = sort863(fullPetsList); 

createPets(fullPetsList);


let animal = document.querySelectorAll('.pet');
let clickedCard;
for(let i = 0; i < animal.length; i++){
  let anim = animal[i];
  anim.addEventListener('click', (e) =>{
    
    clickedCard = anim.children[1].innerHTML;
    let popup = document.createElement('div');
    layout.appendChild(popup);
    popup.classList.add('popup');
    
    let informationWindow = document.createElement('div');
    informationWindow.classList.add('informationWindow');
    informationWindow.style.display = 'block';
    popup.appendChild(informationWindow);

    let information = document.createElement('div');
    informationWindow.appendChild(information);
    information.classList.add('information');

    let cross = document.createElement('span');
    cross.style.display = 'block';
    informationWindow.appendChild(cross);
    cross.classList.add('cross');

    let crossLine = document.createElement('span');
    cross.appendChild(crossLine);
    crossLine.classList.add('cross-line');

    for(let i = 0; i < paginationArray.length; i++){
        if(clickedCard === paginationArray[i].name)
        {
          let modalka = (new Modal(paginationArray[i])).generateModal();
          information.appendChild(modalka);
        }
    }  
    

   popup.classList.add('popup_active');
   let popupActive = document.querySelector('.popup_active');

   cross.addEventListener('click', (e) => {
      popup.classList.remove('popup_active');
      popup.classList.add('popup'); 
   }) 
  
   popupActive.addEventListener('click', (e) => {
      popup.classList.remove('popup_active');
      popup.classList.add('popup');  
   }) 
  })
}


for(let i = 0; i < (fullPetsList.length / 6); i++){
  const steplist = fullPetsList.slice(i*6, (i*6) +6);
  for(let j = 0; j < 6; j++){
      steplist.forEach((item, index) =>{
        if(item.name === steplist[j].name && (index !== j))
        {
          document.querySelector('.layout-4-columns').children[(i*6) +j].style.border = '5px solid red';
        }
      })
  } 
}
}


const sort863 = (list) =>{
  let length = list.length;
  for(let i = 0; i < (length / 6); i++){
    const steplist = list.slice(i*6, (i*6) +6);
    for(let j = 0; j < 6; j++){
      let duplicatedItem = steplist.find((item, index) =>{
        return item.name === steplist[j].name && (index !== j)
        
         });

        if(duplicatedItem != undefined){
        const index = (i*6) + j;
        const numberof8 = Math.trunc(index / 8);
        const elem = list.splice(index, 1)[0];
        list.splice(numberof8 * 8, 0, elem);
        i -= 2;
        break;
      }
  } 
}
return list;
}


let burger = document.querySelector('.hamburger');
let burgerMenu = document.querySelector('.hamburger-menu');
let backshadow = document.querySelector('.backshadow');

    const showBurgerMenu = burger.addEventListener('click', (e) => {
        burger.classList.toggle('hamburger_active');
        burgerMenu.classList.toggle('hamburger-menu_active');
        backshadow.classList.toggle('backshadow_active');
    });

    backshadow.addEventListener('click', (e) => {
      burger.classList.remove('hamburger_active');
      burgerMenu.classList.remove('hamburger-menu_active');
      backshadow.classList.remove('backshadow_active');
      });
    

let nextPageButton = document.querySelector('.next-page');
let lastPageButton = document.querySelector('.last-page');
let firstPageButton = document.querySelector('.first-page');
let previousPageButton = document.querySelector('.previous-page');
let activeButton = document.querySelector('.nav_button_active');

if(+(activeButton.innerHTML) === 1){
  previousPageButton.classList.add('inactive');
  firstPageButton.classList.add('inactive');
  nextPageButton.classList.remove('inactive');
  lastPageButton.classList.remove('inactive');
}


const addPlusPageClickHandler = () => {
  cleanContainer(); //очищает полностью контент
  
  firstPageButton.classList.remove('inactive');
  previousPageButton.classList.remove('inactive');


  if(+(activeButton.innerHTML) < 6) 
  {
  activeButton.innerHTML = (+(activeButton.innerHTML) + 1);
  nextPageButton.addEventListener('click', addPlusPageClickHandler);
  lastPageButton.addEventListener('click', addLastPageClickHandler);
  }

  if(+(activeButton.innerHTML) >= 6)
  {
    nextPageButton.removeEventListener('click', addPlusPageClickHandler);
    lastPageButton.removeEventListener('click', addLastPageClickHandler);
    nextPageButton.classList.add('inactive');
    lastPageButton.classList.add('inactive');
  } 
}

  
const addLastPageClickHandler = () => {
  nextPageButton.classList.add('inactive');
  firstPageButton.classList.remove('inactive');
  previousPageButton.classList.remove('inactive');
  previousPageButton.addEventListener('click', addMinusPageClickHandler);
  firstPageButton.addEventListener('click', addFirstPageClickHandler);
  cleanContainer(); //очищает полностью контент
  if(+(activeButton.innerHTML) < 6){
  activeButton.innerHTML = '6';
  
  lastPageButton.classList.add('inactive');
  lastPageButton.removeEventListener('click', addLastPageClickHandler);
  nextPageButton.removeEventListener('click', addPlusPageClickHandler);

  }
};


const addFirstPageClickHandler = () => {
  cleanContainer(); //очищает полностью контент
  if((+(activeButton.innerHTML)) > 1){
  activeButton.innerHTML = 1;
  firstPageButton.addEventListener('click', addFirstPageClickHandler);
  }

  if(+(activeButton.innerHTML) === 1){
    previousPageButton.classList.add('inactive');
    firstPageButton.classList.add('inactive');
    firstPageButton.removeEventListener('click', addFirstPageClickHandler);
    
      nextPageButton.classList.remove('inactive');
      lastPageButton.classList.remove('inactive');
      lastPageButton.addEventListener('click', addLastPageClickHandler);
      nextPageButton.addEventListener('click', addPlusPageClickHandler);
  }
  }


const addMinusPageClickHandler = () => {
  cleanContainer(); //очищает полностью контент
  if(+(activeButton.innerHTML) > 1)
  {
  activeButton.innerHTML = (+(activeButton.innerHTML) - 1);
  lastPageButton.addEventListener('click', addLastPageClickHandler);
    nextPageButton.addEventListener('click', addPlusPageClickHandler);
    nextPageButton.classList.remove('inactive');
  lastPageButton.classList.remove('inactive');
  }


  if(+(activeButton.innerHTML) === 1)
  {
    previousPageButton.classList.add('inactive');
    firstPageButton.classList.add('inactive');
    previousPageButton.removeEventListener('click', addMinusPageClickHandler);
    firstPageButton.removeEventListener('click', addFirstPageClickHandler);
    lastPageButton.addEventListener('click', addLastPageClickHandler);
    nextPageButton.addEventListener('click', addPlusPageClickHandler);
    nextPageButton.classList.remove('inactive');
    lastPageButton.classList.remove('inactive');
  }
}

  nextPageButton.addEventListener('click', addPlusPageClickHandler);
  lastPageButton.addEventListener('click', addLastPageClickHandler);
  previousPageButton.addEventListener('click', addMinusPageClickHandler);
  firstPageButton.addEventListener('click', addFirstPageClickHandler);  


  let cross = document.querySelector('.cross');
  let crossActive= document.querySelector('.cross');
  crossActive.addEventListener('mouseover', (e) => {
    cross.style.background = 'coral';
  });
  
  crossActive.addEventListener('mouseout', (e) => {
    cross.style.background = 'white';
  });
 
document.querySelector('.popup').addEventListener('mouseover', (e) => {
    if(e.target.classList.contains('popup_active')
     || e.target.classList.contains('cross')
     || e.target.classList.contains('cross-line'))
     {
        cross.style.background = 'coral';
     } else 
      cross.style.background = 'white';
  });