/**
 * A simple lightbox, built for enhancing static sites.
 * @license MIT
 */
"use-strict";

import "./simple-lightbox.css";

/**
 * Setup lightbox, if there is any to setup
 */
function doSetup() {
    /** @type {HTMLElement[]} */
    const lightboxes = document.querySelectorAll("[data-lightbox]");
    lightboxes.forEach((lightbox) => {
        const lightboxType = lightbox.dataset["lightbox"];
        if (lightboxType === "auto-discover") {
            /** @type {HTMLImageElement[]} */
            const imgs = lightbox.querySelectorAll("img");
            for (const img of imgs) {
                if (img.dataset["lightboxIsSetup"] === "true") { continue; }
                setupImageLightbox(img);
                img.dataset["lightboxIsSetup"] = "true";
            }
        }
    });
}

/**
 * Setup a lightbox for an image element
 * @property {HTMLImageElement} imgElement - The image element to setup
 */
function setupImageLightbox(imgElement) {
    imgElement.addEventListener("click", () => {
        // remove existing lightboxes
        document.body.querySelectorAll("#lightbox").forEach(v => v.remove());
        // create lightbox
        const baseContainer = document.createElement("dialog");
        baseContainer.id = "lightbox";
        baseContainer.addEventListener("close", () => baseContainer.remove());
        const lightboxImg = document.createElement("img");
        lightboxImg.src = imgElement.src;
        const closeBtn = document.createElement("button");
        closeBtn.type = "button";
        closeBtn.title = "Close";
        closeBtn.innerText = "X";
        closeBtn.addEventListener("click", () => baseContainer.remove());
        baseContainer.appendChild(closeBtn);
        baseContainer.appendChild(lightboxImg);
        document.body.appendChild(baseContainer);
        // show lightbox
        baseContainer.showModal();
    });
}

/**
 * Ensure setup is always called,
 * no matter how script is included
 */
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", doSetup);
} else {
    doSetup();
}
