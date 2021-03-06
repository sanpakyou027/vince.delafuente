
try{
    window.$ = window.jQuery = require('jquery');
    require('bootstrap')
    require('admin-lte')
    require('select2')
    require('admin-lte/plugins/overlayScrollbars/js/OverlayScrollbars')
    require('sweetalert2')
    require('admin-lte/plugins/daterangepicker')
    const toastr = require('toastr')
    toastr.options.timeOut = 3000;
} catch(e){
    console.log(e)
}

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.APP_TOKEN = token.content;
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
    window.axios.defaults.headers.common['X-TIMEZONE'] = Intl.DateTimeFormat().resolvedOptions().timeZone;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

// /* set the global variable */
let baseUrl = document.head.querySelector('meta[name="base-url"]')

if(baseUrl){
    window.BASE_URL = baseUrl.content
} else {
    console.error('Base url is not setup.');
}
