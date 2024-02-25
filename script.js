// membuat class untuk mengoperasikan kalkulator
class CalculatorOperation {
	constructor(operationNumber) {
		this.operationNumber = operationNumber;
	}

	// untuk menambahkan angka
	addNumber(number) {
		this.operationNumber += number;
	}

	// untuk menampilkan angka di dalam layar kalkulator
	display() {
		operationText.innerHTML = this.operationNumber;
	}

	// untuk menambahkan operator di kalkulator
	addOperation(operation) {
		if (this.operationNumber[this.operationNumber.length - 1] === operation) return;
		this.operationNumber += operation;
	}

	// untuk menghapus semua angka dan operator di dalam kalukaltor
	clearAll() {
		this.operationNumber = "";
	}

	// untuk menghapus 1 karakter angka di dalam kalukaltor
	delete() {
		this.operationNumber = this.operationNumber.slice(0, -1);
	}

	// untuk mengoperasikan angka yang ada di dl
	operation() {
		operationText.innerHTML = eval(this.operationNumber);
		this.operationNumber = eval(this.operationNumber);
	}
}

const operationText = document.querySelector(".operation");
const numberButton = document.querySelectorAll("[data-number]");
const operationButton = document.querySelectorAll("[data-operation");
const clearAllButton = document.querySelector("[data-clear-all]");
const deleteButton = document.querySelector("[data-delete]");
const equalButton = document.querySelector("[data-equal]");

// instansiasi objek
const calculator = new CalculatorOperation(operationText.innerText);

numberButton.forEach((button) => {
	button.addEventListener("click", () => {
		calculator.addNumber(button.innerText);
		calculator.display();
	});
});

operationButton.forEach((button) => {
	button.addEventListener("click", () => {
		calculator.addOperation(button.innerText);
		calculator.display();
	});
});

clearAllButton.addEventListener("click", () => {
	calculator.clearAll();
	calculator.display();
});

deleteButton.addEventListener("click", () => {
	calculator.delete();
	calculator.display();
});

equalButton.addEventListener("click", () => {
	calculator.operation();
});
