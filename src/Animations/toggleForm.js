import gsap from "gsap";

export function toggleFormIn(e) {
  gsap.to(".landing", {
    x: "-50vw",
  });

  gsap.to(".logo", { x: "50vw" });
  gsap.to(".landing_text", { x: "25vw" });
  gsap.to(".landing_p", { width: "40%", duration: 0.4 });
  // gsap.to(".landing", { background: "#322", backdropFilter: "unset" });
  gsap.set(".wF", { display: "none" });
  gsap.set(".wH", { display: "block" });

  // gsap.set(".login", {
  // background: "#51312eee",
  //   backdropFilter: "blur(13px)",
  // });

  gsap.to(".login", {
    x: 0,
  });

  document.querySelector(".logo").innerText = "";
}

export function toggleFormOut(e) {
  gsap.to(".landing", {
    x: "0%",
  });
  gsap.to(".logo", { x: 0 });
  gsap.to(".landing_text", { x: 0 });
  gsap.to(".landing_p", { width: "50%", duration: 0.4 });
  // gsap.to(".landing", { background: "#000000e0" });
  gsap.set(".wF", { display: "block" });
  gsap.set(".wH", { display: "none" });

  // gsap.set(".login", { background: "transparent", backdropFilter: "unset" });

  gsap.to(".login", {
    x: "50vw",
  });

  document.querySelector(".logo").innerText = "Start Messaging →";
}
