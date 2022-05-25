def to_roman(num):
    input = num
    output = []

    roman_numeral_to_arabic_map = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1,
    }

    while(num != 0):
        for key in roman_numeral_to_arabic_map:
            if((num/roman_numeral_to_arabic_map[key]) >= 1):
                output.append(key)
                num = num - roman_numeral_to_arabic_map[key]
                break

    print(input, '==', ''.join(output))
    return ''.join(output)