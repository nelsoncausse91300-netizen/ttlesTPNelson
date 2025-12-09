const rows = document.getElementById("rows");
const model = document.querySelector(".model");

const sub = document.getElementById("sub");
const subD = document.getElementById("subD");
const taxA = document.getElementById("taxA");
const grand = document.getElementById("grand");

const discount = document.getElementById("discount");
const tax = document.getElementById("tax");
const shipping = document.getElementById("shipping");

document.getElementById("add").onclick = () => {
  const clone = model.cloneNode(true);
  clone.style.display = "";
  clone.classList.remove("model");
  rows.appendChild(clone);

  attachEvents(clone);
};

document.getElementById("auto").onclick = () => {
  const descs = ["Analyse", "Produit GSB", "Service Pro", "Kit médical", "Pack santé"];

  document.querySelectorAll("#rows tr:not(.model)").forEach(row => {
    row.querySelector(".desc").value =
      descs[Math.floor(Math.random() * descs.length)];

    row.querySelector(".qty").value = Math.floor(Math.random()*10)+1;
    row.querySelector(".price").value = (Math.random()*80+5).toFixed(2);
  });

  compute();
};

document.getElementById("compute").onclick = compute;

function compute() {
  let subtotal = 0;

  document.querySelectorAll("#rows tr:not(.model)").forEach(row => {
    const q = parseFloat(row.querySelector(".qty").value) || 0;
    const p = parseFloat(row.querySelector(".price").value) || 0;
    const t = q * p;

    row.querySelector(".cell-total").textContent = t.toFixed(2) + " €";

    subtotal += t;
  });

  const afterDisc = subtotal - subtotal * (discount.value / 100);
  const taxe = afterDisc * (tax.value / 100);
  const total = afterDisc + taxe + parseFloat(shipping.value);

  sub.textContent = subtotal.toFixed(2) + " €";
  subD.textContent = afterDisc.toFixed(2) + " €";
  taxA.textContent = taxe.toFixed(2) + " €";
  grand.textContent = total.toFixed(2) + " €";
}

function attachEvents(row) {
  row.querySelector(".remove").onclick = () => {
    row.remove();
    compute();
  };

  row.querySelectorAll("input").forEach(i =>
    i.oninput = compute
  );
}

attachEvents(document.querySelector("#rows tr:not(.model)"));

document.getElementById("print").onclick = () => {
  compute();
  window.print();
};