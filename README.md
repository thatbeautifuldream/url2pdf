# 📸 url2pdf

Puppeteer based project for `url` to `png/jpg/pdf` conversion.

<a href="https://milind.live/url2pdf" target="_blank">
  <img src ="https://user-images.githubusercontent.com/28717686/158898870-b85be3d8-36ad-48d4-bf8e-b17311d5f51f.png">
</a>

## Tools

- NodeJs
- Puppeteer

## Requirements

In order to utilise this project you need to have the following installed locally:

- [puppeteer](https://npmjs.com/puppeteer)

To install the dependencies locally run:

```js
npm install dependencies
```

## Usage

In order for the conversion to pass, you will need to configure the script with the following parameters:

```bash
node capture <url> <ext>
```

- Add the web addresses in the `<url>` section of the node command.
- Add the output file extension in the `<ext>` section of the node command.

```bash
node capture https://www.google.com png
```

## Demo Image
