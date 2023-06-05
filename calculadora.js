const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonUse = boton.textContent;

        if (boton.id === "c") {
            screen.textContent = "0";
            return;
        }

        if (boton.id === "erase") {
            if (screen.textContent.length === 1 || screen.textContent === "Error!") {
                screen.textContent = "0";
            } else {
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                screen.textContent = eval(screen.textContent);
            } catch {
                screen.textContent = "Error!";
            }
            return;
        }

        if (screen.textContent === "0" || screen.textContent === "Error!") {
            screen.textContent = botonUse;
        } else {
            screen.textContent += botonUse;
        }
       
    
    })
})

