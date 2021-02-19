 class Card {
    constructor({img, name}) {
        this.img = img;
        this.name = name;    
    }

    //Card generator 
    generateCard(){
        let template = '';
        let card = document.createElement('div');
        card.className = 'pet_card';
        
        this.img &&
        (template += `<img class = "pet_photo" src=${this.img} alt="pet">`);

        if(this.name)
        {
            template += `<p class="pet_name">${this.name}</p>`
        }

        template += `<button type="button" class="learn_more">Learn more</button>`;
        template += `</div>`;

        card.innerHTML = template;
        return card;
    }   
 }