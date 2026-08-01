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
const secretFlag = "CTF{fL@g_h3rE}";
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
    }
  });
});