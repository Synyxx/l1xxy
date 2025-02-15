document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("txt");
    const letters = text.innerText.split("");

    text.innerText = "";

    letters.forEach(letter => {
        let span = document.createElement("span");
        span.innerText = letter;
        span.classList.add("teste");
        text.appendChild(span);
    });

    const spans = document.querySelectorAll(".teste");

    document.addEventListener("mousemove", (e) => {
        spans.forEach(span => {
            const rect = span.getBoundingClientRect();
            const spanX = rect.left + rect.width / 2;
            const spanY = rect.top + rect.height / 2;

            const deltaX = e.clientX - spanX;
            const deltaY = e.clientY - spanY;
            const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

            if (distance < 60) {
                
                let randomX = (Math.random() - 0.5) * 40;
                let randomY = (Math.random() - 0.5) * 40;
                span.style.transform = `translate(${deltaX * 0.2 + randomX}px, ${deltaY * 0.2 + randomY}px) rotate(${Math.random() * 30 - 15}deg)`;
            } else {
                span.style.transform = "translate(0, 0) rotate(0deg)";
            }
        });
    });
});
