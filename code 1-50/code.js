/* start: ex-1 */
function meterToFoot(x){
    return 3.28084 * x;
}
document.getElementById('ex-code-1').innerHTML = '\nfunction meterToFoot(x){\n' +
                                                    '\treturn 3.28084 * x;' +
                                                '\n}';
document.getElementById('ex-usage-1').innerHTML = '\nmeterToFoot(5);';
document.getElementById('ex-output-1').innerHTML = '\n' + meterToFoot(5) + ' feet';
/* end: ex-1 */

/* start: ex-2 */
function meterToYard(x){
    return 1.09361 * x;
}
document.getElementById('ex-code-2').innerHTML = '\nfunction meterToYard(x){\n' +
                                                    '\treturn 1.09361 * x;' +
                                                '\n}';
document.getElementById('ex-usage-2').innerHTML = '\nmeterToYard(5);';
document.getElementById('ex-output-2').innerHTML = '\n' + meterToYard(5) + ' yards';
/* end: ex-2 */

/* start: ex-3 */
function area(width, height){
    return width * height;
}
document.getElementById('ex-code-3').innerHTML = '\nfunction area(width, height){\n' +
                                                    '\treturn width * height;' +
                                                '\n}';
document.getElementById('ex-usage-3').innerHTML = '\narea(5, 10);';
document.getElementById('ex-output-3').innerHTML = '\n' + area(5, 10) + ' m<sup>2</sup>';
/* end: ex-3 */

/* start: ex-4 */
function interest(n){
    return n * 0.0125;
}
document.getElementById('ex-code-4').innerHTML = '\nfunction interest(n){\n' +
                                                    '\treturn n * 0.0125;' +
                                                '\n}';
document.getElementById('ex-usage-4').innerHTML = '\ninterest(15000);';
document.getElementById('ex-output-4').innerHTML = '\n' + interest(15000) + ' บาท';
/* end: ex-4 */

/* start: ex-5 */
function areaOfCircle(r){
    return Math.PI * Math.pow(r, 2);
}
document.getElementById('ex-code-5').innerHTML = '\nfunction areaOfCircle(r){\n' +
                                                    '\treturn Math.PI * Math.pow(r, 2);' +
                                                '\n}';
document.getElementById('ex-usage-5').innerHTML = '\nareaOfCircle(5);';
document.getElementById('ex-output-5').innerHTML = '\n' + areaOfCircle(5) + ' m<sup>2</sup>';
/* end: ex-5 */

/* start: ex-6 */
function thaiArea(a){
    return a / 1600;
}
document.getElementById('ex-code-6').innerHTML = '\nfunction thaiArea(a){\n' +
                                                    '\treturn a / 1600;' +
                                                '\n}';
document.getElementById('ex-usage-6').innerHTML = '\nthaiArea(10000);';
document.getElementById('ex-output-6').innerHTML = '\n' + thaiArea(10000) + ' rai';
/* end: ex-6 */

/* start: ex-7 */
/* ref: http://www.mathportal.org/calculators/trigonometry-calculators/degrees-to-radians-converter.php */
function degreeToRadian(d){
    var symbol_sign = d > 0 ? '' : '-';
    var temp_1 = Math.abs(d);
    var temp_2 = 180;
    if(temp_1 == 0)
        return '0\u03C0';
    for(var i=temp_1-1;i>1;i--){
        if(temp_1%i == 0 && temp_2%i == 0){
            temp_1 /= i;
            temp_2 /= i;
        }
    }
    return temp_1 == temp_2 ?
        symbol_sign + '\u03C0' : symbol_sign + (temp_1 == 1 ? '' : temp_1) + '\u03C0' +
        (temp_2 == 1 ? '' : '/' + temp_2);
}
document.getElementById('ex-code-7').innerHTML = '\nfunction degreeToRadian(d){\n' +
                                                        '\tvar symbol_sign = d > 0 ? \'\' : \'-\';\n' +
                                                        '\tvar temp_1 = Math.abs(d);\n' +
                                                        '\tvar temp_2 = 180;\n' +
                                                        '\tif(temp_1 == 0)\n' +
                                                            '\t\treturn \'0\\u03C0\';\n' +
                                                        '\tfor(var i=temp_1-1;i>1;i--){\n' +
                                                            '\t\tif(temp_1%i == 0 && temp_2%i == 0){\n' +
                                                                '\t\t\ttemp_1 /= i;\n' +
                                                                '\t\t\ttemp_2 /= i;\n' +
                                                            '\t\t}\n' +
                                                        '\t}\n' +
                                                        '\treturn temp_1 == temp_2 ?\n' +
                                                        '\t\'\\u03C0\' : (temp_1 == 1 ? \'\' : temp_1) + \'\\u03C0\' + \'/\' + temp_2;\n' +
                                                    '}';
document.getElementById('ex-usage-7').innerHTML = '\ndegreeToRadian(-30);';
document.getElementById('ex-output-7').innerHTML = '\n' + degreeToRadian(-30);
/* end: ex-7 */

/* start: ex-8 */
function ounceToTical(o){
    /*
        1000/35.274 = x/1
        1000 กรัม = 35.274 ออนซ์
        1 ออนซ์ = 28.349492544 กรัม
        1 บาท = 15.2 กรัม
        1 ออนซ์ = 1.865098194 บาท
    */
    return o * ((1000/35.274)/15.2);
}
document.getElementById('ex-code-8').innerHTML = '\nfunction ounceToTical(o){\n' +
                                                    '\treturn o * ((1000/35.274)/15.2);' +
                                                '\n}';
document.getElementById('ex-usage-8').innerHTML = '\nounceToTical(50);';
document.getElementById('ex-output-8').innerHTML = '\n' + ounceToTical(50) + ' บาท';
/* end: ex-8 */

/* start: ex-9 */
function poundToGram(x){
    return x * 453.59237;
}
document.getElementById('ex-code-9').innerHTML = '\nfunction poundToGram(x){\n' +
                                                    '\treturn x * 453.59237;' +
                                                '\n}';
document.getElementById('ex-usage-9').innerHTML = '\npoundToGram(12);';
document.getElementById('ex-output-9').innerHTML = '\n' + poundToGram(12) + ' กรัม';
/* end: ex-9 */

/* start: ex-10 */
function distance(x1, y1, x2, y2){
    return Math.sqrt(
        Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)
    );
}
document.getElementById('ex-code-10').innerHTML = '\nfunction distance(x1, y1, x2, y2){\n' +
                                                    '\treturn Math.sqrt(\n' +
                                                    '\t\tMath.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)\n' +
                                                '\t);\n' +
                                                '}';
document.getElementById('ex-usage-10').innerHTML = '\ndistance(-2, -3, -4, 4);';
document.getElementById('ex-output-10').innerHTML = '\n' + distance(-2, -3, -4, 4) + ' unit';
/* end: ex-10 */

/* start: ex-11 */
function max3(a, b, c){
    var values = [];
    for(var i=0;i<max3.arguments.length;i++)
        values.push(max3.arguments[i]);
    return Math.max.apply(null, values);

}
document.getElementById('ex-code-11').innerHTML = '\nfunction max3(a, b, c){\n' +
                                                    '\tvar values = [];\n' +
                                                    '\tfor(var i=0;i&#60;max3.arguments.length;i++)\n' +
                                                    '\t\tvalues.push(max3.arguments[i]);\n' +
                                                    '\treturn Math.max.apply(null, values);\n' +
                                                '}';
document.getElementById('ex-usage-11').innerHTML = '\nmax3(3, 5, 2);';
document.getElementById('ex-output-11').innerHTML = '\n' + max3(3, 5, 2);
/* end: ex-11 */
