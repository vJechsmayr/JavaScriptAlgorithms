/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if ( !num ) return 'Zero';
    if ( num > 999999999999 ) return 'Number too high';

    let word = '';
    if ( num < 1000 ) {
        word += convertLessThanAThousandToWords( num );
    } else {
        let unit;
        let multiplier;
        switch( true ) {
            case num >= 1e9:
                unit = 'Billion';
                multiplier = 1e9;
                break;
            case num >= 1e6:
                unit = 'Million';
                multiplier = 1e6;
                break;
            case num >= 1e3:
                unit = 'Thousand';
                multiplier = 1e3;
                break;
            default:
        }

        const x = Math.floor( num / multiplier );

        word += `${convertLessThanAThousandToWords( x )} ${unit} `;
        
        const remaining = num - ( x * multiplier );
        if ( remaining ) {
            word += numberToWords( remaining );
        }
    }

    return word.trim();
};

/**
 * Converts a number less than 1000 into words
 * @param {number} num - A number less than 1000
 * @returns {string}
 */
var convertLessThanAThousandToWords = function(num) {
    if ( !num ) return ''

    let word = '';
    const MAPPING = {
        HUNDREDS: {
            1: 'One Hundred',
            2: 'Two Hundred',
            3: 'Three Hundred',
            4: 'Four Hundred',
            5: 'Five Hundred',
            6: 'Six Hundred',
            7: 'Seven Hundred',
            8: 'Eight Hundred',
            9: 'Nine Hundred'
        },
        TENS: {
            1: 'Ten',
            1.1: 'Eleven',
            1.2: 'Twelve',
            1.3: 'Thirteen',
            1.4: 'Fourteen',
            1.5: 'Fifteen',
            1.6: 'Sixteen',
            1.7: 'Seventeen',
            1.8: 'Eighteen',
            1.9: 'Nineteen',
            2: 'Twenty',
            3: 'Thirty',
            4: 'Forty',
            5: 'Fifty',
            6: 'Sixty',
            7: 'Seventy',
            8: 'Eighty',
            9: 'Ninety'
        }, 
        ONES: {
            1: 'One',
            2: 'Two',
            3: 'Three',
            4: 'Four',
            5: 'Five',
            6: 'Six',
            7: 'Seven',
            8: 'Eight',
            9: 'Nine'
        }
    };

    const hundreds = num / 100;
    const tens = num / 10;
    if ( hundreds >= 1 ) {
        const key = Math.floor( hundreds );
        word += `${MAPPING.HUNDREDS[ key ]} `;
        word += convertLessThanAThousandToWords( num - ( key * 100 ));
    } else if ( tens >= 1 ) {
        let key = Math.floor( tens );
        if ( tens < 2 ) {
            key = tens;
        }
        word += `${MAPPING.TENS[ key ]} `;
        word += convertLessThanAThousandToWords( num - ( key * 10 ) );
    } else {
        word += `${MAPPING.ONES[ num ]} `;
    }

    return word.trim();
}
