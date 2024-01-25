(function() {
    var STORE_URL_INFO = [
        {host: 'chrome.google.com', basePath: '/webstore/detail/'},
        {host: 'chromewebstore.google.com', basePath: '/detail/'}
    ];
    var CRX_BASE_URL = 'https://clients2.google.com/service/update2/crx';

    var form = document.getElementById('form');
    var downloadLink = document.getElementById('downloadLink');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        form.action = '';

        var urlStr = (form.url.value || '').trim();
        if (!urlStr) {
            alert('Please enter a URL');
            return;
        }

        var url = new URL(urlStr);
        var isValidStoreUrl = false;
        var validPrefixes = [];
        for (var i = 0; i < STORE_URL_INFO.length; i++) {
            var info = STORE_URL_INFO[i];
            if (url.host == info.host
                && (url.pathname || '').startsWith(info.basePath)) {
                isValidStoreUrl = true;
            }
            validPrefixes.push('https://' + info.host + info.basePath);
        }
        if (!isValidStoreUrl) {
            alert('Please enter a valid extension link that begins with either of:\n'
                + validPrefixes.join('\n'));
            return;
        }

        var extId = url.pathname.split('/').pop();
        var crxUrlParams = new URLSearchParams({
            response: 'redirect',
            prodversion: '91.0',
            acceptformat: 'crx2,crx3',
            x: 'id=' + extId + '&uc'
        });
        var crxUrl = CRX_BASE_URL + '?' + crxUrlParams;

        downloadLink.href = crxUrl;
        downloadLink.click();
    });
})();
