var x=document.getElementById('btn');
x.addEventListener('click',fn);



function fn()
{
  let name=confirm('Are you sure you want to navigate away from this page?');
  window.location.href = "list.html";
}
function fn1()
{
    let name=confirm('Are you sure you want to navigate away from this page?');
   window.location.href = "index.html";
}