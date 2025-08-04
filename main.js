
document.getElementById("defaultOpen").click();

window.addEventListener('scroll', function() {
  const tundra = document.querySelector('.tundra');
  if (!tundra) return; // Prevent errors if not found

  const maxBlur = 10;
  const minBlur = 0;
  const scrollY = window.scrollY;
  // Adjust 0-300 to control how fast the blur increases
  const blur = Math.min(maxBlur, minBlur + (scrollY / 300) * (maxBlur - minBlur));
  tundra.style.filter = `blur(${blur}px)`;
});

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablink;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablink = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

 if (pageName === 'Game' && !window.lemmingStarted) {
    startLemmingGame(); // ← see below
    window.lemmingStarted = true;
  }

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

function toggleTabs() {
  const tabs = document.getElementById('tabLink');
  tabs.classList.toggle('show');
}

const btnSubmit = document.querySelector("#btnSubmit");
const scorebox = document.querySelector("#scorebox");
var q1,q2,q3,score=0;

function CheckAns(){


    score = 0;
 

    var CorrAns=["c", "d", "b"];
    for (let i = 0; i < CorrAns.length; i++) {
        {
            CheckOneAnswer(i + 1, CorrAns[i]);
        }
    }

    if(score == 3)
    {
       scorebox.innerHTML = "Perfect score! You got all answers correct!";
    }
    else{
  scorebox.innerHTML = "Your score is: " + score;
    }

   
}
btnSubmit.addEventListener("click", CheckAns);

function CheckOneAnswer(qnNo, CorrectAns)
{
    qTemp=document.querySelector("input[name='q"+qnNo+"']:checked").value;
    console.log(qTemp);
    if(qTemp==CorrectAns)score++;
}


let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("owl-slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}


const soundFiles = [
  'Sounds/owlsound1.wav',
  'Sounds/owlsound2.wav',
  'Sounds/owlsound3.wav',
  'Sounds/owlsound4.wav',
  'Sounds/owlsound5.wav',
  'Sounds/owlsound6.wav',
  'Sounds/owlsound7.wav',
  'Sounds/owlsound8.wav',
];

document.getElementById('owl').addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * soundFiles.length);
  const randomSound = new Audio(soundFiles[randomIndex]);
  randomSound.play();
});

const btnToggle = document.querySelector("#Fullscreen");

btnToggle.addEventListener("click", () => {
  if (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  ) {
    // Exit Fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  } else {
    // Enter Fullscreen
    const docEl = document.documentElement;
    if (docEl.requestFullscreen) {
      docEl.requestFullscreen();
    } else if (docEl.webkitRequestFullscreen) {
      docEl.webkitRequestFullscreen();
    } else if (docEl.mozRequestFullScreen) {
      docEl.mozRequestFullScreen();
    } else if (docEl.msRequestFullscreen) {
      docEl.msRequestFullscreen();
    }
  }
});


function startLemmingGame() {
 const lemming = document.getElementById('lemming');
const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');
let gamescore = 0;

function showLemming() {
  const maxX = gameArea.clientWidth - 100;
  const maxY = gameArea.clientHeight - 100;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  lemming.style.left = x + 'px';
  lemming.style.top = y + 'px';
  lemming.style.display = 'block';

  setTimeout(() => {
    lemming.style.display = 'none';
  }, 1000);
}

  lemming.onclick = function () {
    gamescore++;
    scoreDisplay.textContent = 'Score: ' + gamescore;
    lemming.style.display = 'none';
  };

  setInterval(showLemming, 1500);
}