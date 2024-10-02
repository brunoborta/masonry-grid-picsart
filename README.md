# Virtual Masonry Grid in React + TypeScript

A highly efficient **Virtual Masonry Grid** built with **React** and **TypeScript** that dynamically loads images and supports infinite scrolling. This project leverages performance-optimized techniques for rendering large sets of images without performance degradation.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Performance Techniques](#performance-techniques)
- [Challenges and Solutions](#challenges-and-solutions)

## Demo

![Demo](demo.gif)

## Features

- **Infinite Scrolling**: Automatically loads new images as you scroll.
- **Responsive Masonry Layout**: Dynamically adjusts to different screen sizes.
- **Intersection Observer**: Uses Intersection Observer API to detect when new images should be loaded.
- **Modal for Image Preview**: Click an image to open a detailed modal view.
- **Optimized Loading**: Implements lazy loading for images to improve performance.

## Technologies

This project is built with the following technologies and tools:

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Intersection Observer API**: For detecting visibility of images and triggering pagination.
- **Unsplash API**: Fetches images dynamically from the Unsplash service.
- **GSAP**: For animations.
- **CSS Grid/Flexbox**: For implementing layouts. Columns to implement the Masonry.
- **React Hooks**: Including custom hooks for handling image loading, scrolling, and intersection observers.
- **Styled Components**: For styling the components in a modular way.

## Setup

To get started with this project, follow these steps:

### Prerequisites

Make sure you have the following installed on your local machine:

- **Node.js** (v14 or higher)
- **npm** or **yarn** (I used yarn and will use yarn for the rest of the explanation)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/brunoborta/masonry-grid-picsart.git
cd virtual-masonry-grid
```

2. Install depenencies
```bash
yarn
```

3. Set up the Unsplash API key
Create a `.env` file from the `.env.example` and set the Unsplash API key like so:
```bash
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
```

4. Run the project in dev mode:
```bash
yarn dev
```

## Usage
The main functionality of the *Virtual Masonry Grid* includes:
1. **Scroll Loading**: Images are loaded as you scroll down. Each time the user reaches the bottom of the viewport, a new batch of images is fetched.
2. **Modal View**: Clicking on any image opens a modal with a full-screen preview.
3. **Lazy Loading**: Images outside the viewport are not loaded until they are needed, improving performance.

To customize the number of images per page, adjust the constant `IMAGES_PER_PAGE` in the Grid Component.

### Infinite Scrolling
The grid automatically fetches new images as you scroll. The **IntersectionObserver** API is used to detect when the last image comes into view and triggers the loading of the next batch.

### Image Modal
When clicking on an image, a modal will display the full screen version of the image with some details like the date it was created and the name of the photographer and a brief description, if any.

### Responsiveness
The layout is responsive and will adjust based on the screen size.

## Challenges and Solutions

### Image Layout in Masonry Grid

I've built this kind of layout a few times, but I always wanted to explore new ways to do it. So I was studying this a week before you sent me this challenge and I realize I could create a complete
Masonry Grid by usind `column-count`, and `column-width` (or the shorthand: `columns`). `Column-count` works very well, but you still have to handle the responsiveness manually using media queries.
By setting the `column-width`, I don't need it. The columns with be at minimal on that size. If the viewport is bigger, the columns will be bigger, and it will split the extra amount of size between the columns on the viewport. As soon as there's space for another column, another column will be shown. With this trick, we can set a full Masonry Grid with one line of code :D

### Intersection Observer for Infinite Scrolling

This was something new to me. I don't remember when I needed to create from scratch something like this. A few weeks ago, I was studying functional programming and observers are one of the foundations for functional/reactive programming. So I wanted to use an observer to create the lazy loading, because it sounds exactly a good case for this.
So the IntersectionObserver API to create a watcher on the last element of the list, and as soon the viewport hits that element, I fetch more images from the Unsplashed API. I liked the solution :D
