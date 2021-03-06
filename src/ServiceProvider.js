import Vue from 'vue';

import Cookie from './support/Cookie';
import Directives from './support/Directives';
import Domain from './support/Domain';
import Filters from './support/Filters';
import Helpers from './support/Helpers';
import Item from './support/Item';
import Items from './support/Items';
import StorageHandler from './support/StorageHandler';

import Alert from './Alert';
import Request from './Request';

const ServiceProvider = {
    register() {
        window.Item = Item;
        window.Items = Items;

        window.Cookie = Cookie;
        window.Domain = Domain;
        window.StorageHandler = StorageHandler;

        window.Alert = Alert;
        window.Request = Request;

        //make usable inside template
        Vue.prototype.Item = Item;
        Vue.prototype.Items = Items;
        Vue.prototype.Domain = Domain;

        Vue.use(Directives);
        Vue.use(Filters);
    }
}

export default ServiceProvider;
