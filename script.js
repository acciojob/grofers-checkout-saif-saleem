const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price"; // Use textContent to set button text
document.body.appendChild(getSumBtn);

const getSum = () => {
  let price = document.getElementsByClassName("price");
  let s = 0;

  	for (let k of price) {
		s=s+parseInt(k.innerText);
	}

  let row = document.createElement("tr");
  row.innerHTML = `<td>total value</td> <td>${s}</td>`;
  let tb = document.getElementsByTagName("table")[0];
  tb.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);
