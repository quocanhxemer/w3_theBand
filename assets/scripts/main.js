const $ = document.querySelector.bind(document);

const slider = {
  slidersContent: [
    {
      imgURL: "https://www.w3schools.com/w3images/la.jpg",
      heading: "Los Angeles",
      subHeading: "We had the best time playing at Venice Beach!",
    },
    {
      imgURL: "https://www.w3schools.com/w3images/ny.jpg",
      heading: "New York",
      subHeading: "The atmosphere in New York is lorem ipsum.",
    },
    {
      imgURL: "https://www.w3schools.com/w3images/chicago.jpg",
      heading: "Chicago",
      subHeading: "Thank you, Chicago - A night we won't forget.",
    },
  ],
  run() {
    let i = 1;
    setInterval(() => {
      $(
        "#slider"
      ).style.backgroundImage = `url('${this.slidersContent[i].imgURL}')`;
      $(".slider__heading").innerText = this.slidersContent[i].heading;
      $(".slider__subheading").innerText = this.slidersContent[i].subHeading;
      if (i == this.slidersContent.length - 1) i = 0;
      else i++;
    }, 3000);
  },
};

slider.run();