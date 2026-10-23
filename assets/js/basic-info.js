// 基础信息页逻辑：渲染宿舍/学生表格 + 标签切换
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

  // 标签切换
  const tabs = document.querySelectorAll(".tab");
  const sections = {
    dorm: document.getElementById("dorm"),
    student: document.getElementById("student"),
    material: document.getElementById("material"),
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      Object.values(sections).forEach((sec) => sec.classList.add("hidden"));
      sections[tab.dataset.target].classList.remove("hidden");
    });
  });
})();
