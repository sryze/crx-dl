crx-dl
======

This is just a simple script to automate the download of Google Chrome extensions from the Chrome Web Store.

Usage:

```
crx-dl.py [-h] url filename

Chrome extension downloader

positional arguments:
  url         URL of the extension in the Chrome Web Store
  filename    Where to save the .CRX file
```

For example:

```
python crx-dl.py https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb translate.crx
```

The above command will download the Google Translate extensions to a file named `translate.crx` in the current working directory.

To extract the contents of the CRX file, you can run:

```
unzip translate.crx -d translate
```

or just open it as a ZIP file in your archive manager program.
