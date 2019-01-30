var romanToInt = function(s) {
        var total=0;
        for (let i=0;i<s.length;i++) {
            switch (s[i]) {
                case "I":
                    total+=1;
                    if(s[i+1]==='V'||s[i+1]==='X')
                    {
                        total-=2;
                    }
                    break;
                case "X":
                    total+=10;
                    if(s[i+1]==='L'||s[i+1]==='C')
                    {
                        total-=20;
                    }
                    break;
                case "C":
                    total+=100;
                    if(s[i+1]==='D'||s[i+1]==='M')
                    {
                        total-=200;
                    }
                    break;
                case "V":
                    total+=5;
                    break;
                case "L":
                    total+=50;
                    break;
                case "D":
                    total+=500;
                    break;
                case "M":
                    total+=1000;
                    break;
            }
        }
        console.log(total)
    };
romanToInt("MCMXCIV");