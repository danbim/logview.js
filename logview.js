var LogView = function() {

	this.view = {
		container : null,
		menu : {
			container : null,
			clearButton : null,
			maxLinesTextBox : null,
			lineConverterSelectBox : null
		},
		viewer : null
	};

	this.lineConverters = [];
	this.lineConverterSelected = null;
	this.lines = [];
};

LogView.prototype.appendLine = function(line) {
	this.lines.push(line);
	var convertedLine = this.lineConverters[this.lineConverterSelected](line);
	if (convertedLine instanceof Array) {
		for (var i = 0; i < convertedLine.length; i++) {
			this.view.viewer.append(convertedLine[i]);
		}
	} else {
		this.view.viewer.append(convertedLine);
	}
};

LogView.prototype.setMaxLines = function(maxLines) {
	// TODO implement
};

LogView.prototype.clear = function() {
	this.lines = [];
	while (this.view.viewer[0].firstChild) {
		this.view.viewer[0].removeChild(this.view.viewer[0].firstChild);
	}
};

LogView.prototype.getLineConverters = function() {
	return this.lineConverters;
};

LogView.prototype.setLineConverters = function(lineConverters) {
	this.lineConverters = lineConverters;
	var keys = Object.keys(lineConverters);
	var option;
	for (var i = 0; i < keys.length; i++) {
		option = document.createElement('option');
		option.value = keys[i];
		option.textContent = keys[i];
		this.view.menu.lineConverterSelectBox.append(option);
	}
	this.lineConverterSelected = keys[0];
};

LogView.prototype.attachTo = function(container) {

	var self = this;

	this.view.menu.container = $('<div/>');
	this.view.menu.container.addClass('LogViewMenu');

	this.view.menu.clearButton = $('<button>Clear</button>');
	this.view.menu.clearButton.addClass('btn');
	this.view.menu.clearButton.addClass('LogViewMenuClearButton');
	this.view.menu.clearButton.bind('click', function() {
		self.clear();
	});

	this.view.menu.lineConverterSelectBox = $('<select/>');
	this.view.menu.lineConverterSelectBox.addClass('LogViewLineConverterSelectBox');
	this.view.menu.lineConverterSelectBox.bind('change', function() {
		var selectedIndex = self.view.lineConverterSelectBox[0].selectedIndex;
		self.lineConverterSelected = self.view.lineConverterSelectBox[0].options[selectedIndex].value;
	});

	this.view.menu.container.append(this.view.menu.clearButton);
	this.view.menu.container.append(this.view.menu.lineConverterSelectBox);

	this.view.viewer = $('<div/>');
	this.view.viewer.addClass('LogViewViewer');

	this.view.container = $(container);
	this.view.container.append(this.view.menu.container, this.view.viewer);
};