n = 10

f = [n]
f[0] = 0
f[1] = 1
for(var i = 2; i <= 10; i++)
	f[i] = f[i-2]+f[i-1];


for(var i = 0; i <= 10; i++)
	console.log(f[i])
