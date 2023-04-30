/* This is a WIP; I'm not a developer, so this is as much of a learning experience for me as it is for you. This version of the script, as an example will remove from the search result set any item that has the word 'starter' in its title. You can mess around to do what you want.

Essentially outside messing around with the Etsy API this is the best way I found. 

Wish list items include how to actually destroy the elements from the screen insted of just hiding them. 

*/

// Get all the links on the page
var links = document.getElementsByTagName('a');

// Loop through each link
for (var i = 0; i < links.length; i++) {
  var link = links[i];

  // Check if the link's Title property contains the word 'starter' in any case
  if (link.title && /\bstarter\b/i.test(link.title)) {
    // Hide the link's parent
    link.parentElement.style.setProperty('display', 'none', 'important');
  }
}
