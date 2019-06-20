# Psuedocode:

## Site Structure: 

```
Nav Bar - Title, Instructions, Score
Jumbotron - Big Title, Instructions
Main Content - Actual Twelve Cards
Footer
```

### Steps:

**1. Onload:** 

* Throw the twelve images in random order
* Throw the score


**1. Click an Image:**


* If it _was_ clicked before:
    1. Display incorrect guess in nav bar
    1. Set the score to zero _but keep the highscore_ and reset the photos for if they've been clicked
* If it _wasn't_ clicked before:
    1. Display correct guess in nave bar
    1. Increment the score by one 
    1. Shuffle the photos

### Components:

1. Picture Card (picture, whether or not it's been clicked)
1. Guess result (you guessed right or wrong)
1. Score(?)
1. Top Score(?)