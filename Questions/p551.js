var a=0,l=0,p=0;
var checkRecord = function(s) {
    for(let i=0;i<s.length;i++)
    {
        if(s[i]==='A')
        {
            a+=1;
        }
        else if(s[i]==='L'&&s[i+1]==='L'&&s[i+2]==='L')
        {
            l+=1;
        }
        else
        {
            p+=1;
        }
    }
    return a <= 1 && l < 1;
};
console.log("false"+checkRecord("PPALLL"));
console.log("false"+checkRecord("LLPPPLL"));
console.log("true"+checkRecord("PPALLP"));

console.log(a,l);