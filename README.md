# Etsy Search
Hides result set items from the search result that have specific words.

I'm not a coder so this is a WIP. 

Currently I got as far a hiding the elemetns from the the page, but not destroying the parent elements so that there no blank holes on the page.

Will update soon.

Steps to use:

1. Download both files into a folder.
2. Go to your Chrome's Extensions tab.
3. Load Unpacked.
4. refresh your Etsy page, and try to do a search for a plant, say "Philodendron," you'll see that you'll not get any results with items that have the word 'starter' in them. You can test by turning off the extension and doing another search.

Feel free to take wha I have and run with it it; would love to add a settings UI and other fancy stuff when I have time. 

Bugs:

1. Will not work once a filter is applied; at this point, you'd have to refresh the page; the filter would still be applied, and the script would fire correctly.
2. Will not fire if you click the 'next' or the number pagination control; to fire, reload like in step 1.

Not sure what the difference is between a full initial load and the load when you click the filter control or the pagination control.
