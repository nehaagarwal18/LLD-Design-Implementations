# LLD-Design-Implementations
This repository constitutes popular LLD Design Implemetations, majorly asked in system design interviews

# Tech Stack used
1. react
2. react-dom
3. react-router-dom

### LLD Examples

- Products Page - Shimmer UI
  - Use dummyjson apis to fetch the list of products 
  - For the duration of load time, instead of using the loader use shimmer UI
  - Construct a self developed shimmer UI
  - Post load show the product cards list
  - Each product card will show image, title, description, price, rating, tags

- Multi Language Support
  - Create a content mapper which takes the language as the key and gives the content for multiple attributes
  - Create a constant to define the supported language
  - Create About us page on /about route
  - Add a language selection option on the header which gets populated through the constant langauges supported
  - On change of language update the language context which can be consumed in About page to show the content based on the language selected by user.

- Infinite Scroll
  - Create a recipes container which will hold all the recipes
  - At intial load just load the 10 recipes
  - When the user reaches to the end of the scroll, load additional 10 recipes
  - Keep on doing this till the data set gets exhausted

- Accordian
  - Create a route accordian
  - Call the dummy json api to get the list of qoutes
  - Create a quotes container which will be maintaining the state for all the individual quotes
  - If the activeIndex is the index we clicked it will show the quote, if not then hide the quote

- Nested Comments
  - In this usecase, you will have a data set in which each of the comment can have replies and each of the replies can have more replies to it. This can be nexted to n level
  - Create comments container and iterate over the comments to show the comments

- Image Slider/Carousel
 - Create a mock file with few image srcs
 - Create a slider which has left and right button to navigate from one photo to another
 - Add egde case conditions to loop the photo in case we reach to the end of it
 - Add transition to ease out the change with translate property to look smooth while sliding the images

- Pagination
 - Use dummy json to fetch user details
 - Create a pagination container which will have option to go next, prev or to a specific page
 - It also has an option to have a page limit selection
 - Create a table component to render the number of results in form of a table

- Live Chat
  - Create a video container component which will have a video and chat window
  - 
