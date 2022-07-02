const bodyPupmpkin = document.querySelectorAll('#bd');
const eye_left = document.querySelector('#XMLID_12_');
const eye_right = document.querySelector('#XMLID_27_');
const mouth = [document.querySelector('#XMLID_32_'), document.querySelector('#XMLID_25_')]
const bd = document.querySelector('body')

const initAnimation = () => {
    //inicio
    setTimeout(() => {
        bd.style.pointerEvents = "none"
    },1000)


    // Primeira parte: animacao da boca
    gsap.to(mouth, {
        rotation: 8,
        duration: 1,
        delay: 1,
    });

    // Segunda parte: animacao volta ao normal

    gsap.to(mouth, {
        rotation: 0,
        duration: 1,
        delay: 4
    });

    // Body Pupmpkin


    // Jump in 
    gsap.to(bodyPupmpkin, {
        y: -200,
        duration: 1, 
        ease: "expo.out", 
        delay: 5
    });

    // Jump out
    gsap.to(bodyPupmpkin, {
        y: 0,
        duration: .5, 
        ease: "bounce.out",
        delay: 6,
        
    });

    // Primeira parte: animacao dos olhos (esquerda)
    gsap.to(eye_left, {
        x: -15,
        delay: 1,
        
    })
    gsap.to(eye_right, {
        x: -5,
        delay: 1
    })

    // Segunda Parte: Resetar animacao (centro)

    gsap.to(eye_left, {
        x: 0,
        delay: 2
        
    })
    gsap.to(eye_right, {
        x:0,
        delay: 2
        
    })

    // Terceira Parte: animacao dos olhos (direita) 
    
    gsap.to(eye_left, {
        x: 4.5,
        delay: 3,           
        
    })
    gsap.to(eye_right, {
        x:15,
        delay: 3
        
    })

    // Quarta Parte: Resetar animacao (centro) 
    
    gsap.to(eye_left, {
        x: 0,
        delay: 4,
        
    })
    gsap.to(eye_right, {
        x:0,
        delay: 4,
    })


    //fim
    setTimeout(() => {
        bd.style.pointerEvents = "visible"
    },4500)
  
}
bd.addEventListener('mousemove', (evt) => {
    const x = -(window.innerWidth / 2 - evt.pageX) / 100;
    const y = -(window.innerHeight / 2 - evt.pageY) / 100;
    eye_left.style.transform = `translateY(${y}px) translateX(${x}px)`;
    eye_right.style.transform = `translateY(${y}px) translateX(${x}px)`;
    mouth[0].style.transform = `translateY(${y * Math.PI}px)`;
    mouth[1].style.transform = `translateY(${y * Math.PI}px)`;
    bd.style.pointerEvents = "visible"
    
});  

bd.addEventListener('click', initAnimation)