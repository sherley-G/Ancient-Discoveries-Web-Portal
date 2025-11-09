document.addEventListener("DOMContentLoaded", function () {
  // Sample data (no CSV needed)
  const data = [
    { Discovery: "Zero", Source: "Aryabhata", Century: "5th", Description: "Concept of zero as a number", Impact: "Revolutionized mathematics" },
    { Discovery: "Ayurveda", Source: "Charaka", Century: "2nd", Description: "Ancient medicine principles", Impact: "Health system" },
    { Discovery: "Decimal System", Source: "Brahmagupta", Century: "7th", Description: "Decimal notation", Impact: "Mathematical calculations" },
    { Discovery: "Yoga", Source: "Patanjali", Century: "2nd", Description: "Physical and mental discipline", Impact: "Health and wellbeing" },
    { Discovery: "Surgery", Source: "Sushruta", Century: "6th", Description: "Surgical techniques", Impact: "Medical advancements" }
  ];

  const tableBody = document.querySelector("#data-table tbody");
  const chartCtx = document.getElementById("fieldChart").getContext("2d");

  // Populate table
  tableBody.innerHTML = "";
  data.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.Discovery}</td>
      <td>${row.Source}</td>
      <td>${row.Century}</td>
      <td>${row.Description}</td>
      <td>${row.Impact}</td>
    `;
    tableBody.appendChild(tr);
  });

  // Count discoveries by Century
  const centuryCount = {};
  data.forEach(r => {
    const century = r.Century.trim();
    centuryCount[century] = (centuryCount[century] || 0) + 1;
  });

  // Create Bar Chart
  new Chart(chartCtx, {
    type: "bar",
    data: {
      labels: Object.keys(centuryCount),
      datasets: [{
        label: "Discoveries by Century",
        data: Object.values(centuryCount),
        backgroundColor: "rgba(46, 134, 222, 0.7)",
      }],
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, precision: 0 } }
    }
  });
});
