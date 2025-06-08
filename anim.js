const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".scrollTop", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");


/* const text = document. querySelector(".infill");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
    text. innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll ('span') [char];
    span.classList. add('fade');
    char++
    if(char === splitText.length){
        complete ();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer=null;
} */

/* let listItems = [...document. querySelectorAll('p')];

let options = {
    rootMargin: '0%',
    threshold: 1.0
}

let observer = new IntersectionObserver(showItem, options);

function showItem (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let letters = [...entry.target.querySelectorAll('span')];
            letters.forEach((letter, idx) => {
                setTimeout(()=>{
                    letter.classlist.add('active');
                }, idx * 10)
            })
            entry.target.children [0].classList.add('active');
        }
    })
}
 
listItems.forEach(item => {
    let newString = '';
    let itemText = item.children[0].innerText.split('');
    itemText.map(letter => (newString += letter == ''? `<span class='gap'></span>` : `<span>${letter}</span>`))
    item.innerHTML = newString; 
    observer.observe(item);
}) */


/* let paragraphs = [...document. querySelectorAll('p')];
let spans = [];

paragraphs.forEach(paragraph => {
    let htmlString = '';
    let pArray = paragraph.textContent.split('');
    for(let i = 0; i< pArray.length; i++){
        htmlString += `<span>${pArray[i]}</span>`;
    }
    paragraph.innerHTML = htmlString;
})

spans = [...document.querySelectorAll('span')];

function revealSpans(){
    for(let i = 0; i < spans.length; i++){
        if(spans[i].parentElement.getBoundingClientRect().top < window.innerHeight / 0.5){
            let {left, top} = spans [i] . getBoundingClientRect () ;
            top = top - (window. innerHeight * .2) ;
            let opacityValue = 1 - ((top * .01) + (left * 0.001)) < 0.1 ? 0.1 : 1 - ((top * .01) + (left * 0.001)).toFixed(3); 
            opacityValue = opacityValue > 1 ? 1 : opacityValue.tofixed(3);
            spans [i].style.opacity = opacityValue;
        }
    }
}

window. addEventListener('scroll', () => {
    revealSpans()
})
revealSpans() */