# VRNBLTY

A chrome extension that allows you to check the current website you are in to see if previous data breaches have occurred. The extension is powered by the [haveibeenpwned api](https://haveibeenpwned.com/)

![image](https://user-images.githubusercontent.com/69985528/174496517-2657aace-9370-4a8b-aba2-1b7b3161b1b8.png)
![image](https://user-images.githubusercontent.com/69985528/174496590-88b23b30-7fc2-4178-8376-9b590e53fb7a.png)
![image](https://user-images.githubusercontent.com/69985528/174496608-85a4632a-e9c9-4912-b3ab-e656caf4c693.png)
![image](https://user-images.githubusercontent.com/69985528/174497033-f1b510c4-a2a3-4465-87a4-44581bac2043.png)



## Demo & Usage

I created a Youtube video showcasing the [Plasmo framework](https://www.plasmo.com/). A section of the video is devoted to showcasing the `VRNBLTY` extension as well. Feel free to check the youtube video down below.

[![Youtube video](http://img.youtube.com/vi/Fa2nFDw-dBw/0.jpg)](http://www.youtube.com/watch?v=Fa2nFDw-dBw?t=707 "Create a Google Chrome extension with ReactJS | Plasmo quickstart tutorial")

## Contributing

Feel free to contribute to this repository by following the set up steps below

### Install 
```
pnpm install
```

### Development server
```
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: build/chrome-mv3-dev.
You can start editing the popup by modifying popup.tsx. It should auto-update as you make changes.

For further guidance, visit [plasmo docs](https://docs.plasmo.com/)

### Compiling the extension for a production build
```
pnpm build -- --zip
# or
npm run build -- --zip
```
This should create a production bundle for your extension, ready to be published to the stores.

