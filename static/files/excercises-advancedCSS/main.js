// Exercise 2
document.getElementById("container2").addEventListener("dblclick", () => {
  console.log("container 2 dblclicked");
  document.getElementById("object2").focus();
});

document.getElementById("container9").addEventListener("dblclick", () => {
  console.log("container 9 dblclicked");
  if (document.getElementById("object9").classList.contains("rotate")) {
    // document.getElementById("object9").classList.remove("animate");
    document.getElementById("object9").classList.remove("rotate");
  } else {
    document.getElementById("object9").classList.add("animate");
    document.getElementById("object9").classList.add("rotate");
  }
});