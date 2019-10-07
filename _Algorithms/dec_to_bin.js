function DecToBin(dec){
    let bin='';
    while(dec>0){
        bin=String(dec%2)+bin;
        dec=Math.floor(dec/2);
    }
    return bin;
};