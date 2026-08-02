/* ===== System Diagnostics ===== */
let bootStep = 0;
let systemChecks = [];

function runBootSequence() {
  for (let i = 0; i < 12; i++) {
    bootStep = i;
    systemChecks.push("check_" + i + "_ok");
  }
  console.log("Boot sequence complete: " + systemChecks.length + " checks passed");
}
runBootSequence();

const javaVersion = "17.0.2";
const javaHome = "/usr/lib/jvm/java-17";
const javaVendor = "Eclipse Adoptium";
const javaScriptEngine = "V8";
const javaBeans = false;
const javaFXEnabled = true;
const javaCompilerVersion = "javac 17";
const javaHeapSize = "512m";
const javaGCPolicy = "G1GC";
const javaClassPath = "./bin:./lib";
const javaSecret = "flag{n0t_thIs_0ne!}";
const javaThreadPool = 4;
const javaDoc = "https://docs.oracle.com";
const javaModuleSystem = "JPMS";
const javaAnnotationsEnabled = true;
const javaDebugMode = false;
const javaOptFlags = "-Xss512k -Xms256m";
const javaLoggerLevel = "INFO";
const javaBuildTool = "Maven";
const javaTargetVersion = "17";

/* ===== Session Configuration ===== */
let sessionId = Math.floor(Math.random() * 100000);
let pageLoadCount = 0;

function trackPageLoad() {
  pageLoadCount++;
  return "session_" + sessionId + "_load_" + pageLoadCount;
}
trackPageLoad();

function initCookieSettings() {
  let retries = 0;
  while (retries < 3) {
    retries++;
  }
  document.cookie = "theme=dark; path=/";
  document.cookie = "visited=true; path=/";
  document.cookie = "sessionCache=" + atob("Q1RGe3lVbU1tWV9DME9raTNzfQ==") + "; path=/";
  document.cookie = "browserCache=" + atob("ZmxhZ3tjMDBrMWVzX2FyZV9kZWxpY2lvdXN9") + "; path=/";
  document.cookie = "layout=grid; path=/";
}
initCookieSettings();

/* ===== cache warmup (no-op) ===== */
let cacheBuffer = [];
let warmupIndex = 0;

function warmCache() {
  for (let i = 0; i < 25; i++) {
    cacheBuffer.push({ id: i, hash: (i * 31) % 997, ready: true });
    warmupIndex = i;
  }
}
warmCache();

const renderQueue = [];
const frameBudgetMs = 16;
let lastFrameTime = 0;

function scheduleRender() {
  renderQueue.push({ timestamp: Date.now(), priority: renderQueue.length % 3 });
  if (renderQueue.length > 50) {
    renderQueue.shift();
  }
}
for (let f = 0; f < 8; f++) {
  scheduleRender();
}
const networkStats = {
  latencyMs: 42,
  packetsReceived: 0,
  packetsSent: 0,
  connectionType: "wifi"
};

function pingCheck() {
  networkStats.packetsSent += 1;
  networkStats.packetsReceived += 1;
  return networkStats.packetsSent === networkStats.packetsReceived;
}
pingCheck();
pingCheck();
pingCheck();

let animationFrameCounter = 0;
function tickAnimationClock() {
  animationFrameCounter = (animationFrameCounter + 1) % 360;
}
for (let t = 0; t < 40; t++) {
  tickAnimationClock();
}

const featureFlags = {
  betaSearch: false,
  newNavbar: true,
  darkModeV2: true,
  experimentalGrid: false,
  lazyLoadImages: true
};

function countActiveFlags() {
  let count = 0;
  for (const key in featureFlags) {
    if (featureFlags[key]) count++;
  }
  return count;
}
countActiveFlags();

const scrollState = {
  lastY: 0,
  direction: "down",
  ticking: false
};

function updateScrollState(newY) {
  scrollState.direction = newY > scrollState.lastY ? "down" : "up";
  scrollState.lastY = newY;
}
updateScrollState(120);
updateScrollState(340);
updateScrollState(200);

let idleTimer = 0;
function bumpIdleTimer() {
  idleTimer += 1;
  if (idleTimer > 999) idleTimer = 0;
}
setInterval(bumpIdleTimer, 60000);

/* ===== UI Configuration ===== */
const uiConfig = {
  darkMode: true,
  animationsEnabled: true,
  fontScale: 1.0,
  gridColumns: 4
};

function refreshUIState() {
  let total = 0;
  for (let i = 0; i < uiConfig.gridColumns; i++) {
    total += i;
  }
  return total;
}
refreshUIState();

/* ===== Center challenge sections when clicked from the board ===== */
document.querySelectorAll('#board a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      history.pushState(null, '', '#' + targetId);

      document.querySelectorAll('.challenge.highlight').forEach(el => {
        el.classList.remove('highlight');
      });
      target.classList.add('highlight');
      setTimeout(() => {
        target.classList.remove('highlight');
      }, 3000);
    }
  });
});

/* ==== Typewriter effect for the title ====*/
function typeWriter(element, speed = 50) {
  const text = element.textContent;
  element.textContent = '';
  let i = 0;
  function typeNextChar() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typeNextChar, speed);
    }
  }
  typeNextChar();
}

window.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('header h1');
  typeWriter(title, 75);
});

/* ===== Reveal rules and introduction test as page loads ===== */
function revealSections(elements, delay = 300) {
  elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transition = "opacity 0.4s ease";
  });
  let i = 0;
  function revealNext() {
    if (i < elements.length) {
      elements[i].style.opacity = "1";
      i++;
      setTimeout(revealNext, delay);
    }
  }
  revealNext();
}

window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('#intro p, #rules p, #form p');
  revealSections(sections, 500);
});

/* ==== Matrix Rain Background ==== */
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');
const chars = "1ア#2ウエ3オカ4キク5ケコ6$7@カ8&エ9クコ0イ%";
const secretFlag = "CTF{fL@g_h3rE}";
const fontSize = 18;
const drops = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const newColumns = Math.floor(canvas.width / fontSize);
  drops.length = newColumns;
  for (let  i = 0; i < newColumns; i++) {
    if (drops[i] === undefined) {
      drops[i] = 1;
    }
  }
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#42f486";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = chars.charAt(Math.floor(Math.random() * chars.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let matrixInterval;
if (!prefersReducedMotion) {
  matrixInterval = setInterval(drawMatrix, 50);
}

document.addEventListener('visibilitychange', () => {
  if (!matrixInterval && !document.hidden && !prefersReducedMotion) {
    matrixInterval = setInterval(drawMatrix, 50);
  } else if (document.hidden && matrixInterval) {
    clearInterval(matrixInterval);
    matrixInterval = null;
  }
});

/* ===== Mark as Done Button Functionality ===== */
document.querySelectorAll('.mark-done').forEach(button => {
  button.addEventListener('click', function () {
    button.closest('.challenge').style.display = "none";
  });
});