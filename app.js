
function validate()
{
var Date = [];
Date.push({Month:1,Days:31},{Month:2,Days:29},{Month:3,Days:31},{Month:4,Days:30},{Month:5,Days:31},{Month:6,Days:30},{Month:7,Days:31},{Month:8,Days:31},{Month:9,Days:30},{Month:10,Days:31},{Month:11,Days:30},{Month:12,Days:31});
//Date.push({id:200,name:'Mahesh',age:35});

if (document.getElementsByName('day')[0].value >31 || document.getElementsByName('month')[0].value >12 || document.getElementsByName('year')[0].value.length >4)
{
alert("Invalid Date");
return;
}

var m=document.getElementsByName('month')[0].value;

if (document.getElementsByName('day')[0].value>Date[m].Days)
{
alert("Invalid Date");
return;
}
if(document.getElementsByName('month')[0].value==2)
{

if(document.getElementsByName('year')[0].value%100==0)
{

if(document.getElementsByName('year')[0].value%400==0)
{
if(document.getElementsByName('day')[0].value>29)
{
alert("Invalid Date");
return;
}
else
alert("Valid Date");

}
else
{
if(document.getElementsByName('day')[0].value>28)
{
alert("Invalid Date");
return;
}
else
alert("Valid Date");
}
}

else
{
if(document.getElementsByName('year')[0].value%4==0)
{

if(document.getElementsByName('day')[0].value>29)
{
alert("Invalid Date");
return;
}
else
alert("Valid Date");
}
else
{
if(document.getElementsByName('day')[0].value>28)
{
alert("Invalid Date");
return;
}
else
alert("Valid Date");

}

}

}
alert("Valid date");
}
