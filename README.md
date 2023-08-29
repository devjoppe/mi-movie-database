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

### GridMovies
#### Description
GridMovies uses 4 properties:``url``  ``identifier`` ``option`` ``useRelated``

``url: string`` : Define the base-url 

``Identifier: string``: Can be an ID or something uniq to construct the endpoint.

``Option: string[]`` : (Optional) Is being used to construct endpoint

``useRelated: boolean`` : This is used for selecting between endpoints that are specific and endpoints with a general fetch request.


## 📦 Components
### Description
**Components CAN handle:**
* Its own _Interfaces_

### GridButtons
#### Description
GridButtons use 2 properties, ``id``  and ``title/name``.
This component is designed for genre buttons and contains a grid system that will display the buttons in a certain order.

### ImageAvatar
#### Description
ImageAvatar use 3 properties:
* ``data`` - Contains the dataset
* ``displayData`` - If text data as "name" and "character" should be displayed with the avatar.
* ``size`` - Size of the image in the avatar

## 📝 Interface
### Description
The folder Interface will contain all **GLOBAL** interfaces for the main data that is collected from the API.

``Actors``
``Genres``
``Movie``
``Movies``

## 🆎 Types
### Description
Types in this case imports all the interfaces to construct the types for the returning data from the API where the endpoint is similar. Example of this is ``movieActorType`` and ``allRelatedActorMovieType``.
