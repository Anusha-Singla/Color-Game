var _0x4498=['querySelector','textContent','remove','length','style','Play\x20Again?','steelblue','click','Correct!','backgroundColor','classList','.mode','Try\x20again!','display','rgb(','.square','querySelectorAll','New\x20Colors','Easy','getElementById','add','colorDisplay','floor','reset','addEventListener','selected','random','none','#232323'];(function(_0x108cd4,_0x449873){var _0x4a031d=function(_0x895a23){while(--_0x895a23){_0x108cd4['push'](_0x108cd4['shift']());}};_0x4a031d(++_0x449873);}(_0x4498,0xa9));var _0x4a03=function(_0x108cd4,_0x449873){_0x108cd4=_0x108cd4-0x0;var _0x4a031d=_0x4498[_0x108cd4];return _0x4a031d;};var numSquares=0x6;var colors=[];var pickedColor;var squares=document[_0x4a03('0x15')](_0x4a03('0x14'));var colorDisplay=document[_0x4a03('0x18')](_0x4a03('0x1a'));var h1=document[_0x4a03('0x5')]('h1');var resetButton=document[_0x4a03('0x18')](_0x4a03('0x1c'));var modeButtons=document[_0x4a03('0x15')](_0x4a03('0x10'));init();function init(){setupModebuttons();setupSquares();reset();}function setupModebuttons(){for(var _0x195f70=0x0;_0x195f70<modeButtons[_0x4a03('0x8')];_0x195f70++){modeButtons[_0x195f70][_0x4a03('0x0')](_0x4a03('0xc'),function(){modeButtons[0x0][_0x4a03('0xf')][_0x4a03('0x7')]('selected');modeButtons[0x1][_0x4a03('0xf')][_0x4a03('0x7')](_0x4a03('0x1'));this[_0x4a03('0xf')][_0x4a03('0x19')](_0x4a03('0x1'));this[_0x4a03('0x6')]===_0x4a03('0x17')?numSquares=0x3:numSquares=0x6;reset();});}}function setupSquares(){for(var _0x3b9749=0x0;_0x3b9749<squares[_0x4a03('0x8')];_0x3b9749++){squares[_0x3b9749][_0x4a03('0x0')](_0x4a03('0xc'),function(){var _0x57bf7b=this[_0x4a03('0x9')]['backgroundColor'];if(_0x57bf7b===pickedColor){messageDisplay[_0x4a03('0x6')]=_0x4a03('0xd');resetButton[_0x4a03('0x6')]=_0x4a03('0xa');changeColors(_0x57bf7b);h1[_0x4a03('0x9')][_0x4a03('0xe')]=_0x57bf7b;}else{this[_0x4a03('0x9')][_0x4a03('0xe')]=_0x4a03('0x4');messageDisplay[_0x4a03('0x6')]=_0x4a03('0x11');}});}}resetButton['addEventListener'](_0x4a03('0xc'),function(){reset();});colorDisplay['textContent']=pickedColor;function changeColors(_0x2d6b89){for(var _0xc1f0f3=0x0;_0xc1f0f3<squares[_0x4a03('0x8')];_0xc1f0f3++){squares[_0xc1f0f3]['style'][_0x4a03('0xe')]=_0x2d6b89;}}function pickColor(){var _0xe584da=Math['floor'](Math[_0x4a03('0x2')]()*colors['length']);return colors[_0xe584da];}function generateRandomColors(_0x14515b){var _0x23c89c=[];for(var _0x58df7b=0x0;_0x58df7b<_0x14515b;_0x58df7b++){_0x23c89c['push'](randomColor());}return _0x23c89c;}function randomColor(){var _0x1ccfc2=Math[_0x4a03('0x1b')](Math[_0x4a03('0x2')]()*0x100);var _0xde5b1d=Math['floor'](Math[_0x4a03('0x2')]()*0x100);var _0x4f32b7=Math[_0x4a03('0x1b')](Math[_0x4a03('0x2')]()*0x100);return _0x4a03('0x13')+_0x1ccfc2+',\x20'+_0xde5b1d+',\x20'+_0x4f32b7+')';}function reset(){colors=generateRandomColors(numSquares);pickedColor=pickColor();colorDisplay['textContent']=pickedColor;resetButton[_0x4a03('0x6')]=_0x4a03('0x16');messageDisplay['textContent']='';for(var _0x206589=0x0;_0x206589<squares[_0x4a03('0x8')];_0x206589++){if(colors[_0x206589]){squares[_0x206589][_0x4a03('0x9')]['display']='block';squares[_0x206589][_0x4a03('0x9')]['backgroundColor']=colors[_0x206589];}else{squares[_0x206589][_0x4a03('0x9')][_0x4a03('0x12')]=_0x4a03('0x3');}}h1[_0x4a03('0x9')][_0x4a03('0xe')]=_0x4a03('0xb');}