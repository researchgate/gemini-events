# gemini-events

A simple plugin for Gemini to be able to listen to events.


## Install

    npm install gemini-events
    
    
## Usage

Define the event callbacks in your Gemini configuration file and pass them as configuration options to the plugin:

```startRunner``` - emitted before the start of test or update command. If you return a promise from the event handler, the start of the command will be delayed until the promise resolves.

```endRunner``` - emitted after the end of the test or update command.

    //.gemini.js
    
    function startRunner () {
        
    }
    
    function endRunner () {
            
    }
    
    module.exports = {
      rootUrl: "http://yandex.com",
      "system": {
        "plugins": {
          "events": {
            "startRunner": startRunner,
            "endRunner": endRunner
          }
        }
      },
      "browsers": {
        ...
      }
    }


# License

gemini-events is licensed under the MIT license.
