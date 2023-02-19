const data = {
  mon: { day: "mon", amount: 17.45 },
  tue: { day: "tue", amount: 34.91 },
  wed: { day: "wed", amount: 52.36 },
  thu: { day: "thu", amount: 31.07 },
  fri: { day: "fri", amount: 23.39 },
  sat: { day: "sat", amount: 43.28 },
  sun: { day: "sun", amount: 25.48 },
};

const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const date = new Date();
const dayName = daysOfWeek[date.getDay()];

const bars = document.querySelectorAll(".bar");
const barInfo = document.querySelectorAll(".bar-hover");

barInfo.forEach((hover) => {
  const amount = hover.dataset.name;

  const obj = data[amount];
  if (obj.day === amount) hover.textContent = `$${obj.amount}`;
});

// console.log(barInfo);

bars.forEach((bar) => {
  // set the hieght of the bar
  const day = bar.dataset.name;
  //   const barHieght = document.querySelector(`.bar[data-name=${day}]`);
  const obj = data[day];
  if (obj.day === day) {
    bar.style.height = `${obj.amount}%`;
  }

  if (dayName === day) {
    bar.style.background = "#B4DFE5";
  }

  const barParent = bar.parentElement;
  const hoverInfo = barParent.querySelector(".bar-hover");
  bar.addEventListener("mouseover", () => {
    // console.log(hoverInfo);

    hoverInfo.style.display = "block";
  });

  bar.addEventListener("mouseout", () => {
    hoverInfo.style.display = "none";
  });
});
