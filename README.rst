Change Browser Title
=====================

You have to change the title "Odoo" manually in two places:
1. custome_title.xml
This changes the title inside <title> tage


2. static/src/js/custom_title.js

Change the title I marked as "???????", keep everything else as it is.

        `this.set('title_part', {"zopenerp": "???????"});`


## Tested on Odoo 8.0


Hint:
-----

* Changing the title in js file has no immediate effect, it seems it is cached somewhere.
Just wait a while, and it will appear!

References:
-----------
I used knowledge from volunteers, here I am stating URLs I benefit from in this addon:

* http://stackoverflow.com/questions/26974431/odoo-8-how-to-change-page-title/29182681#29182681
* https://www.odoo.com/forum/help-1/question/how-to-change-the-title-of-our-web-page-in-browser-71483
