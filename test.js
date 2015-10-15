confirm("Do you want to play this game");
var  name = prompt("What is your name");
document.write(name + " " + "welcome to my game!");
document.write("<br>Pick a Weapon");
document.write("<br>Gun");
document.write("<br>Knife");
var weapon = prompt("Which Weapon do you want?");
if (weapon === 'Gun')
{
  document.write("<br>You got a gun!");
}
else {
  document.write("<br>You got a Knife!");
}
document.write("<br> There are two people charging at you with a knife");
document.write("<br> Run or Stay and fight?")
var dowhat =prompt("What do you do?");
if (dowhat === 'Run')
{
  document.write("<br> You safely run away");
  document.write("<br> Thanks for Playing");
}
else {
  document.write("<br> You decide to stay and fight");
}
document.write("<br>So you decided to stay and fight");
if (weapon === 'Gun')
{
  document.write("<br>You Shot the two people congratulations you are a murderer");
}
else {
  document.write("<br>You Stabbed the two people congratulations you are a murderer");
}
document.write("<br>Now what do you do?");
document.write("<br>Go home and hide or turn your self in?");
var Dec = prompt("Go home or turn yourself in?");
if (Dec === 'Go home')
{
  document.write("<br>You go home and hide and hope no one finds you");
}
else {
  document.write("<br>You turn yourself and you go to jail for the rest of your life");
  document.write("<br>Thanks for Playing");
}
document.write("<br>When you get home you here sirens blairing like crazy from were you murdered the two people");
document.write("<br>Do you stay home or Get in your car and drive away as far as you can?")
var car =prompt("Stay home or Drive away");
if (car === 'Drive')
{
  document.write("<br>You drive away as stealthly as you can and you esacpe the cops for now");
}
else
{
  document.write("<br>You turn off all your lights and stay hidden for the rest of the night <br> Nothing happens all night long you are safe for now");
  document.write("<br>You thought you were safe the police were waiting for you outside your door all night<br> once you stepped outside they shot you on sight");
  document.write("<br>You are dead thanks for playing my game");
}
document.write("<br>You Need to decide if you buy a plane ticket to europe or hide in the woods");
var plane =prompt("plane ticket or hide in the woods");
if (plane === 'plane ticket')
{
  document.write("<br>You get on the plane then you see men with suit get on the plane and they start running after you");
}
