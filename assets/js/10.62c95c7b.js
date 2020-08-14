(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{381:function(e,t,n){e.exports=n.p+"assets/img/1.bf3fe569.png"},382:function(e,t,n){e.exports=n.p+"assets/img/2.91b4f198.png"},383:function(e,t,n){e.exports=n.p+"assets/img/3.da2f39f3.png"},384:function(e,t,n){e.exports=n.p+"assets/img/4.49743209.png"},487:function(e,t,n){"use strict";n.r(t);var s=n(33),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"s-mime-email-encryption-with-thunderbird"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#s-mime-email-encryption-with-thunderbird"}},[e._v("#")]),e._v(" S/MIME Email Encryption with Thunderbird")]),e._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),s("p",[e._v("If you do not have a S/MIME key-certificate pair installed on your Nitrokey yet or if you did not installed OpenSC, please look at "),s("a",{attrs:{href:"https://www.nitrokey.com/documentation/smime-email-encryption",target:"_blank",rel:"noopener noreferrer"}},[e._v("this page"),s("OutboundLink")],1),e._v(" first.")]),e._v(" "),s("p",[e._v("You need to have OpenSC installed on your System. Please have a look at the "),s("a",{attrs:{href:"https://github.com/OpenSC/OpenSC/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("wiki page of the OpenSC project"),s("OutboundLink")],1),e._v(". While GNU/Linux users usually can install OpenSC over the package manager (e.g. sudo apt update && sudo apt install opensc on Ubuntu), macOS and Windows users can download the installation files from the wiki page.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("Windows users with 64-bit system (standard) need to install both, the 32-bit and the 64-bit version of OpenSC!")])]),e._v(" "),s("h2",{attrs:{id:"settings-in-thunderbird"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settings-in-thunderbird"}},[e._v("#")]),e._v(" Settings in Thunderbird")]),e._v(" "),s("p",[e._v("Before you can use the Nitrokey in Thunderbird you have to activate S/MIME encryption in the account settings. You can achieve this by clicking on the menu and go to 'Preferences' -> 'Account Settings' and clicking on 'Security' in the account settings window.")]),e._v(" "),s("p",[s("img",{attrs:{src:n(381),alt:"img1"}})]),e._v(" "),s("p",[e._v('Click on "Security Devices" to import the right PCKS11 module. Click on "Load" on the right-hand side. Now give the Module a name (like "OpenSC Module") and click on "Browse" to choose the location of the Module (see below).')]),e._v(" "),s("p",[s("img",{attrs:{src:n(382),alt:"img2"}})]),e._v(" "),s("p",[e._v('On Windows the right file lays under "C:\\Windows\\System32\\opensc-pkcs11.dll".\nOn macOS and GNU/Linux the file should be in "/lib/pkcs11/opensc-pkcs11.so" or "/usr/lib/pkcs11/opensc-pkcs11.so" or alike. Press "OK" twice and you are back in security section of the account settings. Now you can actually choose a certificate on the upper part of the window. You should get asked for a PIN to unlock your Nitrokey. Please type in your User PIN.')]),e._v(" "),s("p",[s("img",{attrs:{src:n(383),alt:"img3"}})]),e._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("p",[e._v("When composing an email you can now choose to encrypt and sign the message.")]),e._v(" "),s("p",[s("img",{attrs:{src:n(384),alt:"img4"}})])])}),[],!1,null,null,null);t.default=i.exports}}]);