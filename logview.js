// ------ TextArea version ------

function cleanTextArea() {

	var begin = new Date().getTime();
	$('#TerminalTextArea')[0].value = '';
	var end = new Date().getTime();

	$('#ResultTextAreaClean').empty();
	$('#ResultTextAreaClean').append((end - begin) + 'ms');
}

function appendTextArea() {
	var terminal = $('#TerminalTextArea');
	var lines = [];
	for (var i = 0; i < 10000; i++) {
		lines.push(i);
		terminal[0].value = lines.join('\n');
	}
}

function runTextArea() {

	var begin = new Date().getTime();
	appendTextArea();
	var end = new Date().getTime();

	$('#ResultTextArea').empty();
	$('#ResultTextArea').append((end - begin) + 'ms');
}

function appendTextAreaLimited() {
	var terminal = $('#TerminalTextArea');
	var lines = [];
	for (var i = 0; i < 10000; i++) {
		if (lines.length >= 100) {
			lines.splice(0, 1);
		}
		lines.push(i);
		terminal[0].value = lines.join('\n');
	}
}

function runTextAreaLimited() {

	var begin = new Date().getTime();
	appendTextAreaLimited();
	var end = new Date().getTime();

	$('#ResultTextAreaLimited').empty();
	$('#ResultTextAreaLimited').append((end - begin) + 'ms');
}

// ------ DOM version ------

function cleanDOM() {

	var begin = new Date().getTime();
	var terminal = $('#TerminalDOM')[0];
	while (terminal.firstChild) {
		terminal.removeChild(terminal.firstChild);
	}
	var end = new Date().getTime();

	$('#ResultDOMClean').empty();
	$('#ResultDOMClean').append((end - begin) + 'ms');
}

function appendDOM() {
	var terminal = $('#TerminalDOM')[0];
	for (var i = 0; i < 10000; i++) {
		terminal.appendChild(document.createTextNode(i));
		terminal.appendChild(document.createElement('br'));
	}
}

function runDOM() {

	var begin = new Date().getTime();
	appendDOM();
	var end = new Date().getTime();

	$('#ResultDOM').empty();
	$('#ResultDOM').append((end - begin) + 'ms');
}

function appendDOMLimited() {
	var terminal = $('#TerminalDOM')[0];
	for (var i = 0; i < 10000; i++) {
		while (terminal.children.length >= 100) {
			terminal.removeChild(terminal.firstChild);
			terminal.removeChild(terminal.firstChild);
		}
		terminal.appendChild(document.createTextNode(i));
		terminal.appendChild(document.createElement('br'));
	}
}

function runDOMLimited() {

	var begin = new Date().getTime();
	appendDOMLimited();
	var end = new Date().getTime();

	$('#ResultDOMLimited').empty();
	$('#ResultDOMLimited').append((end - begin) + 'ms');
}

// ------ Table version ------

function cleanTable() {

	var begin = new Date().getTime();
	var terminal = $('#TerminalTable tbody')[0];
	while (terminal.firstChild) {
		terminal.removeChild(terminal.firstChild);
	}
	var end = new Date().getTime();

	$('#ResultTableClean').empty();
	$('#ResultTableClean').append((end - begin) + 'ms');
}

function appendTable() {
	var tr, td, td2, td3, text, text2, text3, table = $('#TerminalTable tbody')[0];
	for (var i = 0; i < 10000; i++) {
		tr = document.createElement('tr');
		td = document.createElement('td');
		td2 = document.createElement('td');
		td3 = document.createElement('td');
		text = document.createTextNode(i);
		text2 = document.createTextNode(i);
		text3 = document.createTextNode(i);
		td.appendChild(text);
		td2.appendChild(text2);
		td3.appendChild(text3);
		tr.appendChild(td);
		tr.appendChild(td2);
		tr.appendChild(td3);
		table.appendChild(tr);
	}
}

function runTable() {

	var begin = new Date().getTime();
	appendTable();
	var end = new Date().getTime();

	$('#ResultTable').empty();
	$('#ResultTable').append((end - begin) + 'ms');
}

function appendTableLimited() {
	var tr, td, td2, td3, text, text2, text3, table = $('#TerminalTable tbody')[0];
	for (var i = 0; i < 10000; i++) {

		while (table.children.length >= 100) {
			table.removeChild(table.firstChild);
		}

		tr = document.createElement('tr');
		td = document.createElement('td');
		td2 = document.createElement('td');
		td3 = document.createElement('td');
		text = document.createTextNode(i);
		text2 = document.createTextNode(i);
		text3 = document.createTextNode(i);
		td.appendChild(text);
		td2.appendChild(text2);
		td3.appendChild(text3);
		tr.appendChild(td);
		tr.appendChild(td2);
		tr.appendChild(td3);
		table.appendChild(tr);
	}
}

function runTableLimited() {

	var begin = new Date().getTime();
	appendTableLimited();
	var end = new Date().getTime();

	$('#ResultTableLimited').empty();
	$('#ResultTableLimited').append((end - begin) + 'ms');
}
