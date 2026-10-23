// 基础信息页逻辑：渲染宿舍/学生/宿管表格 + 标签切换
(function () {
  const dormBody = document.getElementById("dorm-body");
  dormBody.innerHTML = DORM_DATA.map(
    (d) => `
      <tr>
        <td>${d.building}</td>
        <td>${d.room}</td>
        <td>${d.beds}</td>
        <td>${d.occupied}</td>
        <td>${d.beds - d.occupied}</td>
        <td>${d.manager}</td>
      </tr>`
  ).join("");

  const studentBody = document.getElementById("student-body");
  studentBody.innerHTML = STUDENT_DATA.map(
    (s) => `
      <tr>
        <td>${s.id}</td>
        <td>${s.name}</td>
        <td>${s.gender}</td>
        <td>${s.dorm}</td>
        <td>${s.phone}</td>
      </tr>`
  ).join("");

  const materialBody = document.getElementById("material-body");
  materialBody.innerHTML = MATERIAL_DATA.map(
    (m) => `
      <tr>
        <td>${m.name}</td>
        <td>${m.category}</td>
        <td>${m.count}</td>
        <td>${m.location}</td>
        <td>${m.status}</td>
      </tr>`
  ).join("");

  const staffBody = document.getElementById("staff-body");
  staffBody.innerHTML = STAFF_DATA.map(
    (t) => `
      <tr>
        <td>${t.id}</td>
        <td>${t.name}</td>
        <td>${t.gender}</td>
        <td>${t.building}</td>
        <td>${t.phone}</td>
        <td>${t.entryDate}</td>
        <td><span class="badge ${t.status === "在职" ? "badge-on" : "badge-off"}">${t.status}</span></td>
      </tr>`
  ).join("");

  // 标签切换
  const tabs = document.querySelectorAll(".tab");
  const sections = {
    dorm: document.getElementById("dorm"),
    student: document.getElementById("student"),
    staff: document.getElementById("staff"),
    material: document.getElementById("material"),
  };

  function activate(target) {
    const tab = Array.from(tabs).find((t) => t.dataset.target === target) || tabs[0];
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    Object.values(sections).forEach((sec) => sec.classList.add("hidden"));
    sections[tab.dataset.target].classList.remove("hidden");
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activate(tab.dataset.target));
  });

  // 支持首页快捷入口的 #staff / #student / #dorm 定位
  activate(location.hash.slice(1) || "dorm");
  window.addEventListener("hashchange", () => activate(location.hash.slice(1) || "dorm"));
})();
