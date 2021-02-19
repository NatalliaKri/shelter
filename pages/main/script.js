

let data = 
[
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
  }
];

window.onload = function(){
  
    addCardsClickHandler();

    hideModalWindow();   
}



let modalsArray = [];
for(let i = 0; i < data.length; i++){
  modalsArray[i] = (new Modal(data[i])).generateModal();
}



let clickedCard = '';
let clickedCard2 = '';
let generatedCards;
let pets = document.querySelectorAll('.pet_card');


const addCardsClickHandler = () => {
  
  for(let i = 0; i < pets.length; i++ ){
  let petCard = pets[i];
  
  petCard.addEventListener('click', (e) => {         
    if(e.target.classList.contains('pet_photo') 
       || e.target.classList.contains('pet_name')
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
      for(let i = 0; i < data.length; i++){
        if(clickedCard === data[i].name){
          let modal = (new Modal(data[i])).generateModal();
        text.appendChild(modal);
      }
    }    
}; 


const hideModalWindow = () => {
  let popup = document.querySelector('.popup');
  popup.addEventListener('click', (e) => {

  if(e.target.classList.contains('popup_active') 
   || e.target.classList.contains('cross')
   ||e.target.classList.contains('cross-line')){  
  popup.classList.remove('popup_active');
  popup.classList.add('popup');
  }  
});
};




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



const renderCardsToDom = () => {
  let container = getContainer();
  generateCards(data).forEach(card => {
      container.appendChild(card.generateCard());    
  })  
}


const getContainer = () => {
  const cardsContainer = document.querySelector('.cards');
  cardsContainer.innerHTML = '';
  return cardsContainer;
}



let burger = document.querySelector('.hamburger');
let burgerLine = document.querySelector('.burger-line');
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


  

let slider = document.querySelector('.cards');
let random = Math.round( 0 + Math.random() * 7);
let desktopSmallbuttons = document.querySelectorAll('.smallbutton');
let mobileSmallbuttons = document.querySelectorAll('.mobile-smallbutton');
let smallbuttons =[];

for(let i = 0; i < desktopSmallbuttons.length; i++)
{
  smallbuttons.push(desktopSmallbuttons[i]);
}

for(let i = 0; i < mobileSmallbuttons.length; i++)
{
  smallbuttons.push(mobileSmallbuttons[i]); 
}


for(let i = 0; i < smallbuttons.length; i++){
  let smallbutton = smallbuttons[i];

  smallbutton.addEventListener('click', (e) => {
    slider.innerHTML = '';
    let carta1 = new Card(data[Math.round( 0 + Math.random() * 7)]).generateCard();
    

    let carta2 = new Card(data[Math.round( 0 + Math.random() * 7)]).generateCard();
    
    let carta3 = new Card(data[Math.round( 0 + Math.random() * 7)]).generateCard();
    

if(carta1.innerHTML === carta2.innerHTML){
carta2 = new Card(data[Math.round( 0 + Math.random() * 7)] ).generateCard();
  if(carta1.innerHTML === carta2.innerHTML){
  carta2 = new Card(data[Math.round( 0 + Math.random() * 7)] ).generateCard();
};
   
};

if( carta1.innerHTML === carta3.innerHTML){
carta3 = new Card(data[Math.round( 0 + Math.random() * 7)]).generateCard();
if(carta1.innerHTML === carta3.innerHTML){
  carta3 = new Card(data[Math.round( 0 + Math.random() * 7)]).generateCard();

}
;

}

if( carta2.innerHTML === carta3.innerHTML){
carta3 = new Card(data[Math.round( 0 + Math.random() * 7)]).generateCard();
   if(carta2.innerHTML === carta3.innerHTML){
         carta3 = new Card(data[Math.round( 0 + Math.random() * 7)] ).generateCard();
};
}
    
    slider.append(carta1);
    slider.append(carta2);
    slider.append(carta3);
    generatedCards = slider.children;
    
    
    for(let i = 0; i < generatedCards.length; i++ ){
      let petCard = generatedCards[i];
      
      petCard.addEventListener('click', (e) => {         
        if(e.target.classList.contains('pet_photo') 
           || e.target.classList.contains('pet_name')
           || e.target.classList.contains('learn_more')
           || e.target.classList.contains('pet_card'))
           {
        clickedCard = petCard.children[1].innerHTML;
        showModalWindow(clickedCard);
           }
         });
      };   
  });
};

