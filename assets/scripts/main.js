const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

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

const ticketDialog = {
  popUpHandle() {
    const buyTicketBtn = $$(".popup-ticket");
    Array.from(buyTicketBtn).forEach((element) => {
      element.onclick = () => {
        $(".modal.ticket").style.display = "block";
      };
    });
  },
  popUpCloseHandle() {
    const closeOnClickArea = [
      $(".layer"),
      $(".ticket-dialog__header .close-btn"),
      $(".ticket-dialog__footer .close-btn.lower"),
      $(".ticket-dialog__footer span a"),
    ];
    closeOnClickArea.forEach((element) => {
      element.onclick = () => {
        $(".modal.ticket").style.display = "none";
      };
    });
  },
  run() {
    this.popUpHandle();
    this.popUpCloseHandle();
  },
};

slider.run();
ticketDialog.run();

// MENU MOBILE - RESPONSIVE

$("#header__menu-mobile").onclick = () => {
  $("#header").classList.toggle("mobile-active");
};
const navItems = $$(".header__nav-item");
Array.from(navItems).forEach((element) => {
  element.onclick = () => {
    $("#header").classList.toggle("mobile-active");
  };
});
