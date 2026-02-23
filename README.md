# Simple Lightbox
A very simple embeddable lightbox designed to enhance static sites.

> Currently WIP, functionality may not exist.

## Goals
1. Don't interfere when JS is disabled
2. Easy to integrate into a static site
3. As minimal feature set as possible

## Usage
### Auto Discover
When access to whole content is not possible, autodiscovery can search and create automatically for all compatible elements.

The following example will generate a lightbox handling for all `<img/>` elements that are children of the `<article/>`.

```html
<article data-lightbox="auto-discover">
    <h2>My Pictures</h2>
    <img src="null" />
    <img src="null" />
    <img src="null" />
</article>
```

### CSS Styling
Simple Lightbox comes with a stylesheet to provide some basic styling. You can use this as an example or starting point to match your site theme.

When a lightbox is open it will append a `<dialog/>` element to the body, see the following example code:

```html
<dialog id="lightbox" open>
    <button type="button" title="Close">X</button>
    <img src="null">
</dialog>
```

When an element is setup to open a lightbox, you can style using the data attribute. This attribute will be created when the discovery function runs.

```html
<style>
    img[data-lightbox-is-setup="true"]:hover {
        filter: brightness(35%);
    }
</style>

<img src="null" data-lightbox-is-setup="true" />
```

## License
This project is Copyright (c) 2026 Leo Spratt, licences shown below:

    MIT. Full license found in `LICENSE.txt`
