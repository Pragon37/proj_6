# Proj_6 :JustStreamIt :UI for a web application

[Project 6](https://github.com/Pragon37/proj_6)

JustStreamIt is a web site inspired from the Netflix UI, which displays 8 movies with the best imdb ratings
for 4 different genres.

## Installing / Getting started

It is implemented using HTML,CSS,JS. It takes the movies information from a local API : OCMovies-API.
To retrieve the API data, an API server must be first started.
To install the API follow instructions at :
[OCMovies-API-EN-FR](https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR)
Once the API is installed locally :

```windows shell
cd ocmovies-api-en
env/Scripts/activate
python manage.py runserver
```
Then for windows from File Explorer Drag and drop index.html into a navigator windows.



## Features

* What's the main functionality
Display the best rated movie. On clicking the + on the upper left of the thumbnail, a context window opens up
and displays the movie name, its release year, imdb score, directors and actors.

Similarly to the best movie are displayed below movies organized in 4 categories:
-Movies with the highest imdb rating
-Drama movies with the highest imdb rating
-History movies with the highest imdb rating
-Comedy movies with the highest imdb rating

There are 8 movies per category. At most 5 are displayed on the navigator page. The remaining 3 are shown after clicking
next button on the right side of the screen. Clicking the left side button that is displayed after sliding to the right
returns to the initial display.

 
## Links


- Project homepage : [Project 6](https://github.com/Pragon37/proj_6)
- Repository: https://github.com/Pragon37/proj_6.git


## Author

Pierre : pragon37@outlook.fr

##Sources
Project which draws on:
[JavaScript Tutorial | Creating a Modal with JavaScript | Part 1](https://www.youtube.com/watch?v=o5ffh3KUaTM)
[JavaScript Crash Course For Beginners](https://www.youtube.com/watch?v=hdI2bqOjy3c)
[Carousel slider tutorial with HTML, CSS, JavaScript](https://www.youtube.com/watch?v=QruodbmSq0A&t=365s)
[Episode 5: Carousel with multiple elements visible - markup - part 1](https://www.youtube.com/watch?v=wx2dBS3vtFY&list=PLRCvSNiMyEmxBfXuFuQ70uxHcV9itxfTZ&index=6)
[Episode 5: Carousel with multiple elements visible - markup - part 2](https://www.youtube.com/watch?v=HAn_WEhkcLc&list=PLRCvSNiMyEmxBfXuFuQ70uxHcV9itxfTZ&index=5)
[Creating Multiple Modals on a Single Page](https://stackoverflow.com/questions/40645032/creating-multiple-modals-on-a-single-page)
