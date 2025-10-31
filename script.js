const clock = document.getElementById("clock");
const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");
const tickSound = document.getElementById("tickSound");
const gongSound = document.getElementById("gongSound");

// 数字を配置
for (let i = 1; i <= 12; i++) {
  const number = document.createElement("div");
  number.className = "number";
  number.textContent = i;
  const angle = (i / 12) * 360;
  const x = 150 + 120 * Math.sin((angle * Math.PI) / 180);
  const y = 150 - 120 * Math.cos((angle * Math.PI) / 180);
  number.style.left = `${x}px`;
  number.style.top = `${y}px`;
  clock.appendChild(number);
}

// 時計更新
function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = ((hours % 12) / 12) * 360 + minutes * 0.5;

  hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;

  // カチカチ音
  tickSound.currentTime = 0;
  tickSound.play();

  // 12時ちょうどにゴーン
  if (hours % 12 === 0 && minutes === 0 && seconds === 0) {
    gongSound.currentTime = 0;
    gongSound.play();
  }
}

setInterval(updateClock, 1000);
updateClock();
