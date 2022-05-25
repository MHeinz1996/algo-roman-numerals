// 1. Write a method TO_ROMAN, TO_ROMAN takes in INPUT_NUMBER (an arabic number)
// 2. Create a OUTPUT string, set to ''
// 3. Create a ROMAN_NUMERAL_TO_ARABIC_MAP that includes roman numerals as keys, arabic numbers as values
// 4. Iterate over ROMAN_NUMERAL_TO_ARABIC_MAP, keep track of ROMAN_NUMERAL and ARABIC_NUMBER
// 5. Set EVENLY_DIVISIBLE_TIMES = INPUT_NUMBER / ARABIC_NUMBER:
// 6. If EVENLY_DIVISIBLE_TIMES >= 1
//   6a. Append ROMAN_NUMERAL to OUTPUT EVENLY_DIVISIBLE_TIMES
//   6b. Subtract ARABIC_NUMBER from INPUT_NUMBER EVENLY_DIVISIBLE_TIMES
// 7. Return OUTPUT

exports.toRoman = function(num) {
    let output = [];
    const romanNumeralToArabicMap = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    while(num != 0) {
        for(let key in romanNumeralToArabicMap) {
            if((num/romanNumeralToArabicMap[key]) >= 1) {
                output.push(key);
                num = num - romanNumeralToArabicMap[key];
                break;
            }
        }
    }
    return output.join('');    
};