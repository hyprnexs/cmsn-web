document.addEventListener("DOMContentLoaded", () => {
    const gradientBox = document.querySelector(".gradient-box");
    const gradientText = gradientBox.querySelector("h1");
    const pillborder = document.querySelector(".pill-button")
    const pillborder1 = document.querySelector(".pill-button1")
    const pillborder2 = document.querySelector(".pill-button2")

    let gradientIndex = 0;

    setInterval(() => {
        gradientIndex = (gradientIndex + 1) % gradients.length;
        gradientText.style.background = gradients[gradientIndex];
    }, 3000);
//gradient flashlight box lol
    gradientBox.addEventListener("mousemove", (e) => {
        const rect = gradientBox.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gradientBox.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255, 0.21), rgba(0,0,0, 0)`;
        gradientBox.addEventListener("mouseleave", () => {
            gradientBox.style.background = "#222";
        });
    });
   //flash light for pills 1
    pillborder.addEventListener("mouseleave", () => {
        pillborder.style.background = "#222";
    });
    pillborder.addEventListener("mousemove", (e) => {
        const rect = pillborder.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        pillborder.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255, 0.21), rgba(0,0,0, 0)`;
    });

    pillborder.addEventListener("mouseleave", () => {
        pillborder.style.background = "#222";
    });
    pillborder.addEventListener("mouseleave", () => {
        pillborder.style.background = "#222";
    });

    //flash light for pills 2 (why im i keep typing for these?)
    
    pillborder1.addEventListener("mousemove", (e) => {
        const rect = pillborder1.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        pillborder1.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255, 0.21), rgba(0,0,0, 0)`;
    });
    pillborder1.addEventListener("mouseleave", () => {
        pillborder1.style.background = "#222";
    });
    pillborder1.addEventListener("mouseleave", () => {
        pillborder1.style.background = "#222";
    });

    //flash light for pills 3 done!

    pillborder2.addEventListener("mouseleave", () => {
        pillborder2.style.background = "#222";
    });

    pillborder2.addEventListener("mousemove", (e) => {
        const rect = pillborder2.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        pillborder2.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255, 0.21), rgba(0,0,0, 0)`;
    });

    pillborder2.addEventListener("mouseleave", () => {
        pillborder2.style.background = "#222";
    });
});

function adjustButtonScaling() {
    const buttons = document.querySelectorAll('.pill-button, .pill-button1, .pill-button2');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (screenWidth < screenHeight) {
        buttons.forEach(button => {
            button.style.transform = "scale(0.7)"; // Scales down for vertical screens
            button.style.fontSize = "12px";
            button.style.padding = "17px 30px";
        });
    } else {
        buttons.forEach(button => {
            button.style.transform = "scale(1)"; // Default size for horizontal screens
            button.style.fontSize = "16px";
            button.style.padding = "15px 35px";
        });
    }
}

window.addEventListener('resize', adjustButtonScaling);
window.addEventListener('load', adjustButtonScaling);