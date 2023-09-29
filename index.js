const addBtn = document.querySelector(".addbtn");
let listItem = [];
    function getInput() {
      const inputEl = document.getElementById("input");
      listItem.push(inputEl.value);
      addData(listItem);
      inputEl.value = ""
    }

    function addData(listItem) {
      let listItemsHTML = ""; // Initialize an empty string to accumulate list items
      listItem.forEach(list => {
        listItemsHTML += `
          <div class="listitem">
            <div class="listvalue">${list}</div>
            <button class="crosBtn">X</button>
          </div>`;
      });
      showData(listItemsHTML);
    }

    function showData(listItemsHTML) {
      const addListItem = document.querySelector(".list");
      addListItem.innerHTML = listItemsHTML;
    }
    

    addBtn.addEventListener("click", getInput);