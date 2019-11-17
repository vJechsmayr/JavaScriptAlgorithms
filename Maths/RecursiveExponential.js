let recursiveExponential = (x,n) => {
   if(n == 0){
      return 1;
   }
   return x * recursiveExponential(x,n-1);
}