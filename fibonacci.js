<script>

var p1 = function(n){
  if(n==0) 
  	return 0;
  else if (n==1)
  	return 1;
  else
     return p1(n-1)+p1(n-2);
}

var p2 = function(m){
  var arr = Array(m+1);
  arr[0]=0;
  arr[1]=1;
  for(var i=2;i<=m;i++)
    arr[i]=arr[i-1]+arr[i-2];
  var res = arr[m];
  arr=null;
  return res;
}

var p3 = function(a){
  var sum=0;
  var a0=0;
  var a1=1;
  for(var i=2;i<=a;i++)
  {
    sum=a0+a1;
    a0=a1;
    a1=sum;   
  }  
  return sum;
}
var n = 50;
var t0=performance.now();
p1(n);
var t1=performance.now()-t0;
alert("p1 time:"+t1);
//---------------------
t0=performance.now();
p2(n);
t1=performance.now()-t0;
alert("p2 time:"+t1);
//---------------------

t0=performance.now();
p3(n);
t1=performance.now()-t0;
alert("p3 time:"+t1);
//---------------------

</script>

