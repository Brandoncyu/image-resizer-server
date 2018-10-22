# NBC Image Resizer (backend)

For my application for the Software Engineer, Device Services at NBC News, I was tasked at creating a web service to handle image resize requests. This application was built in Node. A further description can be found [here](./NBC-News-Digital-Code Challenge.pdf).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

* fork and clone this repository

### Installing

A step by step series of examples that tell you how to get a development env running to utilize the PostGres db

Install the Node dependencies:

```shell
* run npm install
```

You also must be able to copy file paths of images on your file system. If you are unaware of how to do this, follow the instructions in either of the links below:

* for PC: [Windows Tips: Copy a File Path, Show or Hide Extensions](https://www.pcworld.com/article/251406/windows_tips_copy_a_file_path_show_or_hide_extensions.html)
* for Mac: [Quickly Copy a File or Folder Path to the Clipboard in Mac OS X](http://osxdaily.com/2013/06/19/copy-file-folder-path-mac-os-x/)

Finally, start the server in development mode:

```shell
* npm run dev
```

## Routes

**POST /:filePath**
- at least one(1) of the following fields in body is required:
```
{
    height,           // STRING
    width,            // STRING
}
```

You will need to copy and paste your filepath, and add the end of your post route when making a request to the server. For instance, if the path to one of your files is '/Users/admin/Desktop/Brandon1.jpg,' then your post request will be:

```
localhost:5000/Users/admin/Desktop/Brandon2.jpg
```

You have the option to provide the height and/or width of your requested resized image within the body of your post request. If you put in either the height or the width without putting in the other, the aspect ratio will be respected. For example, if the original image was 400x200 and you ask for the new size to simply have a 200 width, the resized image will have dimensions of 200x100.

Whereas if you provide both a respective height AND width of a resized image, aspect ratio will be ignored. The resulting resized image will have the requested height and width.

All resized images will be saved to the same folder as the original images. It will have '-resizeOption' appended to the original name before the extension. For example, any resized images requested against the image above will be saved as:

```
localhost:5000/Users/admin/Desktop/Brandon2***-resizeOption***.jpg
```

The original images will not be erased.

## Built With

* [JavaScript](https://www.javascript.com/) - The language
* [Express](http://expressjs.com/) - Backend framework
* [Node](https://nodejs.org/en/) - Package ecosystem
* [GraphicsMagick for Node](https://github.com/aheckmann/gm) - An image-processing package that has been refactored for Node.

## Contributing

Please send me a message for details on our code of conduct, and the process for submitting pull requests.

## Author

* **Brandon Yu** - *Initial work* - [Brandoncyu](https://github.com/Brandoncyu)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
