var restoreIpAddresses = function(ques) {
    
    if (ques.length > 12 || ques.length < 4) return [];
    const result = [];
    restoreIpAddresses_(ques, [], result);
    return result;

};

const restoreIpAddresses_ = (ques, recAns, result) => {
    
    if (recAns.length === 4 && !ques.length) {
        result.push(Array.from(recAns).join('.'));
        return;
    }

    for (let i = 1; i < 4; i++) {
        
        if(ques.length < i) continue; 

        const str = ques.slice(0,i);
        if ((str.length > 1 && str[0] === '0') || Number(str) > 255) continue;
        
        recAns.push(str);
        restoreIpAddresses_(ques.slice(i), recAns, result);
        recAns.pop();

    }
}

//test Input.
var ans=restoreIpAddresses("25525511135");
console.log(ans);