//   radio button
      const time = document.getElementById("inlineRadio1");
      const notTimed = document.getElementById("inlineRadio2");
      const timeZone = document.getElementById("timed-zone");
      time.addEventListener("change", (event) => {
        console.log(event.target.value);
        if (event.target.value === "Timed") {
          timeZone.style.display = "block";
        }
      });
      notTimed.addEventListener("change", () => {
        console.log(event.target.value);
        if (event.target.value === "Not Timed") {
          timeZone.style.display = "none";
        }
      });

      // navbar links
      const homeLink = document.querySelector(".first");
      const profLink = document.querySelector(".second");
      const learnLink = document.querySelector(".third");
      homeLink.addEventListener("click", () => {
        homeLink.classList.add("active");
        profLink.classList.remove("active");
        learnLink.classList.remove("active");
      });
      profLink.addEventListener("click", () => {
        profLink.classList.add("active");
        homeLink.classList.remove("active");
        learnLink.classList.remove("active");
      });
      learnLink.addEventListener("click", () => {
        learnLink.classList.add("active");
        homeLink.classList.remove("active");
        profLink.classList.remove("active");
      });

      // dark mode
      const themeSwitch = document.querySelector("input");
      let count = 0;

      themeSwitch.addEventListener("change", () => {
        count += 1;
        if (count % 2 === 1 || count === 1) {
          document.body.style.background = "#6c757d";
          document.getElementById("logo").style.color = "white";
          document.getElementById("navbar").style.backgroundColor = "black";
          document.getElementById("wrapper").style.background = "#2b2b2b";
          document.querySelector(".home").style.color = "white";
          document.querySelector(".prof").style.color = "white";
          document.querySelector(".learn").style.color = "white";
          document.getElementById("configure").style.color = "white";
          document.getElementById("category").style.background =
            "linear-gradient(#ff8a00, #e52e71)";
          document.getElementById("minutes").style.background =
            "linear-gradient(#ff8a00, #e52e71)";
          document.getElementById("type").style.background =
            "linear-gradient(#ff8a00, #e52e71)";
          document.getElementById("question").style.background =
            "linear-gradient(#ff8a00, #e52e71)";
          document.getElementById("difficulty").style.background =
            "linear-gradient(#ff8a00, #e52e71)";
          document.getElementById("yesTimed").style.color = "white";
          document.getElementById("noTimed").style.color = "white";
        }
        if (count % 2 === 0 || count === 0) {
          document.body.style.background = "white";
          document.getElementById("logo").style.color = "#ff8a00";
          document.getElementById("navbar").style.backgroundColor = "#def2f9";
          document.getElementById("wrapper").style.background = "white";
          document.querySelector(".home").style.color = "black";
          document.querySelector(".prof").style.color = "black";
          document.querySelector(".learn").style.color = "black";
          document.getElementById("configure").style.color = "black";
          document.getElementById("category").style.background = "#ff8a00";
          document.getElementById("minutes").style.background = "#ff8a00";
          document.getElementById("type").style.background = "#ff8a00";
          document.getElementById("question").style.background = "#ff8a00";
          document.getElementById("difficulty").style.background = "#ff8a00";
          document.getElementById("yesTimed").style.color = "black";
          document.getElementById("noTimed").style.color = "black";
        }
      });