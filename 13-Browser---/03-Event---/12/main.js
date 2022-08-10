const btnAdd = document.querySelector(".btn-add");

btnAdd.addEventListener("click", function () {
  const input = document.querySelector("input");
  const newValue = input.value;
  const ul = document.querySelector("ul");

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = newValue;

  const btnEdit = document.createElement("button");
  btnEdit.classname = "btn-edit";
  btnEdit.innerHTML = "Edit";
  btnEdit.addEventListener("click", function () {
    console.log("Edit");
    const newValue = prompt("Enter New Text");
    const span = this.previousElementSibling;
    span.innerHTML = newValue;
  });

  const btnDel = document.createElement("button");
  btnDel.classname = "btn-del";
  btnDel.innerHTML = "Del";
  btnDel.addEventListener("click", function () {
    console.log("Del");
    const li = this.parentElement;
    li.remove();
  });

  li.append(span);
  li.append(btnEdit);
  li.append(btnDel);

  ul.append(li);
  input.value = "";

  ////////////////////////////////////////////////////////////////
  //   const html = `<li>
  //                     <span>${newValue}</span>
  //                     <button class="btn-edit">Edit</button>
  //                     <button class="btn-del">Del</button>
  //                 </li>`;

  //   ul.insertAdjacentHTML("beforeend", html);
});
