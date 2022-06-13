// 13. Roman to Integer

function romanToInt(s) {
    let table = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
    }
    
    let sum = 0;
    
    for(let i=0; i<s.length; i++){
        console.log(s[i]);
        if(table[s[i]] < table[s[i+1]]){
            sum -= table[s[i]]
            console.log(sum)
        } else {
            sum += table[s[i]]
            console.log(sum)
        }
    }
    console.log(sum);
    return sum;
}

romanToInt('MCMXCIV');