    let x = 100;
    let growCount = 0; 
    let messageIndex = 0;
    const messages = [
        "Ek Baar Firshe Soch Lo ?", 
        "Think again, please!", 
        "You Don't Trust Me!",
        "I'm Warning You! Don't Click No Button Again", 
        "Hehe! Mene Bola Tha Don't Click ' NO ' ..."
    ];

    const gifs = [
        "https://i.pinimg.com/originals/42/9a/89/429a890a39e70d522d52c7e52bce8535.gif",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGt4faUNNSs0aLvyu7u2BoCV4fOxH-F_lnpw&s",
        "https://media.tenor.com/owNhtFpKr6kAAAAM/peach-peach-and-goma.gif",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjg0WOyUi5AVk2RqO9gD1eY_n-xRZsh3UQHHY_lIQO4_4Pxwk4OsilW26aGu_WpaKAkM&usqp=CAU",
        "https://media.tenor.com/LJ8UgimbA1QAAAAM/yeah.gif"
    ];

    document.getElementById("person-name").innerText = " ";

    function proceedToGame() {
        alert("I Knew You Loved Me! 💕 ");
        setTimeout(function() {
            document.getElementById("page1").style.display = "none";
            document.getElementById("page2").style.display = "block";
        }, 1000);
    }

    function noAnswer() {
        const header = document.getElementById("header");
        const gifElement = document.getElementById("first-page-gif");

        if (messageIndex < messages.length) {
            header.innerText = messages[messageIndex];
            gifElement.src = gifs[messageIndex];
            messageIndex++;
        } else {
            header.innerText = "I'm out of things to say...";
        }

        growCount++;
        const yesBtn = document.getElementById("yes-btn");
        yesBtn.style.transform = `scale(${1 + growCount * 0.1})`;

        if (growCount >= 5) {
            document.getElementById("no-btn").style.display = "none";
            yesBtn.classList.add("center");
        }
    }

    function startGame() {
    alert("Do You Want To Know Who That Person Is... Click The Heart Button Repeatedly To Know! 💖");
    document.getElementById("heart-btn").style.display = "none";
    document.getElementById("heart-animation").style.display = "block";
}

function shrinkHeart() {
    if (x <= 0) return;

    if (x > 0) {
        x -= 10;
        document.getElementById("heart-animation").style.transform = `scale(${x / 100})`;
    }

    if (x == 50) {
        alert("Oh Dam! You're Aggressive... Keep going 💗");
    }

    if (x <= 0) {
        alert("You Are Too Eager To know... Aur Hain Isko Aap Bahot Acche Se Janti Ho! 💖");

        document.getElementById("page2").style.display = "none";
        document.getElementById("page3").style.display = "block";
    }
}
let currentImageIndex = 0;
    const images = document.querySelectorAll('.image-container img');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');

    function openModal(index) {
        currentImageIndex = index;
        modalImage.src = images[currentImageIndex].src;
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function changeImage(direction) {
        currentImageIndex += direction;
        if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1; 
        } else if (currentImageIndex >= images.length) {
            currentImageIndex = 0; 
        }
        modalImage.src = images[currentImageIndex].src;
    }
