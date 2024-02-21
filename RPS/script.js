const jatekTartomany = document.querySelector('.container'),
jatekosEredmeny = document.querySelector('.user_result img'),
szamitogepEredmeny = document.querySelector('.computer_result img'),
eredmeny = document.querySelector('.result'),
valasztasok = document.querySelectorAll('.option_image'),
jatekosPontok = document.querySelector('.user_score'),
szamitogepPontok = document.querySelector('.computer_score');




valasztasok.forEach((kep, index) => {
    kep.addEventListener('click', (e) => {
        kep.classList.add('active');

        valasztasok.forEach((kep2, index2) => {
            index !== index2 && kep2.classList.remove('active');


        });
        let kepSrc = e.target.querySelector('img').src;
        jatekosEredmeny.src = kepSrc;
        

        let randomSzam = Math.floor(Math.random() * 3);
        
        let szamitogetpKep = ["images/rock.png", "images/paper.png", "images/scissors.png"];
        szamitogepEredmeny.src = szamitogetpKep[randomSzam];

        let szamitogepSzimbolum = ["rock", "paper", "scissors"][randomSzam];
        let jatekosSzimbolum = ["rock", "paper", "scissors"][index];


        let vegeredmeny = {
            rockrock: "Döntetlen",
            rockpaper: "Vesztettél",
            rockscissors: "Nyertél",
            paperpaper: "Döntetlen",
            paperrock: "Nyertél",
            paperscissors: "Vesztettél",
            scissorsscissors: "Döntetlen",
            scissorsrock: "Vesztettél",
            scissorspaper: "Nyertél"

        };

        let vegeredmenyErtek = vegeredmeny[jatekosSzimbolum + szamitogepSzimbolum];
        
        
        if (vegeredmenyErtek === "Nyertél") {
            document.getElementById("user-score").innerHTML = parseInt(document.getElementById("user-score").innerHTML)+1;
        } else if (vegeredmenyErtek === "Vesztettél") {
            document.getElementById("computer-score").innerHTML = parseInt(document.getElementById("computer-score").innerHTML)+1;
        }
        
        
        eredmeny.textContent = jatekosSzimbolum === szamitogepSzimbolum ? "Döntetlen!" : `${vegeredmenyErtek}!`;
        eredmeny.style.color = jatekosSzimbolum === szamitogepSzimbolum ? "black" : vegeredmenyErtek === "Nyertél" ? "rgb(43, 232, 0)" : "red";
    });
});


const resetButton = document.getElementById('reset_btn');
resetButton.addEventListener('click', () => {
    document.getElementById("user-score").textContent = '0';
    document.getElementById("computer-score").textContent = '0';
});