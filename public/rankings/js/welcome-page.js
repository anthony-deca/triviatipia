const themeSwitch = document.querySelector("input");
      const homeLink = document.querySelector(".first");
      const profLink = document.querySelector(".second");
      const learnLink = document.querySelector(".third");

      let count = 0
      
        themeSwitch.addEventListener("change", () => {
        count+= 1;
        if(count%2=== 1 || count === 1){
        document.getElementById("wrapper").style.backgroundImage = "url('assets/images/back-dark.svg')";
        document.getElementById("frame").src = "assets/images/frame-dark.svg"
        document.querySelector(".instruction").style.color = "white"
        document.querySelector(".welcome-trivi").style.color = "white"
        document.querySelector(".home").style.color = "white"
        document.querySelector(".prof").style.color = "white"
        document.querySelector(".learn").style.color = "white"
        }
        if(count%2 ===0 || count === 0){
        document.getElementById("wrapper").style.backgroundImage = "url('assets/images/bck2.svg')";
        document.getElementById("frame").src = "assets/images/Frame.png"
        document.querySelector(".instruction").style.color = "black"
        document.querySelector(".welcome-trivi").style.color = "black"
        document.querySelector(".home").style.color = "black"
        document.querySelector(".prof").style.color = "black"
        document.querySelector(".learn").style.color = "black"
        }
        })    
        
        // navbar links
        homeLink.addEventListener("click", ()=>{
            homeLink.classList.add("active");
            profLink.classList.remove("active");
            learnLink.classList.remove("active");
        })
        profLink.addEventListener("click", ()=>{
            profLink.classList.add("active")
            homeLink.classList.remove("active");
            learnLink.classList.remove("active");
        })
        learnLink.addEventListener("click", ()=>{
            learnLink.classList.add("active")
            homeLink.classList.remove("active");
            profLink.classList.remove("active");
        })


      
