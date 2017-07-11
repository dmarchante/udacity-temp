/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

// Your code goes here!
var familyOne, familyTwo, bruce, madison, hunter;

familyOne = $('#family1');

familyTwo = $('<div id="family2"><h1>Family2</h1></div>');

bruce = $('<div id="bruce"><h2>Bruce</h2></div>');

madison = $('<div id="madison"><h3>Madison</h3></div>');

hunter = $('<div id="hunter"><h3>Hunter</h3></div>');

familyTwo.insertAfter(familyOne);
familyTwo.append(bruce);
bruce.append(madison);
bruce.append(hunter);