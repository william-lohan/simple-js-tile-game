var { Map } = require('./mappings/Map');
var { Jsonix } = require('jsonix');

delete Map.defaultElementNamespaceURI;

// First we construct a Jsonix context - a factory for unmarshaller (parser)
// and marshaller (serializer)
var context = new Jsonix.Context([Map]);

// Then we create a unmarshaller
var unmarshaller = context.createUnmarshaller();

// Unmarshal an object from the XML retrieved from the URL
unmarshaller.unmarshalFile('./assets/maps/map1.tmx',
  // This callback function will be provided
  // with the result of the unmarshalling
  function (unmarshalled) {
    console.log(unmarshalled.value.tileset[0]);
    console.log(unmarshalled.value.layerOrObjectgroup[0]);
  });

// var obj = unmarshaller.unmarshalString('<map orientation="orthogonal"></map>');

// console.log(obj);
