#Node Skybook Event Handler
This simple node service accepts incoming JSON messages 
triggered by events such as sector sign off, and saves 
the contents to a JSON file on disk.

##Starting the server
The server can be started with the command ```node server```

##Config
The port number and save directory can be configurable 
through the config/default.json, just change accordingly.

###Tests
Test can be run through the command ```npm run test```
