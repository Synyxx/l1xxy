const t = "Synyx";
let i = 0;
let isDeleting = false;
let speed = 150;

function type() {
    if (!isDeleting && i <= t.length) {
        document.title = t.substring(0, i);
        i++;
        speed = 150;
    } else if (isDeleting && i > 1) {
        document.title = t.substring(0, i);
        i--;
        speed = 50;
    }

    if (i > t.length) {
        isDeleting = true;
        speed = 1000;
    } else if (i === 1) {
        isDeleting = false;
        speed = 500;
    }

    setTimeout(type, speed);
}

typeEffect();
