#!/usr/bin/env python

import argparse
import os.path
import sys
import urllib
import urllib2
import urlparse

arg_parser = argparse.ArgumentParser(description='Chrome extension downloader')
arg_parser.add_argument('url',
    help='URL of the extension in the Chrome Web Store')
arg_parser.add_argument('filename',
    help='Where to save the .CRX file')
options = arg_parser.parse_args(sys.argv[1:])

ext_url_str = options.url
ext_url = urlparse.urlparse(ext_url_str)
ext_id = os.path.basename(ext_url.path)
print(ext_url)
print(ext_id)

crx_base_url = 'https://clients2.google.com/service/update2/crx'
crx_params = urllib.urlencode({
    'response': 'redirect',
    'prodversion': '91.0',
    'acceptformat': 'crx2,crx3',
    'x': 'id=' + ext_id + '&uc'
})
crx_url = crx_base_url + '?' + crx_params

print('Downloading {}...'.format(crx_url))

with open(options.filename, 'w') as file:
    response = urllib2.urlopen(crx_url)
    file.write(response.read())


# print(content)
