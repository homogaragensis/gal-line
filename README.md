# GAL-LINE
This is the source code for GAL-LINE, a silly web game developed by Homo Garagensis.

This repository is also the source code accompanying the
[*GAL-LINE: How to Make A Very Serious Game With JavaScript*](https://homogaragensis.github.io/gal-line-book)
development book.

## Development workflow
The workflow is the following:

- On branch `main` we keep the actual current game release, which for now is not still available.
When branch main gets updates, you will hear news on reddit and itch.io!
- On branch `dev` we merge the chapter branches, which are related to the book. Indeed, each time we want to make a conceptual step forward we:
    1. Merge the current `chapterN` branch onto `dev`
    2. Create the new `chapterN+1` branch
    this will tipically also be followed shortly by the release of a new chapter in the book.
- On branches `chapterN` we develop the actual game!!

## License

The licensing of an openly developed, commercial product is complicated.
We wanted to keep the maximum freedom for the user while not losing our rights on the artistic component of the game.
For this reasons the source code in this repository is licensed under the MIT License, 
while the sample assets and artwork contained in this repository are licensed under CC BY-NC 4.0.

The actual game, comprised of all built code, artwork, characters, audio, names, logos, and other creative
assets are not covered by any of these licenses and remain the property of Homo Garagensis, all rights reserved.
For more details look at the included [LICENSE.md](https://github.com/homogaragensis/gal-line/blob/main/LICENSE.md) file.

With this we hope to help young game developers in their personal growth without inciting them to make clones of our game.
