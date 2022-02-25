/*jslint devel: true */
// The MIT License (MIT)

// Copyright (c) 2017, Notionovus, LLC.

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.

// Generic arrays for drawing 5-bit graphics. Building blocks for all barcode symbologies
// Painstakingly derived gobblety-goop, but essentially the two middle sections of image data unique to each graphic
var array5bit_A = [ 'f//AAAAAAAAAAAAAAAAAAAA', 'f//AAAAAAAAAAAAAAAAAAAB', 'f//AAAAAAAAAAAAAAEAAAD/', 'f//AAAAAAAAAAAAAAEAAAAA', 'f//AAAAAAAAAQAAAP8AAAAA', 'f//AAAAAAAAAQAAAP8AAAAB', 'f//AAAAAAAAAQAAAAAAAAD/', 'f//AAAAAAAAAQAAAAAAAAAA', 'f//AAABAAAA/wAAAAAAAAAA', 'f//AAABAAAA/wAAAAAAAAAB', 'f//AAABAAAA/wAAAAEAAAD/', 'f//AAABAAAA/wAAAAEAAAAA', 'f//AAABAAAAAAAAAP8AAAAA', 'f//AAABAAAAAAAAAP8AAAAB', 'f//AAABAAAAAAAAAAAAAAD/', 'f//AAABAAAAAAAAAAAAAAAA', 'QD/AAD/AAAAAAAAAAAAAAAA', 'QD/AAD/AAAAAAAAAAAAAAAB', 'QD/AAD/AAAAAAAAAAEAAAD/', 'QD/AAD/AAAAAAAAAAEAAAAA', 'QD/AAD/AAAAAQAAAP8AAAAA', 'QD/AAD/AAAAAQAAAP8AAAAB', 'QD/AAD/AAAAAQAAAAAAAAD/', 'QD/AAD/AAAAAQAAAAAAAAAA', 'QD/AAAAAAAA/wAAAAAAAAAA', 'QD/AAAAAAAA/wAAAAAAAAAB', 'SL/AADeAAAA/gAAAAIAAAD+', 'QD/AAAAAAAA/wAAAAEAAAAA', 'QD/AAAAAAAAAAAAAP8AAAAA', 'QD/AAAAAAAAAAAAAP8AAAAB', 'QD/AAAAAAAAAAAAAAAAAAD/', 'QD/AAAAAAAAAAAAAAAAAAAA'];
var array5bit_B = [ 'US0CAuSD38g', 'UUYCA7QBErs', 'ajEDAm49ReY', 'UUoCA+juogg', 'bjEDAjQrOn0', 'bkoDA3iPVH4', 'ajUDAt82atY', 'UU4CA1nljTg', 'cjEDAghkmFU', 'ckoDA0TA9lY', 'izUEAhrxcbg', 'ck4DAxY8F10', 'bjUDAlvFFR8', 'bk4DAxdhexw', 'ajkDAr7LFAw', 'UVICAyQ+UJI', 'TTECAq7UnEM', 'TUoCA+Jw8kA', 'ZjUDAmZGozo', 'TU4CA7CME0s', 'ajUDAvnk9E4', 'ak4DA7VAmk0', 'ZjkDAtle3bI', 'TVICAxOyzrM', 'STUCAqHeHtM', 'SU4CA+16cNA', 'h6QEAZKdo54', 'SVICA62zYxM', 'RTkCAqx1lb4', 'RVICA/z3WM0', 'QT0CAkdoxRU', 'KFYBA46vJCA'];

// Painstakingly derived gobblety-goop, but essentially the front, back and mid-matter common to all barcode images...
var stringStart = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAACCAQAAADLaIVbAAAANUlEQVQIHQEqANX/A';
var stringMid = 'AAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAA';
var stringEnd = 'AAAAASUVORK5CYII=" style="width:';

function genBarcode(inputString, intWidth, intHeight) {
  'use strict';
  var arraySeq = [], i, intChunks, resultString, intRawmod = inputString.length % 5;
  if (intRawmod > 0) {
		for (i = 0; i < 5 - intRawmod; i += 1) {
			inputString += "0";
		}
	}
  intChunks = inputString.length / 5;

  for (i = 0; i < intChunks; i += 1) {
		arraySeq[i] = parseInt(inputString.substr(i * 5, 5), 2);
	}

	resultString = "";
  for (i = 0; i < arraySeq.length; i += 1) {
		resultString += stringStart + array5bit_A[arraySeq[i]] + stringMid + array5bit_B[arraySeq[i]] + stringEnd + intWidth + 'px;height:' + intHeight + 'px;">';
  }
  return resultString;
}
///////////////////////////////////////////
// Symbology-specific arrays
// Code 128 Specific Array
var arrayCode128Bin = [ '11011001100', '11001101100', '11001100110', '10010011000', '10010001100', '10001001100', '10011001000', '10011000100', '10001100100', '11001001000', '11001000100', '11000100100', '10110011100', '10011011100', '10011001110', '10111001100', '10011101100', '10011100110', '11001110010', '11001011100', '11001001110', '11011100100', '11001110100', '11101101110', '11101001100', '11100101100', '11100100110', '11101100100', '11100110100', '11100110010', '11011011000', '11011000110', '11000110110', '10100011000', '10001011000', '10001000110', '10110001000', '10001101000', '10001100010', '11010001000', '11000101000', '11000100010', '10110111000', '10110001110', '10001101110', '10111011000', '10111000110', '10001110110', '11101110110', '11010001110', '11000101110', '11011101000', '11011100010', '11011101110', '11101011000', '11101000110', '11100010110', '11101101000', '11101100010', '11100011010', '11101111010', '11001000010', '11110001010', '10100110000', '10100001100', '10010110000', '10010000110', '10000101100', '10000100110', '10110010000', '10110000100', '10011010000', '10011000010', '10000110100', '10000110010', '11000010010', '11001010000', '11110111010', '11000010100', '10001111010', '10100111100', '10010111100', '10010011110', '10111100100', '10011110100', '10011110010', '11110100100', '11110010100', '11110010010', '11011011110', '11011110110', '11110110110', '10101111000', '10100011110', '10001011110', '10111101000', '10111100010', '11110101000', '11110100010', '10111011110', '10111101110', '11101011110', '11110101110', '11010000100', '11010010000', '11010011100', '1100011101011', '11010111000'];

// Global Variables
var strRaw = "";
var strText = "";

function funcConsumeEscape(inputChar) {
	'use strict';
	switch (inputChar) {
	case 96: // `
		return 102;
	case 49: // 1
		return 97;
	case 50: // 2
		return 96;
	case 51: // 3
		return 96;
	case 52: // 4 (Assumes Code128B)
		return 100;
	case 65: // A
		return 101;
	case 66: // B
		return 100;
	case 67: // C
		return 99;
	case 68: // D
		return 95;
	case 97: // a
		return 98;
	case 98: // b
		return 98;
	default:
		return (inputChar - 32);
	}
}

// Symbology-specific functions
function funcCode128B() {
  'use strict';
  var i, j, intWeight, intLength, intWtProd, arrayData = [];

	intLength = strText.length;
	arrayData[0] = 104;
	intWtProd = 104;
	for (i = 0, j = 0; i < intLength; i += 1, j += 1) {
		if (strText[i] !== "`") {
			arrayData[j + 1] = strText.charCodeAt(i) - 32;
			intWeight = j + 1;
			intWtProd += intWeight * arrayData[j + 1];
		} else {
			i += 1;
			arrayData[j + 1] = funcConsumeEscape(strText.charCodeAt(i));
			intWeight = j + 1;
			intWtProd += intWeight * arrayData[j + 1];
		}
	}
	arrayData[j + 1] = intWtProd % 103;
	arrayData[j + 2] = 106;
	strRaw = "";
	for (i = 0; i < arrayData.length; i += 1) {
		strRaw += arrayCode128Bin[arrayData[i]];
	}
} 
// End Code 128B

var buttonBarcode = document.getElementById("btnGenerate");
buttonBarcode.onclick = function () {
  'use strict';
	var intHt, intWd, strImages;
	intHt = intWd = 0;
	strImages = "";
	intWd = 12.5;
	intHt = 175;
	strText = document.getElementById("textData").value;
	funcCode128B();
	document.getElementById("barcode").innerHTML = strImages = genBarcode(strRaw, intWd, intHt);
};