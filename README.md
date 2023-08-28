[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/3xRw79B0)

# Documentation

## Structure
Structure of the data flow in the application is as follows:

``App -> Pages -> Sections -> Components``

##  📁 Sections
### Description
The sections are responsible for setting the main layout of a specific section on the page and handle the fetch query depending on what properties it has. Then it will pass down the data to other components that displays the data accordingly.

Section name should reflect what kind of layout that is being used:

``<GridMovies>``
``<GridActors>``
``<MenuGenres>``
``<ListMovies>``