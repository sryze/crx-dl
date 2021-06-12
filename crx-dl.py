#!/usr/bin/env python

import argparse
import os.path
import sys

try:
    from urlparse import urlparse
    from urllib import urlencode
    from urllib2 import urlopen
except ModuleNotFoundError:
    from urllib.parse import urlparse
    from urllib.parse import urlencode
    from urllib.request import urlopen

arg_parser = argparse.ArgumentParser(description='Chrome extension downloader')
arg_parser.add_argument('url',
    help='URL of the extension in the Chrome Web Store')
arg_parser.add_argument('-q', '--quiet',
    action='store_true',
    help='suppress all messages')
arg_parser.add_argument('-o', '--output-file',
    required=False,
    help='where to save the .CRX file')
options = arg_parser.parse_args(sys.argv[1:])

ext_url_str = options.url
ext_url = urlparse(ext_url_str)
ext_id = os.path.basename(ext_url.path)

crx_base_url = 'https://clients2.google.com/service/update2/crx'
crx_params = urlencode({
    'response': 'redirect',
    'prodversion': '91.0',
    'acceptformat': 'crx2,crx3',
    'x': 'id=' + ext_id + '&uc'
})
crx_url = crx_base_url + '?' + crx_params
crx_path = options.output_file if options.output_file is not None else ext_id + '.crx'

if not options.quiet:
    print('Downloading {} to {} ...'.format(crx_url, crx_path))

with open(crx_path, 'wb') as file:
    file.write(urlopen(crx_url).read())

if not options.quiet:
    print('Success!')
