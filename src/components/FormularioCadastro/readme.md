# Step-to-Step 🔋

Now that we have our layout done, we can go back and think about the functionality we want for the application. For every note I write on the form when I click on create note it has to create a new card for me with the title and note I wrote on the form. For that, let's start dealing with the form and learn how we deal with events in react.

**In this behavior, let's get a constructor so we can add the behaviors correctly inside our form class! And so we make it be built from a parent class, which would be App, since it manages to make all the behaviors work and calls the rendering of HTML structure.**

**The function we defined, if it calls handleChange(), it will pass an event parameter that will be done so that we can use it as the target target of the event, that is, every time we put some content inside that tag, it finally will play what the code asks for, and in the given example it will be a message on the console.**

**Afterwards, we just go to HTML and call with onChange, the behavior of the function we defined. And realize something very important! That we've defined a method called bind() so that it will work as a way that we don't need to directly call a method variable reference. Inside React, it doesn't work for you to directly call a reference of this method, so we need to use the bind method so that it works normally passing through the parameter, which in this case would be a this, since it is an interactive function that depends on the parameter and interaction of the user with the input.**