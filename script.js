const div = document.querySelector('.div'),
    bg = document.querySelector('.bg'),
    stars = document.querySelectorAll('.stars')

div.addEventListener('mousemove', (e) => {
    let speed = bg.getAttribute('speed')
    let x = (window.innerWidth - e.pageX * speed) / 50
    let y = (window.innerHeight - e.pageY * speed) / 50
    bg.style.transform = `translate(${x}px,${y}px)`

})

