# Week07-Assignment

# Project name: Build an App Which Fetches Data from an API

### GitHub link: https://github.com/vinay019/Week07-Assignment

### Live Github Pages link: https://vinay019.github.io/Week07-Assignment/

### Live Render link: https://week07-assignment-new.onrender.com/

### Team members (if in a group project): N.A.

## Project description:

Build an app which uses an API and also allows a user to interact with it.

## Problem domain:

Forms and User Input
Fetch
APIs
DOM Manipulation
Arrays and Array Methods
Functions
Problem Solving, Analytical Thinking, Reading Documentation.
Mobile Responsiveness

## User stories:

Dev Skills & Industry Practices:

🐿️ As a User, I am able to view the app on mobile as well as desktop and it should look good on both!

🐿️ As a Developer, I should ensure that content is presented well and the app has some thought given to design, so that it is more appealing to use.

🐿️ As a Developer, I should ensure that form inputs have got associated descriptions to prevent confusion.

🐿️ As a User with accessibility needs, my use of the app has been given consideration, so that I can enjoy it too.

Programming Logic:

🐿️ As a User, I am able to submit a form to the app.

🐿️ As a User, I can see some data displayed on the page after my form submission.

## Stretch User Stories

Dev Skills & Industry Practices:

🐿️ As a Developer, I should ensure that the app looks great on multiple screen sizes and the design/style changes meaningfully depending on that.

🐿️ As a Marketer, I have branded the app and applied brand guidelines, and explained what these are, to help the app stand out.

🐿️ As a Developer, I have chosen a Methodology or used multiple principles and explained what these are, so that the user has a greater experience.

🐿️ As a User with accessibility needs, I can use the app with delight, being able to navigate and make sense of the app with ease.

Programming Logic:

🐿️ As a Developer, I should write DRY code so that my app is easier to maintain.

🐿️ As a Developer, I have used extra query parameters in the fetch request to modify the API results.

🐿️ As a User, I can navigate through sets of results.

🐿️ As a User, I can do more than just enter text in my search.

🐿️ As a Developer, I have used more than one API, to give the app enhanced functionality.

🐿️ As a Developer, I have used an NPM package, to give the app enhanced functionality.

## Wireframe(s): N.A.

## Instructions on how to run your app:

Please visit the Github pages link or the Render link. Once there, please select a date to view NASA's Astronomy Picture of the Day for that selected date. If an image or an HD image isn't available for the choosen date, the site will display an error message.

## Lighthouse report: N.A.

## Reflections:

Please mention the requirements you met and which goals you achieved for this assignment.

### 🎯 What requirements did you achieve?

I believe I have now met all the base requirements. Previously I had missed adding the assesibility elements for the form, date input and the submit buttons. I have now added Aria labels for them. As for the description of the images for those who are sight disabled, at the moment the images have alt tags. In the future I should consider adding the desciption of the image as well, which will give the screen reader users the infomation about the selected image, such as what the image is about, who took it, what was used to take it etc. In the interest of time, I've skipped that step for now.

As for the stretch goals, I believe the app does render okay on mobile devices and also on my laptop and my extended larger display. There could be some more tweaking done to make the font sizes more apt for the screen being used. I want the image to take the centre stage and not detract or overwhelm the user with too much text on the page. I changed the colours of the form and the submit button to blend it better. I have also rectified an issue I had earlier where the error message was taking up the top of the screen, rendering it not easily readable on a mobile device. I have fixed that now by assigning a div for it through JS DOM and assigning a CSS class to position it appropriately.

### 🎯 Were there any requirements or goals that you were not quite able to achieve?

I just noticed that there are quite a few stretch goals that I did not meet. Looking at it now, I think I should have added some more functionality to the web app and also perhaps added buttons so the user can easily go back and forth the dates without having to enter the dates each time.

### 🎯 If so, could you please tell us what was it that you found difficult about these tasks?

I did not attempt the additional stretch goals I did not meet. I'd attribute that to poor time management and getting overwhelmed with all the pending assignment submissions.

### What went really well and what could have gone better?

Like the week 06 assignment, I believe I was able to achieve what I had envisioned. I spent a lot of time trying to figure out which API to use. I had tried out a couple but it wasn't to my liking or rather didn't get my creative juices flowing. So to keep my interest levels high and stay motivated I approached this using the NASA APOD API. I also liked the Mars Rover one, but I found that a bit complicated so didn't progress on that.

### Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials):

As for the resources, I used my week 06 assignment as the base and used that as a template for what I wanted to achieve. I removed the thumbnails, buttons etc and tweaked it. I also took guidance from ChatGPT when I got stuck at certain areas such as how to implement the API Key. The NASA API did mention that there's a limit to the DEMO key provided as a default but I thought although the usage is not expected to be high, it'll be better I learn how to implement that. I took guidance from ChatGPT on how to do that. Although, Bertie and also GitHub had warned me later that a secrret key was exposed, i.e. the unique API key whcih was assigned to me, Bertie did mention that we will be learning how to not expose such keys in coming weeks. Once that is covered I will rectify this issue.

I also reviewed the NASA API website: https://api.nasa.gov/ which had good explanations of how to use the APOD API. I also refered to the Week07 code Frankie pushed to the DI003 githib repo.

### Describing errors or bugs you encountered while completing your assignment:

I spent some time trying to figure out if I should use the url or the hdurl data from the API. I decided to stick with hdurl since the images looked a lot better. I did research a bit on this and learnt that I could use a or || so depending on what's available, the relevant image is loaded. But I thought I'd keep it as hdurl because I didn't want a low quality image being loaded. Will need to spend some more time investigating this and also possibly adding the description of the image as an overlay somwhere.

A minor issue which I haven't fixed is with the image resizing. At the moment I have kept it to cover. When I tried contain, the look I was ensvisioning was not achieved. I do realise that in some images, due to what I've done, some minor elements are hidden due to this. I will need to figure out a better way to display this but not make it look exactly like NASA's APOD page: https://apod.nasa.gov/apod/astropix.html

There was this issue with the error message display, which I have fixed today. I assigned a div tag for it with p tags to space them out through JS' DOM and then applied a class similar to the heading class.

Although the app is responsive, I think there a little more tweaking I will need to do with the media queries to achieve the proper propotions depending on the device the site is viewed on.

Lastly, the site is also live on render. Thanks to Bertie, I know that for the path, for static websites with no folder structure we should use ./ Happy days!

### References:

DI003 Github repo

https://apod.nasa.gov/apod/astropix.html

https://api.nasa.gov/

OpenAI's ChatGPT
