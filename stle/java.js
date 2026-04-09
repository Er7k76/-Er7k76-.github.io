
function toggleTheme(){
    document.body.classList.toggle("dark")
}


function startCarousel(trackId){
    const track = document.getElementById(trackId)

    function move(){
        const first = track.children[0]

        track.style.transition = "transform 0.5s ease"
        track.style.transform = "translateX(-270px)"

        setTimeout(() => {
            track.style.transition = "none"
            track.appendChild(first)
            track.style.transform = "translateX(0px)"
        }, 500)
    }

    setInterval(move, 2500)
}


function addEffects(){
    const slides = document.querySelectorAll(".slide")

    slides.forEach(slide => {


        slide.addEventListener("mouseenter", () => {
            slide.animate([
                { transform: "rotate(0deg) scale(1)" },
                { transform: "rotate(4deg) scale(1.05)" },
                { transform: "rotate(-4deg) scale(1.05)" },
                { transform: "rotate(2deg) scale(1.05)" },
                { transform: "rotate(0deg) scale(1)" }
            ], {
                duration: 600,
                easing: "ease"
            })
        })

        
        slide.addEventListener("mousemove", (e) => {
            const rect = slide.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            const centerX = rect.width / 2
            const centerY = rect.height / 2

            const rotateX = -(y - centerY) / 10
            const rotateY = (x - centerX) / 10

            slide.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
        })


        slide.addEventListener("mouseleave", () => {
            slide.style.transform = "rotateX(0) rotateY(0) scale(1)"
        })

    })
}

window.onload = () => {
    startCarousel("gamesTrack")
    startCarousel("projectsTrack")
    addEffects()
}