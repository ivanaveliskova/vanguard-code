# Landing Page App

## Running the app

Pull down the app. Make sure to have the latest node (v18.9.0).

Install node modules with

```bash
yarn
```

Then run the app

```bash
yarn start
```

This will open a page on localhost:3000 with the app running.

I have a build script as well, but I haven't set up the app to run the build files automatically currently.

## Technologies used

I chose to use React as that is where I am strongest. I created a simple React app with just webpack, pulling in only what I needed. Normally, I'd run create-react-app but this was a fun challenge to get it up and running with just the basics. Webpack took care of a lot of things for running the app, such as a css loader, file loader, and so on.

I chose to pull in Sass because I find it quick to create a variety of variables I can call.

I used an svg loader (svgr) to pull in svgs as native React components because then I can control their colors (fills) and make them more accessible or hidden if they are more of a visual element. I try to avoid using svg fonts since that can be overridden by accessibility tools (such as something that changes fonts to make it easier to read). They are also more scalable.

## Changes to make

Well, for one I would get better assets directly from the designer. Pulling the image off of Figma always leads to some trouble (as you can see the background is white instead of being the same color as the rest of the background).

Additionally, having other assets provided (svgs, fonts, etc). I couldn't find the font that Figma said was being used, so I used a sans-serif font that is commonly used off of Google fonts.

I'd make better use of dividing up my components and probably pull in Storybook to style the components outside of the app individually.

Better organization of the root files as well. Coming up with folder names quickly is a challenge sometimes, but being able to keeps my Sass files and JS files together makes it easier to see what is being changed where.

Additionally, I'd break down the base components even further (an input and then use that within the search bar).

It was quick for me to use flex to position everything on the page, but for a more manageable layout, I'd probably use CSS grid.

It's mostly responsive, I think I would instead have the image either be smaller, or hidden on mobile sizes. The heading font can be smaller so it can fit on mobile without having to wrap individual words. The top list of links would probably be better as a hamburger menu with a slide out.

I'd set up the build function to update the bundle numbers in the index.html page.
