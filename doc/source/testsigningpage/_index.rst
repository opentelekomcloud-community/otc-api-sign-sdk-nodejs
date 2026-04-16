Test signing page
=================

.. toctree::
   :maxdepth: 3
   :includehidden:


Getting curl for an API request
-------------------------------
A simple HTML page is provided to demonstrate how to generate a signed API request
using the otc-api-sign-sdk-nodejs package.

Open the following URL in a browser (see note below):

.. code-block:: html
   :caption: api_signature_demo.html

    file://PATH_TO_FILE/api_signature_demo.html

in a browser with CORS disabled:

.. image:: ./api_signature_demo.png
   :width: 800
   :alt:
  

.. note:: 

   For security reasons, modern browsers enforce the Same-Origin Policy,
   which restricts how a document or script loaded from one origin can
   interact with resources from another origin.
   
   To test the signing page locally, you may need to disable CORS 
   (Cross-Origin Resource Sharing) in your browser.
   
   Please be cautious when doing this, as it can expose your browser to
   security risks.
   
   Make sure to re-enable CORS after testing.

   E.g. start chrome on Windows with following command:

    .. code-block:: shell
        :caption: Start Chrome with CORS disabled using Windows cmd

        chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security

