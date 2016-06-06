var co = require('co');
var rp=require('request-promise');

function* Action()
{
    //TODO:
    // 1. Wrap rp with web.url, web.customRequest, etc. Not only download the website, but also parse the HTML, retrieve all resources, and add them to download list.
    // 2. Implement web_reg_save_param_regexp, search the response body using regular expression.
    yield rp('http://www.hp.com');
    yield rp('http://kalimanjaro.hpeswlab.net');
}

co(Action);