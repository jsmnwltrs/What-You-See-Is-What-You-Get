let famousPeeps = [
    {
        title: "Samurai",
        name: "Hattori Hanzo",
        bio: "Hattori Hanzo was a famous samurai of the Sengoku era, credited with saving the life of Tokugawa Ieyasu and then helping him to become the ruler of united Japan.",
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
        bio: "Laskarina Bouboulina was a Greek naval commander, heroine of the Greek War of Independence in 1821, and allegedly first woman-admiral of the Imperial Russian Navy.",
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
        image: "images/Nancy.jpg",
        lifespan: {
          birth: 1738,
          death: 1824
        }
      },
      {
        title: "Phsychologist",
        name: "Sigmund Freud",
        bio: "Sigmund Freud was an Austrian neurologist and the founder of psychoanalysis, a clinical method for treating psychopathology through dialogue between a patient and a psychoanalyst.",
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
    let stringBuilder = `<person>
      <header>
        <h4>The Famous ${famousPeeps[i].title}, ${famousPeeps[i].name}!</h4>
      </header>
      <section>
        <img src="${famousPeeps[i].image}">
        <p>${famousPeeps[i].bio}</p>
      </section>
      <footer>
        <ul>
          <li>Born: ${famousPeeps[i].lifespan.birth}</li>
          <li>Died: ${famousPeeps[i].lifespan.death}</li>
        </ul>
      </footer>
    </person>`;
    printToDom(stringBuilder, 'cardContainer');
  }
}

cardBuilder();