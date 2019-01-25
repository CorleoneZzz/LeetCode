var romanToInt = function(s) {
    var x=0;
    var total=0;
    for (let i=0;i<s.length;i++)
    {
        var y=s[i]+s[i+1];
            if(y!=="IV"&&y!=="IX"&&y!=="XL"&&y!=="XC"&&y!=="CD"&&y!=="CM")
            {
                switch (s[i]) {
                    case "I":
                        x=1;
                        break;
                    case "V":
                        x=5;
                        break;
                    case "X":
                        x=10;
                        break;
                    case "L":
                        x=50;
                        break;
                    case "C":
                        x=100;
                        break;
                    case "D":
                        x=500;
                        break;
                    case "M":
                        x=1000;
                        break;
                }
                console.log(y);
                console.log(y!=="IV"&&y!=="IX"&&y!=="XL"&&y!=="XC"&&y!=="CD"&&y!=="CM")
            }

            else {
                if (i < s.length - 1) {
                    switch (y) {
                        case "IV":
                            x = 4;
                            break;
                        case "IX":
                            x = 9;
                            break;
                        case "XL":
                            x = 40;
                            break;
                        case "XC":
                            x = 90;
                            break;
                        case "CD":
                            x = 400;
                            break;
                        case "CM":
                            x = 900;
                            break;
                    }
                }
            }
            total=total+x;
        }
    console.log(total)
};
romanToInt("IV");