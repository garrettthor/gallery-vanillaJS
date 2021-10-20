const mainImage = document.querySelector('.image-window')
const thumbnail = document.querySelector('.image-thumbnail')

thumbnail.addEventListener('click', selectImage)

function selectImage() {
    console.log('click')
}

const backArrow = document.querySelector('#back-btn')
const fwdArrow = document.querySelector('#fwd-btn')

backArrow.addEventListener('click', back)
fwdArrow.addEventListener('click', fwd)

let image1 = 'img/64834254606__C82EA7BB-DCE1-4063-8258-BC9069510B9D.jpeg';
let image2 = 'img/IMG_1664.jpeg';
let image3 = 'img/IMG_1715.jpeg';
let image4 = 'img/IMG_1720.jpeg';
let image5 = 'img/IMG_1855.jpeg';
let image6 = 'img/IMG_1401.jpeg';

let imgArray = [image1, image2, image3, image4, image5, image6];

console.log(imgArray)

function back() {
    alert('back pressed')
    imgArray.shift(image1)
    
    console.log(imgArray)
}

function fwd() {
    alert('fwd pressed')

}

