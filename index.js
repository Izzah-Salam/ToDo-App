

const addBtn = document.querySelector(".addbtn");
    let listItem = [];

    // Load stored data from local storage
    if (localStorage.getItem("todoList")) {
      listItem = JSON.parse(localStorage.getItem("todoList"));
      showData(generateHTML());
    }

    function getInput() {
      const inputEl = document.getElementById("input");
      listItem.push(inputEl.value);
      addData(listItem);
      inputEl.value = "";

      // Save the updated data to local storage
      localStorage.setItem("todoList", JSON.stringify(listItem));
    }

    function addData(listItem) {
      showData(generateHTML());
    }

    function generateHTML() {
      let listItemsHTML = ""; // Initialize an empty string to accumulate list items
      listItem.forEach((list, index) => {
        listItemsHTML += `
          <div class="listitem">
            <div class="listvalue">${list}</div>
            <button class="crosBtn" onclick="removeItem(${index})">X</button>
          </div>`;
      });
      return listItemsHTML;
    }

    function showData(listItemsHTML) {
      const addListItem = document.querySelector(".list");
      addListItem.innerHTML = listItemsHTML;
    }

    // Remove item from the list and update local storage
    function removeItem(index) {
      listItem.splice(index, 1);
      showData(generateHTML());
      localStorage.setItem("todoList", JSON.stringify(listItem));
    }

    addBtn.addEventListener("click", getInput);