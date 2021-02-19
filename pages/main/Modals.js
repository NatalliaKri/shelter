 class Modal {
    constructor({name, img, type, breed, description, age, inoculations,
         diseases, parasites}){
             this.name = name;
             this.img = img;
             this.type = type;
             this.breed = breed
             this.description = description;
             this.age = age;
             this.inoculations = inoculations;
             this.diseases = diseases;
             this.parasites = parasites;
         }

         generateModal(){
             let template = '';
             let modalWindow = document.createElement('div');
             modalWindow.className = 'text';
             //modalWindow.setAttribute('data-id', this.id);


             template+=`<div class ="modal-img">`
             template += `<img src = ${this.img} width =350px>`
             template+=`</div>`


             template+=`<div class="content">`
             template += `<h2 class = "name">`
             template += `${this.name}`
             template += `</h2>`

            
             template += `<h4 class = "type">`
             template += `${this.type}  -  ${this.breed}`
             template += `</h4>`

             template += `<p class = "description">`
             template += `${this.description}`
             template += `</p>`

             template += `<p class = "age">`
             template += `<strong>Age:</strong> ${this.age}`
             template += `</p>`

             template += `<p class = "inoculation">`
             template += `<strong>Inoculation:</strong> ${this.inoculations}`
             template += `</p>`

             template += `<p class = "diseases">`
             template += `<strong>Diseases:</strong> ${this.diseases}`
             template += `</p>`

             template += `<p class = "parasites">`
             template += `<strong>Parasites:</strong> ${this.parasites}`
             template += `</p>`
             template+=`</div>`


             modalWindow.innerHTML = template;

             return modalWindow;

             }
 };
 