(function() {
    var STORE_DOMAIN = 'chrome.google.com';
    var STORE_BASE_PATH = '/webstore/detail/';
    var CRX_BASE_URL = 'https://clients2.google.com/service/update2/crx';

    var form = document.getElementById('form');
    var downloadLink = document.getElementById('downloadLink');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        form.action = '';

        var urlStr = form.url.value;
        if (!urlStr) {
            alert('Please enter a URL');
            return;
        }
    
        var url = new URL(urlStr);
        if (url.host != STORE_DOMAIN
            || !url.pathname.startsWith(STORE_BASE_PATH)) {
            alert('Please enter a valid extension link that starts with ' + STORE_DOMAIN + STORE_BASE_PATH);
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
