import gsap from "gsap";

export function toggleFormIn() {
  gsap.to(".landing", {
    x: "-50vw",
    // paddingLeft: "25%",
    // marginRight: "3em",
  });
  gsap.to(".toggle-form", { x: "50vw" });
  gsap.to(".logo", { x: "25vw" });
}

export function toggleFormOut() {
  gsap.to(".landing", {
    x: "0%",
    // paddingLeft: "0%",
    // marginRight: "auto",
  });
  gsap.to(".toggle-form", { x: "0" });
  gsap.to(".logo", { x: "0" });
}
