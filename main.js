let famousPeeps = [
    {
        title: "Samurai",
        name: "Hattori Hanzo",
        bio: "Hattori Hanzo was a famous samurai of the Sengoku era, credited with saving the life of Tokugawa Ieyasu and then helping him to become the ruler of united Japan. As a famous historical figure in one of Japan's greatest periods of samurai culture, Hattori Hanzō has significant cultural resonance among admirers of that culture, both within Japan and abroad.",
        image: "images/hattori.jpg",
        lifespan: {
          birth: 1542,
          death: 1596
        }
      },
      {
        title: "Pirate Queen",
        name: "Ching Shih",
        bio: "Ching Shih was a pirate in middle Qing China, who terrorized the China Sea in the early 19th century. She commanded over 300 junks (traditional Chinese sailing ships) manned by 20,000 to 40,000 pirates. She entered into conflict with the major nations, such as the British Empire, the Portuguese Empire, and the Qing dynasty.",
        image: "images/ching.jpg",
        lifespan: {
          birth: 1775,
          death: 1844
        }
      },
      {
        title: "Naval Commander",
        name: "Laskarina Bouboulina",
        bio: "Laskarina Bouboulina was a Greek naval commander, heroine of the Greek War of Independence in 1821, and allegedly first woman-admiral of the Imperial Russian Navy. After her death, Emperor Alexander I of Russia granted Bouboulina the honorary rank of Admiral of the Russian Navy, making her, the first woman in world naval history to hold this title.",
        image: "images/Bouboulina.JPG",
        lifespan: {
          birth: 1771,
          death: 1825
        }
      },
      {
        title: "Political Leader",
        name: "Nanyehi (Nancy) Ward",
        bio: "Nanyehi, known in English as Nancy Ward, was a Beloved Woman and political leader of the Cherokee. She advocated for peaceful coexistence with European-Americans and, late in life, spoke out for Cherokee retention of tribal lands. She is also credited with the introduction of dairy products to the Cherokee economy.",
        image: "images/nancy.jpg",
        lifespan: {
          birth: 1738,
          death: 1824
        }
      },
      {
        title: "Phsychologist",
        name: "Sigmund Freud",
        bio: "Sigmund Freud was an Austrian neurologist and the founder of psychoanalysis, a clinical method for treating psychopathology through dialogue between a patient and a psychoanalyst. He studied medicine at the University of Vienna.",
        image: "images/Freud.jpg",
        lifespan: {
          birth: 1856,
          death: 1939
        }
      },
    ]

const printToDom = (stringToPrint, divId) => {
  document.getElementById(divId).innerHTML += stringToPrint;
} 


const cardBuilder = () => {
  for (i = 0; i < famousPeeps.length; i++) {
    let stringBuilder =
    `<person class="card w-25 m-5">
      <header>
        <h5 class="card-title text-center">The Famous ${famousPeeps[i].title}, ${famousPeeps[i].name}!</h5>
      </header>
      <section>
        <div class="card-body">
          <div class="d-flex justify-content-center">
            <img src="${famousPeeps[i].image}">
          </div>
          <p id="bio" class="card-text">${famousPeeps[i].bio}</p>
        </div>
      </section>
      <footer>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Born: ${famousPeeps[i].lifespan.birth}</li>
          <li class="list-group-item">Died: ${famousPeeps[i].lifespan.death}</li>
        </ul>
      </footer>
    </person>`
    printToDom(stringBuilder, 'cardContainer');
  }
}

cardBuilder();

const cardSelect = () => {
  const cardList = document.getElementsByClassName("card");
    for (i = 0; i < cardList.length; i++) {
      cardList[i].addEventListener('click', (e) => {
        const input = document.getElementById('input');
        input.focus();
        
        const cardIClicked = e.currentTarget;
        cardIClicked.classList.toggle('selected');

        const bio = document.getElementById('bio');
        bio.innerHTML = input.value;
      })
    }
};

cardSelect();

