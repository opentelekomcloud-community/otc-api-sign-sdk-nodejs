Installation
===============

.. toctree::
   :maxdepth: 3
   :includehidden:

The latest state of the packages can be installed directly from the GitHub repository.


Installing from GitHub repository
-----------------------------------

To install the package from GitHub repository, you can use the following command:

.. code-block:: shell
   :caption: npm install from GitHub repository with version tag v1.0.0

   npm install git+https://github.com/opentelekomcloud-community/otc-api-sign-sdk-nodejs#v1.0.0

.. code-block:: javascript
   :caption: usage in code:

   const { Signer } = require('otc-api-sign-sdk-nodejs');

Installing from GitHub packages
-----------------------------------

To install the package from GitHub Packages, you can use commands described in this section.

For details on how to use GitHub Packages, please refer to the official documentation: 
`Installing a package <https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package>`_. 

Prerequisites
^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. In the same directory as your project's `package.json` file,
   create a file named `.npmrc` with the following content to configure npm to use GitHub Packages:

    .. code-block:: shell
      :caption: .npmrc

      @opentelekomcloud-community:registry=https://npm.pkg.github.com

2. Additionally, you may need to authenticate with GitHub Packages
   by creating a personal access token (PAT) with the appropriate 
   scopes and adding it to your npm configuration.
   
   For more details, please refer to the official documentation:
   `Authenticating to GitHub Packages <https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages>`_.


Installing the package
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Installing with package name
""""""""""""""""""""""""""""""
.. code-block:: shell
   :caption: npm install with package name 

   npm install @opentelekomcloud-community/otc-api-sign-sdk-nodejs@^1.0.0

.. code-block:: javascript
   :caption: usage in code:

   const { Signer } = require('@opentelekomcloud-community/otc-api-sign-sdk-nodejs');


Installing with package name and alias
""""""""""""""""""""""""""""""""""""""

.. code-block:: shell
   :caption: npm install with package name and alias otc-api-sign-sdk-nodejs

   npm install otc-api-sign-sdk-nodejs@opentelekomcloud-community/otc-api-sign-sdk-nodejs:^1.0.0

.. code-block:: javascript
   :caption: usage in code:

   const { Signer } = require('otc-api-sign-sdk-nodejs');