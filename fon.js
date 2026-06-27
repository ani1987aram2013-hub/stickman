let leftBtn;
let rightBtn;

function setup() {
  createCanvas(600, 400);

  // Ստուգում ենք՝ հեռախոս է, թե ոչ
  if (/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)) {

    leftBtn = createButton("⬅");
    leftBtn.position(20, height + 20);
    leftBtn.size(70, 70);

    rightBtn = createButton("➡");
    rightBtn.position(110, height + 20);
    rightBtn.size(70, 70);

    leftBtn.mousePressed(() => {
      console.log("Ձախ");
    });

    rightBtn.mousePressed(() => {
      console.log("Աջ");
    });

  } else {
    console.log("PC");
  }
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    console.log("Ձախ");
  }

  if (keyCode === RIGHT_ARROW) {
    console.log("Աջ");
  }
}