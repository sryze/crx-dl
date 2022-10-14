crx-dl
======

This is just a simple script to automate the download of Google Chrome extensions from the Chrome Web Store.

Usage:

```
crx-dl.py [-h] [-q] [-o OUTPUT_FILE] id_or_url

positional arguments:
  id_or_url             ID or full URL of the extension in Chrome Web Store

optional arguments:
  -h, --help            show this help message and exit
  -q, --quiet           suppress all messages
  -o OUTPUT_FILE, --output-file OUTPUT_FILE
                        where to save the .CRX file
```

For example:

```
python crx-dl.py \
    https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb \
    translate.crx
```

The above command will download the Google Translate extension to a file named `translate.crx` in the current working directory.

To extract the contents of the CRX file, you can use `unzip` on Unix-like systems:

```
unzip translate.crx -d translate
```

or just open it as a ZIP file in your favorite archive manager program.
