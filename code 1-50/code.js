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

/* start: ex-12 */
function sum(n){
    if(n == 0)
        return n;
    else
        return n + sum(n - 1);
}
document.getElementById('ex-code-12').innerHTML = '\nfunction sum(n){\n' +
                                                    '\tif(n == 0)\n' +
                                                    '\t\treturn n;\n' +
                                                    '\telse\n' +
                                                    '\t\treturn n + sum(n - 1);\n' +
                                                '}';
document.getElementById('ex-usage-12').innerHTML = '\nsum(4);';
document.getElementById('ex-output-12').innerHTML = '\n' + sum(4);
/* end: ex-12 */

/* start: ex-13*/
function sumEven(n){
    var sum = 0;
    for(var i=1;i<=n;i++)
        if(i%2==0)
            sum += i;
    return sum;
}
document.getElementById('ex-code-13').innerHTML = '\nfunction sumEven(n){\n' +
                                                    '\tvar sum = 0;\n' +
                                                    '\tfor(var i=1;i&#60&#61n;i++)\n' +
                                                    '\t\tif(i%2==0)\n' +
                                                    '\t\t\tsum += i;\n' +
                                                    '\treturn sum;\n' +
                                                '}';
document.getElementById('ex-usage-13').innerHTML = '\nsum(4);';
document.getElementById('ex-output-13').innerHTML = '\n' + sum(4);
/* end: ex-13 */

/* start: ex-14 */
function divider(n){
    var nums = [];
    for(var i=1;i<=n;i++){
        if(n%i == 0)
            nums.push(i);
    }
    return nums;
}
document.getElementById('ex-code-14').innerHTML = '\nfunction divider(n){\n' +
                                                    '\tvar nums = [];\n' +
                                                    '\tfor(var i=1;i&#60;&#61;n;i++){\n' +
                                                    '\t\tif(n%i == 0)\n' +
                                                    '\t\t\tnums.push(i);\n' +
                                                    '\t}\n' +
                                                    '\treturn nums;\n' +
                                                '}';
document.getElementById('ex-usage-14').innerHTML = '\ndivider(10);';
document.getElementById('ex-output-14').innerHTML = '\n' + divider(10);
/* end: ex-14 */

/* start: ex-15 */
/*
prime-nubmer-list
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
    43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
    101, 103, 107, 109, 113, ...
*/
function isPrime(p){
    var nums = [];
    for(var i=1;i<=p;i++){
        if(p%i == 0)
            nums.push(i);
        if(nums.length > 2)
            break;
    }
    return nums.length > 2 ? false : true;
}
document.getElementById('ex-code-15').innerHTML = '\nfunction isPrime(p){\n' +
                                                    '\tvar nums = [];\n' +
                                                    '\tfor(var i=1;i&#60;&#61;p;i++){\n' +
                                                    '\t\tif(p%i == 0)\n' +
                                                    '\t\t\tnums.push(i);\n' +
                                                    '\t\tif(nums.length > 2)\n' +
                                                    '\t\t\tbreak;\n' +
                                                    '\t}\n' +
                                                    '\treturn nums.length > 2 ? false : true;\n' +
                                                    '}';
document.getElementById('ex-usage-15').innerHTML = '\nisPrime(23);';
document.getElementById('ex-output-15').innerHTML = '\n' + isPrime(23);
/* end: ex-15 */

/* start: ex-16 */
function gcd(a, b){ // minus value....
    var a_abs = Math.abs(a);
    var b_abs = Math.abs(b);
    var num_min = a_abs < b_abs ? a_abs : b_abs;
    var result = 'waiting';
    for(var i=num_min;i>0;i--){
        if(a_abs%i==0 && b_abs%i==0){
            result = i;
            break;
        }
    }
    return result == 'waiting' ? 'not found gcd.' : result;
}
document.getElementById('ex-code-16').innerHTML = '\nfunction gcd(a, b){\n' +
                                                    '\tvar a_abs = Math.abs(a);\n' +
                                                    '\tvar b_abs = Math.abs(b);\n' +
                                                    '\tvar num_min = a_abs < b_abs ? a_abs : b_abs;\n' +
                                                    '\tvar result = \'waiting\';\n' +
                                                    '\tfor(var i=num_min;i>0;i--){\n' +
                                                    '\t\tif(a_abs%i==0 && b_abs%i==0){\n' +
                                                    '\t\t\tresult = i;\n' +
                                                    '\t\t\tbreak;\n' +
                                                    '\t\t}\n' +
                                                    '\t}\n' +
                                                    '\treturn result == \'waiting\' ? \'not found gcd.\' : result;\n' +
                                                    '}';
document.getElementById('ex-usage-16').innerHTML = '\ngcd(15, 10);';
document.getElementById('ex-output-16').innerHTML = '\n' + gcd(15, 10);
/* end: ex-16 */

/* start: ex-17 */
function lcm(a, b){
    var num_max = a > b ? a : b;
    var result = 'not found lcm.';
    for(var i=num_max;;i++){
        if(i%a==0 && i%b==0){
            result = i;
            break;
        }
    }
    return result;
}
document.getElementById('ex-code-17').innerHTML = '\nfunction lcm(a, b){\n' +
                                                        '\tvar num_max = a > b ? a : b;\n' +
                                                        '\tvar result = \'not found lcm.\';\n' +
                                                        '\tfor(var i=num_max;;i++){\n' +
                                                        '\t\tif(i%a==0 && i%b==0){\n' +
                                                        '\t\t\tresult = i;\n' +
                                                        '\t\t\tbreak;\n' +
                                                        '\t\t}\n' +
                                                        '\t}\n' +
                                                        '\treturn result;\n' +
                                                    '}';
document.getElementById('ex-usage-17').innerHTML = '\nlcm(15, 10);';
document.getElementById('ex-output-17').innerHTML = '\n' + lcm(15, 10);
/* end: ex-17 */

/* start: ex-18 */
function countOdd(a, b){
    var result = 0;
    for(var i=a;i<=b;i++)
        if(Math.abs(i)%2 != 0)
            result++;
    return result;
}
document.getElementById('ex-code-18').innerHTML = '\nfunction lcm(a, b){\n' +
                                                        '\tvar result = 0;\n' +
                                                        '\tfor(var i=a;i<=b;i++)\n' +
                                                        '\t\tif(Math.abs(i)%2 != 0)\n' +
                                                        '\t\t\tresult++;\n' +
                                                        '\treturn result;\n' +
                                                    '}';
document.getElementById('ex-usage-18').innerHTML = '\ncountOdd(3, 10);';
document.getElementById('ex-output-18').innerHTML = '\n' + countOdd(3, 10);
/* end: ex-18 */

/* start: ex-19 */
function divide35(n){
    var result = 0;
    if(n<0)
        return 'n ต้องมากกว่า 0';
    for(var i=1;i<=n;i++)
        if(i%3==0 || i%5==0)
            result++;
    return result;
}
document.getElementById('ex-code-19').innerHTML = '\nfunction divide35(n){\n' +
                                                        '\tvar result = 0;\n' +
                                                        '\tif(n<0)\n' +
                                                        '\t\treturn \'n ต้องเป็นจำนวนเต็มที่มากกว่า 0\';\n' +
                                                        '\tfor(var i=1;i<=n;i++)\n' +
                                                        '\t\tif(i%3==0 || i%5==0)\n' +
                                                        '\t\t\tresult++;\n' +
                                                        '\treturn result;\n' +
                                                    '}';
document.getElementById('ex-usage-19').innerHTML = '\ndivide35(10);';
document.getElementById('ex-output-19').innerHTML = '\n' + divide35(10);
/* end: ex-19 */

/* start: ex-20 */
function countDivider(a, b, k){
    var result = 0;
    for(var i=a;i<=b;i++)
        if(Math.abs(i)%k ==0)
            result++;
    return result==0 ? 'not found' : result;
}
document.getElementById('ex-code-20').innerHTML = '\nfunction countDivider(a, b, k){\n' +
                                                        '\tvar result = 0;\n' +
                                                        '\tfor(var i=a;i<=b;i++)\n' +
                                                        '\t\tif(Math.abs(i)%k ==0)\n' +
                                                        '\t\t\tresult++;\n' +
                                                        '\treturn result==0 ? \'not found\' : result;\n' +
                                                    '}';
document.getElementById('ex-usage-20').innerHTML = '\ncountDivider(10,18,5);';
document.getElementById('ex-output-20').innerHTML = '\n' + countDivider(10,18,5);
/* end: ex-20 */

/* start: ex-21 */
function reverse(s){
    var str = '';
    for(var i=s.length-1;i>=0;i--){
        str += s[i];
    }
    return str;
}
document.getElementById('ex-code-21').innerHTML = '\nfunction reverse(s){\n' +
                                                        '\tvar str = \'\';\n' +
                                                        '\tfor(var i=s.length-1;i>=0;i--)\n' +
                                                        '\t\tstr += s[i];\n' +
                                                        '\treturn str;\n' +
                                                    '}';
document.getElementById('ex-usage-21').innerHTML = '\nreverse(\'hello\');';
document.getElementById('ex-output-21').innerHTML = '\n' + reverse('hello');
/* end: ex-21 */

/* start: ex-22 */
function isAnagram(s, t){
    var temp_s = s.trim();
    var temp_t = t.trim();
    if(temp_s.length != temp_t.length || temp_s == '' || temp_t == '')
        return false;
    var temp_s_r = [];
    var temp_t_r = [];
    for(var i=0;i<temp_s.length;i++){
        temp_s_r.push(temp_s[i]);
        temp_t_r.push(temp_t[i]);
    }
    temp_s_r.sort();
    temp_t_r.sort();
    return temp_s_r.toString() == temp_t_r.toString() ? true : false;
}
document.getElementById('ex-code-22').innerHTML = '\nfunction isAnagram(s, t){\n' +
                                                        '\tvar temp_s = s.trim();\n' +
                                                        '\tvar temp_t = t.trim();\n' +
                                                        '\tif(temp_s.length != temp_t.length || temp_s == \'\' || temp_t == \'\')\n' +
                                                        '\t\treturn false;\n' +
                                                        '\tvar temp_s_r = [];\n' +
                                                        '\tvar temp_t_r = [];\n' +
                                                        '\tfor(var i=0;i&#60;temp_s.length;i++){\n' +
                                                        '\t\ttemp_s_r.push(temp_s[i]);\n' +
                                                        '\t\ttemp_t_r.push(temp_t[i]);\n' +
                                                        '\t}\n' +
                                                        '\ttemp_s_r.sort();\n' +
                                                        '\ttemp_t_r.sort();\n' +
                                                        '\treturn temp_s_r.toString() == temp_t_r.toString() ? true : false;\n' +
                                                    '}';
document.getElementById('ex-usage-22').innerHTML = '\nisAnagram(\'gallery\', \'allergy\');';
document.getElementById('ex-output-22').innerHTML = '\n' + isAnagram('gallery', 'allergy');
/* end: ex-22 */

/* start: ex-23 */
function isPalindrome(s){
    return reverse(s) == s ? true : false;
}
document.getElementById('ex-code-23').innerHTML = '\nfunction isAnagram(s, t){\n' +
                                                        '\treturn reverse(s) == s ? true : false;\n' +
                                                    '}';
document.getElementById('ex-usage-23').innerHTML = '\nreverse(\'racecar\');';
document.getElementById('ex-output-23').innerHTML = '\n' + isPalindrome('racecar');
/* end: ex-23 */

/* start: ex-24
ref => http://www.onlineconversion.com/roman_numerals_advanced.htm
I :	The numeral one. II is two, III is three. You seldom see IIII as 4,
    since IV can also mean 4, plus its shorter to write.

V :	The numeral 5. IV is 4, VI is 6, VII is 7, VIII is 8.

X :	The numeral 10. IX is 9, XI is 11, etc.

L :	The numeral 50. XL would be 40.

C :	The numeral 100. Think of Century having a hundred years. C is short
    for the Latin word Centum, but that's not very easy to remember.

D :	The numeral 500.

M :	The numeral 1000.
*/
function romanNumber(n){
    var value = n.toString();
    var unitValue = [];
    var result = '';
    const I = 1;
    const V = 5;
    const X = 10;
    const L = 50;
    const C = 100;
    const D = 500;
    const M = 1000;
    const LIMIT = 5000;
    var indexWhile = 0;
    var indexUnit = 0 ;
    var reg = /^[0-9]+$/;

    if(!reg.test(n))
        return '\'' + n + '\' ไม่ใช่ตัวเลขจำนวนเต็มที่มากกว่าศูนย์';
    if(n>4999)
        return '\''+ n +'\' มีค่ามากกว่า 4999 ไม่สามารถแปลงเป็นเลขโรมันได้ในฟังก์ชันนี้';
    if(n<I)
        return 'ควรมีค่ามากกว่าศูนย์';

    for(var i=0;i<value.length;i++){
        var temp = '';
        for(var j=1;j<value.length-i;j++)
            temp += '0';
        unitValue.push(parseInt(value[i] + temp));
    }
    if(value == I){
        return 'I';
    }else if(value == V - I){
        return 'IV';
    }else if(value < V){
        for(var i=0;i<value;i++){
            result += romanNumber(I);
        }
    }else if(value == V){
        return 'V';
    }else if(value == X - I){
        return 'IX';
    }else if(value > V && value < X){
        result += 'V' + romanNumber(value-V);
    }else if(value == X){
        return 'X';
    }else if(value == L - X){
        return 'XL';
    }else if(value > X && value < L){
        for(var i of unitValue){
            if(i < 1)
                continue;
            for(var j=0;j<i/X && i%X == 0;j++){
                if(i > 30){
                    result += romanNumber(i);
                    break;
                }else{
                    result += romanNumber(X);
                }
            }
            if(i < X){
                result += romanNumber(i);
            }
        }
    }else if(value == L){
        return 'L';
    }else if(value == C - X){
        return 'XC';
    }else if(value > L && value < C){ // between 50 - 100
        for(var i of unitValue){
            if(i < 1)
                continue;
            var temp_result = i - L;
            if(temp_result > 0 && i < 90){
                result += romanNumber(L);
                result += romanNumber(temp_result);
            }else{
                result += romanNumber(i);
            }
        }
    }else if(value == C){
        return 'C';
    }else if(value == D - C){
        return 'CD';
    }else if(value > C && value < D){
        for(var i of unitValue){
            if(i < 1)
                continue;
            if(i == D - C){
                result += romanNumber(i);
                continue;
            }
            for(var j=0;j<i/C && i%C==0;j++){
                result += romanNumber(C);
            }
            if(i<C)
                result += romanNumber(i);
        }
    }else if(value == D){
        return 'D';
    }else if(value == M - C){
        return 'CM';
    }else if(value > D && value < M){
        for(var i of unitValue){
            if(i < 1)
                continue;
            var temp_result = i - D;
            if(temp_result > 0 && i < 900){
                result += romanNumber(D);
                result += romanNumber(temp_result);
            }else{
                //console.log(unitValue);
                result += romanNumber(i);
            }
        }
    }else if(value == M){
        return 'M';
    }else if(value > M && value < LIMIT){
        for(var i of unitValue){
            if(i < 1)
                continue;
            for(var j=0;j<i/M && i%M == 0;j++){
                result += romanNumber(M);
            }
            if(i < M){
                result += romanNumber(i);
            }
        }
    }
    return result;
}
document.getElementById('ex-usage-24').innerHTML = '\nromanNumber(4999);';
document.getElementById('ex-output-24').innerHTML = '\n' + romanNumber(4999);
/* end: ex-24 */

/* start: ex-25 */
function romanToNumber(s){

}
/* end: ex-25 */

/* start: ex-26 */
function englishMonth(thaiMonth){
    var months = {
        'มกราคม' : 'January',
        'กุมภาพันธ์' : 'February',
        'มีนาคม' : 'March',
        'เมษายน' : 'April',
        'พฤษภาคม' : 'May',
        'มิถุนายน' : 'June',
        'กรกฎาคม' : 'July',
        'สิงหาคม' : 'August',
        'กันยายน' : 'September',
        'ตุลาคม' : 'October',
        'พฤศจิกายน' : 'November',
        'ธันวาคม' : 'December'
    };
    return months[thaiMonth] == undefined ? 'not found.' : months[thaiMonth];
}
document.getElementById('ex-usage-26').innerHTML = '\nenglishMonth(\'มกราคม\');';
document.getElementById('ex-output-26').innerHTML = '\n' + englishMonth('มกราคม');
/* end: ex-26 */

/* start: ex-27 */

/* end: ex-27 */

/* start: ex-28 */

/* end: ex-28 */

/* start: ex-29 */
function thaiNumber(x){
    var numbers = ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙'];
    var result = '';
    for(var i=0;i<x.length;i++){
        if(x[i] == '.'){
            result += '.';
            continue;
        }
        result += numbers[x[i]];
    }
    return result;
}
document.getElementById('ex-usage-29').innerHTML = '\nthaiNumber(\'54.3\');';
document.getElementById('ex-output-29').innerHTML = '\n' + thaiNumber('54.3');
/* end: ex-29 */

/* start: ex-30 */
function arabicNumber(x){
    var numbers = ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙'];
    var result = '';
    for(var i=0;i<x.length;i++){
        if(x[i] == '.'){
            result += '.';
            continue;
        }
        result += numbers.indexOf(x[i]);
    }
    return result;
}
document.getElementById('ex-usage-30').innerHTML = '\narabicNumber(\'๒๓.๗๖\');';
document.getElementById('ex-output-30').innerHTML = '\n' + arabicNumber('๒๓.๗๖');
/* end: ex-30 */

/* start: ex-31 */
function sumEx31(a){
    var result = 0;
    for(var i of a)
        result += i;
    return result;
}
document.getElementById('ex-usage-31').innerHTML = '\nsumEx31([1, 2, 3, 4]);';
document.getElementById('ex-output-31').innerHTML = '\n' + sumEx31([1, 2, 3, 4]);
/* end: ex-31 */

/* start: ex-32 */
function maximum(a){
    return Math.max.apply(null, a);
}
document.getElementById('ex-usage-32').innerHTML = '\nmaximum([4, 2, 6, 9, 4, 6, 9]);';
document.getElementById('ex-output-32').innerHTML = '\n' + maximum([4, 2, 6, 9, 4, 6, 9]);
/* end: ex-32 */

/* start: ex-33 */
function median(a){
    a.sort(function(a, b){return a-b;});
    if(a.length%2!=0)
        return a[(a.length + 1)/2 - 1];
    else
        return (a[a.length/2-1] + a[a.length/2])/2 ;
}
document.getElementById('ex-usage-33').innerHTML = '\nmedian([4, 20, 7, 12, 90, 4, 6, 9]);';
document.getElementById('ex-output-33').innerHTML = '\n' + median([4, 20, 7, 12, 90, 4, 6, 9]);
/* end: ex-33 */

/* start: ex-34 */

/* end: ex-34 */

/* start: ex-35 */
function dividerEx35(n){
    var numbers = [];
    for(var i=1;i<=n;i++)
        if(n%i == 0)
            numbers.push(i);
    return numbers;
}
document.getElementById('ex-usage-35').innerHTML = '\ndividerEx35(12);';
document.getElementById('ex-output-35').innerHTML = '\n[' + dividerEx35(12) + ']';
/* end: ex-35 */

/* start: ex-36 */
function commonDivider(m, n){
    var min_divider = m < n ? m : n;
    var result = [];
    for(var i=1;i<=min_divider;i++)
        if(m%i == 0 && n%i == 0)
            result.push(i);
    return result;
}
document.getElementById('ex-usage-36').innerHTML = '\ncommonDivider(10, 15);';
document.getElementById('ex-output-36').innerHTML = '\n[' + commonDivider(10, 15) + ']';
/* end: ex-36 */

/* start: ex-37 */

/* end: ex-37 */

/* start: ex-38 */
function common(a, b){
    var temp_a = [];
    var temp_b = [];
    var result = [];
    /* start: remove duplicate valueOfArray */
    for(var i=0;i<a.length;i++)
        temp_a.indexOf(a[i]) == -1 ? temp_a.push(a[i]) : '';
    for(var i=0;i<b.length;i++)
        temp_b.indexOf(b[i]) == -1 ? temp_b.push(b[i]) : '';
    /* end: remove duplicate valueOfArray */
    for(var i=0;i<temp_a.length;i++)
        temp_b.indexOf(temp_a[i]) != -1 ? result.push(temp_a[i]) : '';
    return result.sort(function(a, b){return a-b});
}
document.getElementById('ex-usage-38').innerHTML = '\ncommon([1, 2, 43, 1, 5, 2], [2, 5, 43, 9]);';
document.getElementById('ex-output-38').innerHTML = '\n[' + common([1, 2, 43, 1, 5, 2], [2, 5, 43, 9]) + ']';
/* end: ex-38 */

/* start: ex-39 */
function factor(n){
    var result = [];
    for(var i=1;i<=n;i++)
        if(n%i==0){
            result.push(i);
            n /= i;
            i = 1;
        }
    return result;
}
document.getElementById('ex-usage-39').innerHTML = '\nfactor(89);';
document.getElementById('ex-output-39').innerHTML = '\n' + factor(89);
/* end: ex-39 */

/* start: ex-40 */

/* end: ex-40 */

/* start: ex-41 */
/*
    1 งาน = 100 ตารางวา
    1 ไร่ = 400 ตารางวา
    1 ไร่ = 4 งาน
    1 ไร่ = 1600 ตาราเมตร
*/
function thaiAreaEx41(a){
    var r_area = Math.floor(a/1600);
    var temp1 = a - r_area*1600;
    var n_area = Math.floor(temp1/400);
    var w_area = ((temp1/400) - n_area)*100;
    return {
        r : r_area,
        n : n_area,
        w : w_area
    };
}
document.getElementById('ex-usage-41').innerHTML = '\nthaiAreaEx41(2100);';
document.getElementById('ex-output-41').innerHTML = '\n' + JSON.stringify(thaiAreaEx41(2500));
/* end: ex-41 */

/* start: ex-42 */
function findCode(city){
    var data = [
        { city: 'เมืองนนทบุรี', code: '11000' },
        { city: 'บางบัวทอง',  code: '11110' },
        { city: 'ปากเกร็ด',   code: '11120' },
        { city: 'บางกรวย',   code: '11130' },
        { city: 'บางใหญ่',    code: '11140' },
        { city: 'ไทรน้อย',    code: '11150' }
    ];
    for(var i of data)
        if(i.city == city)
            return i.code;
    return 'not found.';
}
document.getElementById('ex-usage-42').innerHTML = '\nfindCode(\'ไทรน้อย\');';
document.getElementById('ex-output-42').innerHTML = '\n' + findCode('ไทรน้อย');
/* end: ex-42 */

/* start: ex-43 */
function getCode(city){
    var data = {
        'เมืองนนทบุรี' : '11000',
        'บางบัวทอง' : '11110',
        'ปากเกร็ด' : '11120',
        'บางกรวย' : '11130',
        'บางใหญ่' : '11140',
        'ไทรน้อย' : '11150'
    };
    return data[city] == undefined ? 'not found.' : data[city];
}
document.getElementById('ex-usage-43').innerHTML = '\ngetCode(\'บางใหญ่\');';
document.getElementById('ex-output-43').innerHTML = '\n' + getCode('บางใหญ่');
/* end: ex-43 */

/* start: ex-44 */
function sortMedal(list){
    list.sort(
        function(a, b){
            if(b.gold == a.gold)
                if(b.silver == a.silver)
                    if(b.bronze == a.bronze)
                        return b.gold - a.gold;
                    else
                        return b.bronze - a.bronze;
                else
                    return b.silver - a.silver;
            else
                return b.gold - a.gold;
        }
    );
    return list;
}
document.getElementById('ex-usage-44').innerHTML = '\nsortMedal([\n' +
                                                '\t{name: \'Bangkok\', gold: 5, silver: 2, bronze: 3},\n' +
                                                '\t{name: \'Nonthaburi\', gold: 3, silver: 4, bronze: 4},\n' +
                                                '\t{name: \'Supanburi\', gold: 3, silver: 5, bronze: 4}\n' +
                                            ']);';
document.getElementById('ex-output-44').innerHTML = '\n' + JSON.stringify(
    sortMedal([
        {name: 'Bangkok', gold: 5, silver: 2, bronze: 3},
        {name: 'Nonthaburi', gold: 3, silver: 4, bronze: 4},
        {name: 'Supanburi', gold: 3, silver: 5, bronze: 4}
    ])
    , null, '\t'
);
/* end: ex-44 */

/* start: ex-45 */
function dispense(n){
    if(n%100 > 0)
        return 'ระบุจำนวนเงินไม่ถูกต้อง';
    var temp = n;
    var result = [
            {denomination: 1000, amount: 0},
            {denomination: 500, amount: 0},
            {denomination: 100, amount: 0},
    ];
    var money = [1000, 500, 100];
    var index_money = 0;
    for(var i of result){
        i.amount = (temp - temp%money[index_money])/money[index_money];
        temp = temp%money[index_money];
        index_money++;
    }
    return result;
}
document.getElementById('ex-usage-45').innerHTML = '\ndispense(1700);';
document.getElementById('ex-output-45').innerHTML = '\n' + JSON.stringify(dispense(1700), null, '\t');
/* end: ex-45 */

/* start: ex-46 */
function minimumStamp(s, v){
    var temp = [];
    var result = [];
    s.sort(function(a, b){return a-b;});
    var min = balance%s[s.length-1];
    var balance = v;
    var countStamp = 0;
    var i = s.length - 1;
    while(balance>0){
        for(var j=0;j<s.length;j++){
            if(s.indexOf(v) != -1){
                i = s.indexOf(v);
                break;
            }
            if(balance%s[j]!=0){
                if(min > balance%s[j]){
                    i = j;
                    min = balance%s[j];
                }
            }
        }
        temp[s[i]] = Math.floor(balance/s[i]);
        balance -= temp[s[i]]*s[i];
        countStamp += temp[s[i]];
        i--;
    }
    for(var index in temp)
        result.push(
            {'stamp' : index , 'count' : temp[index]}
        );
    //console.log(JSON.stringify(result, null, '\t'));
    return countStamp;
}
document.getElementById('ex-usage-46').innerHTML = '\nminimumStamp([1, 17, 5, 15], 16);';
document.getElementById('ex-output-46').innerHTML = '\n' + minimumStamp([1, 17, 5, 15], 16);
/* end: ex-46 */

/* start: ex-47 */
/* distance(x1, y1, x2, y2)*/
function closest(points){
    var minDistance = undefined;
    for(var i of points){
        for(var j=0;j<points.length;j++){
            if(j==points.indexOf(i))
                continue;
            var tempDistance = distance(i.x, i.y, points[j].x, points[j].y);
            if(minDistance == undefined || minDistance > tempDistance)
                minDistance = tempDistance;
        }
    }
    return minDistance.toFixed(3);
}
document.getElementById('ex-usage-47').innerHTML = '\nclosest([{x:0, y:0}, {x:10, y:10}, {x:1, y:1}]);';
document.getElementById('ex-output-47').innerHTML = '\n' + closest([{x:0, y:0}, {x:10, y:10}, {x:1, y:1}]);
/* end: ex-47 */

/* start: ex-48 */
function workingHour(a){
    var result = [{name : undefined, arrive : 0, leave : 0}];
    var index = result.length - 1;
    for(var i of a){
        if(result[index].name == undefined){
            result[index].name = i.name;
        }else{
            var count = 0;
            for(var j of result){
                count = j.name == i.name ? count + 1 : count;
            }
            if(count == 0)
                result.push({
                    name : i.name,
                    arrive : 0,
                    leave : 0
                });
        }
    }
    for(var i of result){
        var temp_sec = [];
        for(j of a){
            if(j.name == i.name){
                var times = j.time.split(':');
                console.log(times);
                var hr = parseInt(times[0]);
                var min = parseInt(times[1]);
                var sec = parseInt(times[2]);
                temp_sec.push(hr*3600 + min*60 + sec);

                var balance_arrive = Math.min.apply(null, temp_sec);
                var balance_leave = Math.max.apply(null, temp_sec);

                var sec_arrive = balance_arrive%60;
                sec_arrive = sec_arrive < 10 ? '0' + sec_arrive : sec_arrive;
                balance_arrive = Math.floor(balance_arrive/60);
                var min_arrive = balance_arrive%60;
                min_arrive = min_arrive < 10 ? '0' + min_arrive : min_arrive;
                var hr_arrive = Math.floor(balance_arrive/60);
                hr_arrive = hr_arrive < 10 ? '0' + hr_arrive : hr_arrive;

                var sec_leave = balance_leave%60;
                sec_leave = sec_leave < 10 ? '0' + sec_leave : sec_leave;
                balance_leave = Math.floor(balance_leave/60);
                var min_leave = balance_leave%60;
                min_leave = min_leave < 10 ? '0' + min_leave : min_leave;
                var hr_leave = Math.floor(balance_leave/60);
                hr_leave = hr_leave < 10 ? '0' + hr_leave : hr_leave;

                i.arrive = hr_arrive + ':' + min_arrive + ':' + sec_arrive;
                i.leave = hr_leave + ':' + min_leave + ':' + sec_leave;

            }
        }

    }
    return result;
}
document.getElementById('ex-usage-48').innerHTML = '\nworkingHour([\n' +
                                                '{name: \'James\', time: \'08:05:12\'},\n' +
                                                '{name: \'James\', time: \'08:08:17\'},\n' +
                                                '{name: \'James\', time: \'08:22:09\'},\n' +
                                                '{name: \'John\' , time: \'08:35:28\'},\n' +
                                                '{name: \'James\', time: \'17:35:11\'},\n' +
                                                '{name: \'John\' , time: \'17:40:16\'}\n' +
                                                ']);';
document.getElementById('ex-output-48').innerHTML = '\n' + JSON.stringify(workingHour([
                                                {name: 'James', time: '08:05:12'},
                                                {name: 'James', time: '08:08:17'},
                                                {name: 'James', time: '08:22:09'},
                                                {name: 'John' , time: '08:35:28'},
                                                {name: 'James', time: '17:35:11'},
                                                {name: 'John' , time: '17:40:16'}
                                                ]), 'null', '\t');

/* end: ex-48 */

/* start: ex-49 */

/* end: ex-49 */

/* start: ex-50 */

/* end: ex-50 */
