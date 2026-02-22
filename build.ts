#!/usr/bin/env bun
await Bun.build({
    entrypoints: ['simple-lightbox.js'],
    outdir: './dist',
    naming: '[dir]/[name].[hash].[ext]',
    minify: true,
    sourcemap: 'linked',
    banner: '/**\n * @license MIT\n */', // bun strips license tag out
});
