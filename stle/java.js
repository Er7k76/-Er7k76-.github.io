function toggleTheme(){
    document.body.classList.toggle("dark");
}

/* ===== RELÓGIO ===== */
function startClock(){
    const clock = document.getElementById("clock");

    if (!clock) return;

    function update(){
        const now = new Date();

        clock.textContent = now.toLocaleTimeString("pt-PT", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    }

    update();
    setInterval(update, 1000);
}

/* ===== CARROSSEL ===== */
function startCarousel(trackId){
    const track = document.getElementById(trackId);

    if (!track) return;

    function move(){
        const first = track.children[0];

        track.style.transition = "transform 0.5s ease";
        track.style.transform = "translateX(-270px)";

        setTimeout(() => {
            track.style.transition = "none";
            track.appendChild(first);
            track.style.transform = "translateX(0px)";
        }, 500);
    }

    setInterval(move, 2500);
}

/* INIT */
window.addEventListener("load", () => {
    startClock();
    startCarousel("gamesTrack");
    startCarousel("projectsTrack");
});