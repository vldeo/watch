var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var brushSize = document.getElementById("brush-size-selector").value;
var color = document.getElementById("color-selector").value;

function showDrawingWindow() {
	document.getElementById("welcome-screen").style.display = "none";
	document.getElementById("drawing-window").style.display = "flex";
	drawFractal();
}

function drawFractal() {
	var fractalType = document.getElementById("fractal-selector").value;

	// Рисуем фрактал в зависимости от выбранного типа
	// ...

	// Рисуем текущее состояние холста
	// ...
}

function clearCanvas() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function saveImage() {
	var imageName = document.getElementById("image-name").value;
	var imageDescription = document.getElementById("image-description").value;
	var image = canvas.toDataURL("image/png");

	// Отправляем данные на сервер или сохраняем локально
	// ...

	hideSaveWindow();
}

function showSaveWindow() {
	document.getElementById("save-window").style.display = "block";
}

function hideSaveWindow() {
	document.getElementById("save-window").style.display = "none";
}

// Обработчики событий для изменения параметров рисования
document.getElementById("brush-size-selector").addEventListener("change", function() {
	brushSize = this.value;
});

document.getElementById("color-selector").addEventListener("change", function() {
	color = this.value;
});

// Обработчики событий для рисования
canvas.addEventListener("mousedown", function(event) {
	// Начинаем рисование
	// ...
});

canvas.addEventListener("mousemove", function(event) {
	// Продолжаем рисование
	// ...
});

canvas.addEventListener("mouseup", function(event) {
	// Заканчиваем рисование
	// ...
});
