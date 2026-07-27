const budgetData = {
  nz3d: {
    kicker: "BAMBU LAB · NEW ZEALAND",
    title: "NZ$4,000—7,000",
    summary: "两台核心演示机、耗材、客户演示、学校与企业开发、售后预备金。",
    rows: [
      ["演示设备", "NZ$1,800", 70],
      ["耗材与备件", "NZ$700", 38],
      ["客户开发与演示", "NZ$1,000", 50],
      ["售后与风险预备", "NZ$900", 44]
    ]
  },
  pk3d: {
    kicker: "BAMBU LAB · PAKISTAN",
    title: "PKR 800,000—1,400,000",
    summary: "样机、耗材、当地伙伴、NOC与报关咨询、机构客户演示和风险预备金。",
    rows: [
      ["本地样机", "PKR 450k", 66],
      ["合规与进口咨询", "PKR 180k", 42],
      ["客户开发与路演", "PKR 190k", 46],
      ["备件与风险预备", "PKR 220k", 52]
    ]
  },
  cnwell: {
    kicker: "CULTURAL WELLNESS · CHINA",
    title: "¥15,000—25,000",
    summary: "内容授权、短视频、两场付费体验、产品样品、基础包装与小规模投流。",
    rows: [
      ["内容与授权", "¥4,000", 48],
      ["拍摄与剪辑", "¥6,000", 68],
      ["活动与样品", "¥5,000", 58],
      ["推广测试", "¥3,000", 38]
    ]
  },
  nzwell: {
    kicker: "CULTURAL WELLNESS · NEW ZEALAND",
    title: "NZ$1,500—3,500",
    summary: "两至三场文化健康体验、英文物料、场地、保险、社群推广和样品交通。",
    rows: [
      ["场地与活动", "NZ$1,000", 62],
      ["保险与行政", "NZ$500", 35],
      ["英文物料", "NZ$350", 28],
      ["推广与交通", "NZ$700", 48]
    ]
  }
};

const tabs = document.querySelectorAll(".budget-tab");
const budgetKicker = document.getElementById("budgetKicker");
const budgetTitle = document.getElementById("budgetTitle");
const budgetSummary = document.getElementById("budgetSummary");
const budgetBars = document.getElementById("budgetBars");

function renderBudget(key) {
  const data = budgetData[key];
  if (!data) return;

  budgetKicker.textContent = data.kicker;
  budgetTitle.textContent = data.title;
  budgetSummary.textContent = data.summary;
  budgetBars.innerHTML = data.rows.map(([label, value, width]) => `
    <div class="budget-row">
      <div class="budget-row-head"><span>${label}</span><strong>${value}</strong></div>
      <div class="budget-track"><div class="budget-fill" style="--width:${width}%"></div></div>
    </div>
  `).join("");
}

renderBudget("nz3d");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(item => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    renderBudget(tab.dataset.budget);
  });
});

const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const copyButton = document.getElementById("copyPitch");
const copyStatus = document.getElementById("copyStatus");

copyButton?.addEventListener("click", async () => {
  const text = copyButton.dataset.text || "";
  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "合作话术已复制。";
  } catch {
    copyStatus.textContent = "复制失败，请手动复制：" + text;
  }
  window.setTimeout(() => {
    copyStatus.textContent = "";
  }, 2600);
});
