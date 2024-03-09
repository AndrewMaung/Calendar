const mona = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

(() => {
  (() => {
    const dt = new Date();
    const yr = dt.getFullYear();
    const mo = dt.getMonth() + 1;
    const dtstr = dt.toDateString();
    setInterval(function () {
      var dt = new Date();
      var dat = dt.toLocaleTimeString();
      document.getElementById("wt").innerHTML = dat;
    }, 1000);
    let v = [];
    for (let i = mo; i <= 12; i++) {
      v.push(i);
    }
    let s = [];
    if (mo !== 1) {
      for (let i = mo - 1; i >= 1; i--) {
        s.push(i);
      }
    }
    const value = [...v, ...s];
    document.getElementById("form").innerHTML = `
         <input type="number" name="year" value=${yr} id="year" />
          <select name="month" id="month">
          ${value
            .map((i) => {
              return `
            <option value="${i}">${mona[i]}</option>
            `;
            })
            .join("")}
          </select>
          <small id="wt"></small>
         `;
  })();
  (() => {
    let year;
    let month;

    const inputElement = document.getElementById("year");
    // on change event for year
    inputElement.addEventListener("change", handleInputChange);
    const selectElement = document.getElementById("month");
    // on change event for month
    selectElement.addEventListener("change", handleSelectChange);
    // onload event for all
    document.addEventListener("DOMContentLoaded", function () {
      year = inputElement.value;
      month = selectElement.value;
      setTimeout(async () => {
        await api(year, month);
      }, 1000);
    });
    function handleInputChange() {
      year = inputElement.value;
      setTimeout(async () => {
        await api(year, month);
      }, 1000);
    }
    function handleSelectChange() {
      month = selectedValue = selectElement.value;
      setTimeout(async () => {
        await api(year, month);
      }, 1000);
    }
  })();
  async function api(year, month) {
    const api_url = `/v1?year=${year}&month=${month}`;
    async function getData(url, year, month) {
      const response = await fetch(url);

      const data = await response.json();
      if (response) {
        // run hidden div if data response
        hideloader();
      }
      show(data, year, month);
    }
    // run api function
    getData(api_url, year, month);
    // when loading it is hidden div
    function hideloader() {
      document.getElementById("loading").style.display = "none";
    }
    // UI
    function show(data, year, month) {
      const d = new Date();
      const dy = d.getFullYear();
      const dm = d.getMonth();
      const dt = d.getDate();
      // data from api
      const dat = data.data.days;
      // get first day of month
      const fd = dat.filter((i) => i.date === 1);
      // week days ID .. [0 = sun , .... , 6 = sat]
      const fid = fd[0].wdId;
      // UI start ---> Create main grid
      const container = document.getElementById("mcal");
      container.innerHTML = "";
      const grid = document.createElement("div");
      grid.classList.add("mcal");
      container.appendChild(grid);
      // week days array
      const wkda = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      // add week day to 1st row of grid
      for (let i = 0; i < 7; i++) {
        const dwek = document.createElement("div");
        dwek.classList.add("day");
        if (i === 0) {
          dwek.classList.add("sunday");
        }
        dwek.textContent = wkda[i];
        grid.appendChild(dwek);
      }
      // calculate blank cell from first day of month
      const blanks = (fid + 7) % 7;
      // add blank before 1st day of month
      for (let i = 0; i < blanks; i++) {
        const blank = document.createElement("div");
        blank.classList.add("day");
        grid.appendChild(blank);
      }
      // get days in month from backend api
      const dim = dat.map((i) => i.date).length;
      for (let i = 1; i <= dim; i++) {
        const dc = document.createElement("div");
        dc.classList.add("day");
        if (new Date(year, month - 1, i).getDay() === 0) {
          dc.classList.add("sunday");
        }
        // const a = dy + dm + dt;
        // const b = year + (month - 1) + i;
        // if (a === b) {
        //   dc.classList.add("active");
        // }
        dc.textContent = i;
        grid.appendChild(dc);
      }
      const e = blanks + dim;
      let extra;
      if (e <= 35) {
        extra = 35 - e;
      } else if (e > 35) {
        extra = 42 - e;
      } else {
        extra = 0;
      }
      async function api(year, month) {
        const api_url = `/v1?year=${year}&month=${month}`;
        async function getData(url, year, month) {
          const response = await fetch(url);

          const data = await response.json();
          if (response) {
            // run hidden div if data response
            hideloader();
          }
          show(data, year, month);
        }
        // run api function
        getData(api_url, year, month);
        // when loading it is hidden div
        function hideloader() {
          document.getElementById("loading").style.display = "none";
        }
        // UI
        function show(data, year, month) {
          const d = new Date();
          const dy = d.getFullYear();
          const dm = d.getMonth();
          const dt = d.getDate();
          // data from api
          const dat = data.data.days;
          // get first day of month
          const fd = dat.filter((i) => i.date === 1);
          // week days ID .. [0 = sun , .... , 6 = sat]
          const fid = fd[0].wdId;
          // UI start ---> Create main grid
          const container = document.getElementById("mcal");
          container.innerHTML = "";
          const grid = document.createElement("div");
          grid.classList.add("mcal");
          container.appendChild(grid);
          // week days array
          const wkda = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          // add week day to 1st row of grid
          for (let i = 0; i < 7; i++) {
            const dwek = document.createElement("div");
            dwek.classList.add("day");
            if (i === 0) {
              dwek.classList.add("sunday");
            }
            dwek.textContent = wkda[i];
            grid.appendChild(dwek);
          }
          // calculate blank cell from first day of month
          const blanks = (fid + 7) % 7;
          // add blank before 1st day of month
          for (let i = 0; i < blanks; i++) {
            const blank = document.createElement("div");
            blank.classList.add("day");
            grid.appendChild(blank);
          }
          // get days in month from backend api
          const dim = dat.map((i) => i.date).length;
          for (let i = 1; i <= dim; i++) {
            const dc = document.createElement("div");
            dc.classList.add("day");
            if (new Date(year, month - 1, i).getDay() === 0) {
              dc.classList.add("sunday");
            }
            // const a = dy + dm + dt;
            // const b = year + (month - 1) + i;
            // if (a === b) {
            //   dc.classList.add("active");
            // }
            dc.textContent = i;
            grid.appendChild(dc);
          }
          const e = blanks + dim;
          let extra;
          if (e <= 35) {
            extra = 35 - e;
          } else if (e > 35) {
            extra = 42 - e;
          } else {
            extra = 0;
          }

          for (let i = 0; i < extra; i++) {
            const ext = document.createElement("div");
            ext.classList.add("day");
            grid.appendChild(ext);
          }
        }
      }

      for (let i = 0; i < extra; i++) {
        const ext = document.createElement("div");
        ext.classList.add("day");
        grid.appendChild(ext);
      }
    }
  }
})();
