data = [{
    'img1': 'assets/Screenshot 2023-12-27 144703.png',
    'img2': 'assets/Screenshot 2023-12-27 144703.png',
    'title':'Web E-comerce',
    'subtitle':'zenit',
    'desc':"Lorem ipsum dolor sit amet, consectetur adipisicing elitEnim, blanditiis ab impedit, vel tempora voluptasquia quaerat sed animi illo",
}, {
    'img1': 'assets/WhatsApp Image 2021-08-27 at 09.54.34.jpeg',
    'img2': 'assets/WhatsApp Image 2021-08-27 at 09.54.34.jpeg',
    'title':'Web Design',
    'subtitle':'The Galerry',
    'desc':"Lorem ipsum dolor sit amet, consectetur adipisicing elitEnim, blanditiis ab impedit, vel tempora voluptasquia quaerat sed animi illo",
}]

var container = document.querySelector('.container-project')

data.array.forEach(element => {
    container.innerHTML +=
    ` <div class="project">
    <div class="img-project">
        <img src="`+element.img1+`" alt="">
        <img src="${element.img2}" alt="">
    </div>
    <div class="desc-project">
        <h1>${element.title}</h1>
        <h2>${element.subtitle}</h2>
        <h2>${element.desc}</h2>
    </div>
    <button class="read-more">Read-More</button>
</div>`

});