# Miro PlantUML Plugin

This plugin allows you to insert plantuml diagrams inside miro.

The diagrams are SVG widgets, you can edit the diagrams by clicking on them and using the diagram option.

# Installing

You can install this plugin for your team by following this link:

[Install Plugin](https://miro.com/oauth/authorize/?response_type=token&client_id=3074457351770184441&redirect_uri=https://miro.com/confirm-app-install)

# Develop

To develop:

- clone this repo
- npm install
- npm start (this will start a webpack dev server with https in localhost)

You can create a test plugin inside Miro and point it to your localhost https, accept the certificate first by opening your localhost in a browser tab.

# Credits

This plugin is internally using the awesome service provided by http://www.plantuml.com/plantuml/svg/
