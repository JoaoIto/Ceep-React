# Step-to-Step 🔋

Now that we have our layout done, we can go back and think about the functionality we want for the application. For every note I write on the form when I click on create note it has to create a new card for me with the title and note I wrote on the form. For that, let's start dealing with the form and learn how we deal with events in react.

**ListaDecategorias component does two functions... One of an input to add any and all categories to a select that the user can use as an identifier the note he wants.**

**This select also has this onchange function, that every category that is selected will be assigned to the grade from a function that takes this option and directly assigns the property of the new grade. _handleCategoryChange(event). It will be responsible for identifying that chosen option and already being assigned, with a target function, so we just need to put an onChange attribute in the select tag!**