//Changing the title has no immediate effect, it seems it is cached somewhere. Just wait a while!
openerp.web_change_title = function(instance) {
    instance.web.WebClient.include({
        init: function(parent, client_options) {
            this._super(parent, client_options);
            this.set('title_part', {"zopenerp": "???????"});
        },
    });
};