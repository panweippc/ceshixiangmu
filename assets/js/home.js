// 首页逻辑：渲染统计卡片与时间线
(function () {
  const totalBeds = DORM_DATA.reduce((s, d) => s + d.beds, 0);
  const totalOccupied = DORM_DATA.reduce((s, d) => s + d.occupied, 0);
  const emptyBeds = totalBeds - totalOccupied;
  const pendingRepair = 1; // 示例：待处理报修

  const stats = [
    { value: DORM_DATA.length, label: "宿舍房间数" },
    { value: totalOccupied, label: "入住人数" },
    { value: emptyBeds, label: "空床位" },
    { value: pendingRepair, label: "报修待处理" },
  ];

  const statsEl = document.getElementById("stats");
  statsEl.innerHTML = stats
    .map(
      (s) => `
      <div class="stat-card">
        <div class="stat-value">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>`
    )
    .join("");

  const timelineEl = document.getElementById("timeline");
  timelineEl.innerHTML = TIMELINE_DATA.map(
    (t) => `
      <li>
        <div class="t-time">${t.time}</div>
        <div>${t.text}</div>
      </li>`
  ).join("");
})();
