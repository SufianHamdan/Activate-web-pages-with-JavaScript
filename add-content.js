var name = prompt('Enter your name please');
document.writeln('Hello '+name);

var color = prompt("What color do u wish the page would be?!");
document.bgColor = color
document.writeln('You chose the ' +color+ '  for the background :)');

var age = prompt('Enter your age please');
if(age < 18)
{
alert('You are young');
}
else if(age > 18 && age < 120){
    alert('You are an adult')
}
else 
{
    alert('Stop playing :)');

}



var name = confirm('All done!');