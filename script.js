var str = '  A B  C   D EF ';
console.log(str.replace(/\s/g, '#'));  // ##A#B##C###D#EF#
console.log(str.replace(/\s+/g, '#')); // #A#B#C#D#EF#
console.log(str.replace(/^\s+|\s+$/g, '#'))
console.log(str.replace(/g, '#'))