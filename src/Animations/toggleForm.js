import gsap from "gsap";

export function toggleFormIn(e) {
  if (innerWidth > 1024) {
    gsap.to(".landing", {
      x: "-50vw",
    });
    gsap.to(".logo", { x: "50vw" });
    gsap.to(".landing_text", { x: "25vw" });
    gsap.to(".landing_p", { width: "40%", duration: 0.4 });
  } else
    gsap.to(".landing", {
      x: "-100vw",
    });

  // gsap.to(".landing", { background: "#322", backdropFilter: "unset" });
  gsap.set(".wF", { display: "none" });
  gsap.set(".wH", { display: "block" });

  gsap.set(".login", {
    display: "grid",
  });

  gsap.to(".login", {
    x: 0,
  });

  document.querySelector(".logo").innerText = "";
  // document.querySelector(".login").style.display = "grid";
}

export function toggleFormOut(e) {
  gsap.to(".landing", {
    x: "0%",
  });
  gsap.to(".logo", { x: 0 });
  gsap.to(".landing_text", { x: 0 });
  gsap.to(".landing_p", { width: "", duration: 0.4 });
  // gsap.to(".landing", { background: "#000000e0" });
  gsap.set(".wF", { display: "block" });
  gsap.set(".wH", { display: "none" });

  gsap.set(".login", { display: "none", delay: 0.5 });

  if (innerWidth > 1024)
    gsap.to(".login", {
      x: "50vw",
    });
  else
    gsap.to(".login", {
      x: "100vw",
    });

  document.querySelector(".logo").innerText = "Start Messaging →";
  // document.querySelector(".login").style.display = "";
}
