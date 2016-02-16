(function () {
    var s = document.createElement('div');
    s.innerHTML = 'Loading...';
    s.style.color = 'black';
    s.style.padding = '20px';
    s.style.position = 'fixed';
    s.style.zIndex = '9999';
    s.style.fontSize = '3.0em';
    s.style.border = '2px%20solid%20black';
    s.style.right = '40px';
    s.style.top = '40px';
    s.setAttribute('class', 'selector_gadget_loading');
    s.style.background = 'white';
    document.body.appendChild(s);


    var v = document.createElement('link');
    v.setAttribute('rel', 'stylesheet');
    v.setAttribute('media', 'all');
    v.setAttribute('href', 'https://rawgit.com/AdguardTeam/AdguardBrowserExtension/feature/issues/55/Extension/lib/content-script/assistant/css/selector.css');
    document.head.appendChild(v);

    v = document.createElement('script');
    v.setAttribute('type', 'text/javascript');
    v.setAttribute('src', 'https://rawgit.com/AdguardTeam/AdguardBrowserExtension/feature/issues/55/Extension/lib/libs/jquery-1.8.3.min.js');
    document.body.appendChild(v);

    v = document.createElement('script');
    v.setAttribute('type', 'text/javascript');
    v.setAttribute('src', 'https://rawgit.com/AdguardTeam/AdguardBrowserExtension/feature/issues/55/Extension/lib/libs/jquery-ui.min.js');
    document.body.appendChild(v);

    v = document.createElement('script');
    v.setAttribute('type', 'text/javascript');
    v.setAttribute('src', 'https://rawgit.com/AdguardTeam/AdguardBrowserExtension/feature/issues/55/Extension/lib/libs/balalaika.patched.js');
    document.body.appendChild(v);

    v = document.createElement('script');
    v.setAttribute('type', 'text/javascript');
    v.setAttribute('src', 'https://rawgit.com/AdguardTeam/AdguardBrowserExtension/feature/issues/55/Extension/lib/libs/diff_match_patch.js');
    document.body.appendChild(v);

    v = document.createElement('script');
    v.setAttribute('type', 'text/javascript');
    v.setAttribute('src', 'https://rawgit.com/AdguardTeam/AdguardBrowserExtension/feature/issues/55/Extension/lib/libs/dom.js');
    document.body.appendChild(v);

    v = document.createElement('script');
    v.setAttribute('type', 'text/javascript');
    v.setAttribute('src', 'https://rawgit.com/AdguardTeam/AdguardBrowserExtension/feature/issues/55/Extension/lib/content-script/assistant/js/adguard-selector.js');
    document.body.appendChild(v);

    setTimeout(function () {
        console.log('loaded');
        s.parentNode.removeChild(s);

        try {
            AdguardSelectorLib.init(function(element) {
                console.log('Element selected:' + element);
            });

            console.log('initialized');
        } catch(ex) {
            console.error(ex);
        }

    }, 5000);

})();