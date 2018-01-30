const Alexa = require('alexa-sdk');
const constants = require("./constants.json");

console.log("hello world");


// define handlers for handling requests.
// These will be split out into separate files moving forward
const handlers = {
    'LaunchRequest': function () {
        this.emit('HelloWorldIntent');
    },

    'HelloWorldIntent': function () {
        this.emit(':tell', 'Hello World!');
    }
};


// setup the alexa sdk in here.
exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.appId = constants.APP_ID; // APP_ID is your skill id which can be found in the Amazon developer console where you create the skill.
    alexa.registerHandlers(handlers);
    alexa.execute();
};

