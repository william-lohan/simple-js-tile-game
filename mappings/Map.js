var Map_Module_Factory = function () {
  var Map = {
    name: 'Map',
    defaultElementNamespaceURI: 'http:\/\/mapeditor.org',
    typeInfos: [{
        localName: 'Tileset.Image',
        typeName: null,
        baseTypeInfo: '.SimpleImageT',
        propertyInfos: [{
            name: 'source',
            attributeName: {
              localPart: 'source'
            },
            type: 'attribute'
          }, {
            name: 'trans',
            attributeName: {
              localPart: 'trans'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Tileset.Tile.Animation.Frame',
        typeName: null,
        propertyInfos: [{
            name: 'tileid',
            required: true,
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'tileid'
            },
            type: 'attribute'
          }, {
            name: 'duration',
            required: true,
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'duration'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Properties',
        typeName: null,
        propertyInfos: [{
            name: 'property',
            required: true,
            collection: true,
            typeInfo: '.Properties.Property'
          }]
      }, {
        localName: 'Tileset.Tileoffset',
        typeName: null,
        propertyInfos: [{
            name: 'x',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'x'
            },
            type: 'attribute'
          }, {
            name: 'y',
            required: true,
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'y'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Image',
        typeName: null,
        propertyInfos: [{
            name: 'data',
            typeInfo: '.Data'
          }, {
            name: 'format',
            typeInfo: 'NMToken',
            attributeName: {
              localPart: 'format'
            },
            type: 'attribute'
          }, {
            name: 'source',
            attributeName: {
              localPart: 'source'
            },
            type: 'attribute'
          }, {
            name: 'trans',
            attributeName: {
              localPart: 'trans'
            },
            type: 'attribute'
          }, {
            name: 'width',
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'height',
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'height'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Imagelayer',
        typeName: null,
        propertyInfos: [{
            name: 'properties',
            typeInfo: '.Properties'
          }, {
            name: 'image',
            typeInfo: '.Image'
          }, {
            name: 'name',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }, {
            name: 'offsetx',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'offsetx'
            },
            type: 'attribute'
          }, {
            name: 'offsety',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'offsety'
            },
            type: 'attribute'
          }, {
            name: 'opacity',
            typeInfo: 'Float',
            attributeName: {
              localPart: 'opacity'
            },
            type: 'attribute'
          }, {
            name: 'visible',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'visible'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Tileset.Terraintypes',
        typeName: null,
        propertyInfos: [{
            name: 'terrain',
            required: true,
            typeInfo: '.Tileset.Terraintypes.Terrain'
          }]
      }, {
        localName: 'SimpleDataT',
        typeName: 'simpleDataT',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Base64Binary',
            type: 'value'
          }, {
            name: 'encoding',
            required: true,
            typeInfo: 'NMToken',
            attributeName: {
              localPart: 'encoding'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Objectgroup.Object.Polygon',
        typeName: null,
        propertyInfos: [{
            name: 'points',
            attributeName: {
              localPart: 'points'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Tileset',
        typeName: null,
        propertyInfos: [{
            name: 'image',
            minOccurs: 0,
            collection: true,
            typeInfo: '.Tileset.Image'
          }, {
            name: 'tile',
            minOccurs: 0,
            collection: true,
            typeInfo: '.Tileset.Tile'
          }, {
            name: 'tileoffset',
            required: true,
            typeInfo: '.Tileset.Tileoffset'
          }, {
            name: 'properties',
            typeInfo: '.Properties'
          }, {
            name: 'terraintypes',
            required: true,
            typeInfo: '.Tileset.Terraintypes'
          }, {
            name: 'name',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }, {
            name: 'firstgid',
            required: true,
            typeInfo: 'PositiveInteger',
            attributeName: {
              localPart: 'firstgid'
            },
            type: 'attribute'
          }, {
            name: 'source',
            attributeName: {
              localPart: 'source'
            },
            type: 'attribute'
          }, {
            name: 'tilewidth',
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'tilewidth'
            },
            type: 'attribute'
          }, {
            name: 'tileheight',
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'tileheight'
            },
            type: 'attribute'
          }, {
            name: 'spacing',
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'spacing'
            },
            type: 'attribute'
          }, {
            name: 'margin',
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'margin'
            },
            type: 'attribute'
          }, {
            name: 'tilecount',
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'tilecount'
            },
            type: 'attribute'
          }, {
            name: 'columns',
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'columns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SimpleImageT',
        typeName: 'simpleImageT',
        propertyInfos: [{
            name: 'data',
            typeInfo: '.SimpleDataT'
          }, {
            name: 'id',
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'format',
            typeInfo: 'NMToken',
            attributeName: {
              localPart: 'format'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Layer',
        typeName: null,
        propertyInfos: [{
            name: 'properties',
            typeInfo: '.Properties'
          }, {
            name: 'data',
            required: true,
            typeInfo: '.Data'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }, {
            name: 'width',
            required: true,
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'height',
            required: true,
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'height'
            },
            type: 'attribute'
          }, {
            name: 'opacity',
            typeInfo: 'Float',
            attributeName: {
              localPart: 'opacity'
            },
            type: 'attribute'
          }, {
            name: 'visible',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'visible'
            },
            type: 'attribute'
          }, {
            name: 'offsetx',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'offsetx'
            },
            type: 'attribute'
          }, {
            name: 'offsety',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'offsety'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Objectgroup.Object.Polyline',
        typeName: null,
        propertyInfos: [{
            name: 'points',
            attributeName: {
              localPart: 'points'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Tileset.Tile',
        typeName: null,
        propertyInfos: [{
            name: 'properties',
            typeInfo: '.Properties'
          }, {
            name: 'image',
            typeInfo: '.SimpleImageT'
          }, {
            name: 'objectgroup',
            typeInfo: '.Objectgroup'
          }, {
            name: 'animation',
            required: true,
            typeInfo: '.Tileset.Tile.Animation'
          }, {
            name: 'id',
            required: true,
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'terrain',
            attributeName: {
              localPart: 'terrain'
            },
            type: 'attribute'
          }, {
            name: 'probability',
            typeInfo: 'Float',
            attributeName: {
              localPart: 'probability'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Properties.Property',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }, {
            name: 'value',
            required: true,
            attributeName: {
              localPart: 'value'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'NMToken',
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Objectgroup',
        typeName: null,
        propertyInfos: [{
            name: 'object',
            required: true,
            collection: true,
            typeInfo: '.Objectgroup.Object'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }, {
            name: 'color',
            required: true,
            attributeName: {
              localPart: 'color'
            },
            type: 'attribute'
          }, {
            name: 'opacity',
            typeInfo: 'Float',
            attributeName: {
              localPart: 'opacity'
            },
            type: 'attribute'
          }, {
            name: 'visible',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'visible'
            },
            type: 'attribute'
          }, {
            name: 'offsetx',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'offsetx'
            },
            type: 'attribute'
          }, {
            name: 'offsety',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'offsety'
            },
            type: 'attribute'
          }, {
            name: 'draworder',
            typeInfo: 'NMToken',
            attributeName: {
              localPart: 'draworder'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Tileset.Tile.Animation',
        typeName: null,
        propertyInfos: [{
            name: 'frame',
            required: true,
            collection: true,
            typeInfo: '.Tileset.Tile.Animation.Frame'
          }]
      }, {
        localName: 'Data.Tile',
        typeName: null,
        propertyInfos: [{
            name: 'gid',
            required: true,
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'gid'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Data',
        typeName: null,
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            elementName: 'tile',
            typeInfo: '.Data.Tile',
            type: 'elementRef'
          }, {
            name: 'encoding',
            typeInfo: 'NMToken',
            attributeName: {
              localPart: 'encoding'
            },
            type: 'attribute'
          }, {
            name: 'compression',
            typeInfo: 'NMToken',
            attributeName: {
              localPart: 'compression'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Objectgroup.Object',
        typeName: null,
        propertyInfos: [{
            name: 'properties',
            typeInfo: '.Properties'
          }, {
            name: 'point',
            typeInfo: 'AnyType'
          }, {
            name: 'ellipse',
            typeInfo: 'AnyType'
          }, {
            name: 'polygon',
            typeInfo: '.Objectgroup.Object.Polygon'
          }, {
            name: 'polyline',
            typeInfo: '.Objectgroup.Object.Polyline'
          }, {
            name: 'id',
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }, {
            name: 'type',
            required: true,
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }, {
            name: 'x',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'x'
            },
            type: 'attribute'
          }, {
            name: 'y',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'y'
            },
            type: 'attribute'
          }, {
            name: 'width',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'height',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'height'
            },
            type: 'attribute'
          }, {
            name: 'rotation',
            typeInfo: 'Double',
            attributeName: {
              localPart: 'rotation'
            },
            type: 'attribute'
          }, {
            name: 'gid',
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'gid'
            },
            type: 'attribute'
          }, {
            name: 'visible',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'visible'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Tileset.Terraintypes.Terrain',
        typeName: null,
        propertyInfos: [{
            name: 'properties',
            typeInfo: '.Properties'
          }, {
            name: 'name',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }, {
            name: 'tile',
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'tile'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Map',
        typeName: null,
        propertyInfos: [{
            name: 'properties',
            typeInfo: '.Properties'
          }, {
            name: 'tileset',
            required: true,
            collection: true,
            typeInfo: '.Tileset'
          }, {
            name: 'layerOrObjectgroup',
            required: true,
            collection: true,
            elementTypeInfos: [{
                elementName: 'layer',
                typeInfo: '.Layer'
              }, {
                elementName: 'objectgroup',
                typeInfo: '.Objectgroup'
              }],
            type: 'elements'
          }, {
            name: 'imagelayer',
            typeInfo: '.Imagelayer'
          }, {
            name: 'version',
            required: true,
            attributeName: {
              localPart: 'version'
            },
            type: 'attribute'
          }, {
            name: 'orientation',
            required: true,
            typeInfo: 'NMToken',
            attributeName: {
              localPart: 'orientation'
            },
            type: 'attribute'
          }, {
            name: 'renderorder',
            typeInfo: 'NMToken',
            attributeName: {
              localPart: 'renderorder'
            },
            type: 'attribute'
          }, {
            name: 'width',
            required: true,
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'width'
            },
            type: 'attribute'
          }, {
            name: 'height',
            required: true,
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'height'
            },
            type: 'attribute'
          }, {
            name: 'tilewidth',
            required: true,
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'tilewidth'
            },
            type: 'attribute'
          }, {
            name: 'tileheight',
            required: true,
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'tileheight'
            },
            type: 'attribute'
          }, {
            name: 'hexsidelength',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'hexsidelength'
            },
            type: 'attribute'
          }, {
            name: 'staggeraxis',
            typeInfo: 'NMToken',
            attributeName: {
              localPart: 'staggeraxis'
            },
            type: 'attribute'
          }, {
            name: 'staggerindex',
            typeInfo: 'NMToken',
            attributeName: {
              localPart: 'staggerindex'
            },
            type: 'attribute'
          }, {
            name: 'backgroundcolor',
            attributeName: {
              localPart: 'backgroundcolor'
            },
            type: 'attribute'
          }, {
            name: 'nextlayerid',
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'nextlayerid'
            },
            type: 'attribute'
          }, {
            name: 'nextobjectid',
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'nextobjectid'
            },
            type: 'attribute'
          }]
      }, {
        type: 'enumInfo',
        localName: 'DraworderT',
        baseTypeInfo: 'NMToken',
        values: ['index', 'topdown']
      }, {
        type: 'enumInfo',
        localName: 'StaggeraxisT',
        baseTypeInfo: 'NMToken',
        values: ['x', 'y']
      }, {
        type: 'enumInfo',
        localName: 'CompressionT',
        baseTypeInfo: 'NMToken',
        values: ['gzip', 'zlib']
      }, {
        type: 'enumInfo',
        localName: 'FormatT',
        baseTypeInfo: 'NMToken',
        values: ['png']
      }, {
        type: 'enumInfo',
        localName: 'ImageformatT',
        baseTypeInfo: 'NMToken',
        values: ['png', 'gif', 'jpg', 'bmp']
      }, {
        type: 'enumInfo',
        localName: 'PropertytypeT',
        baseTypeInfo: 'NMToken',
        values: ['string', 'int', 'float', 'bool', 'color', 'file']
      }, {
        type: 'enumInfo',
        localName: 'RenderorderT',
        baseTypeInfo: 'NMToken',
        values: ['right-down', 'right-up', 'left-down', 'left-up']
      }, {
        type: 'enumInfo',
        localName: 'EncodingT',
        baseTypeInfo: 'NMToken',
        values: ['base64', 'csv']
      }, {
        type: 'enumInfo',
        localName: 'StaggerindexT',
        baseTypeInfo: 'NMToken',
        values: ['even', 'odd']
      }, {
        type: 'enumInfo',
        localName: 'OrientationT',
        baseTypeInfo: 'NMToken',
        values: ['orthogonal', 'isometric', 'hexagonal', 'shifted']
      }],
    elementInfos: [{
        elementName: 'map',
        typeInfo: '.Map'
      }, {
        elementName: 'data',
        typeInfo: '.Data'
      }, {
        elementName: 'tile',
        typeInfo: '.Data.Tile',
        scope: '.Data'
      }, {
        elementName: 'objectgroup',
        typeInfo: '.Objectgroup'
      }, {
        elementName: 'image',
        typeInfo: '.Image'
      }, {
        elementName: 'imagelayer',
        typeInfo: '.Imagelayer'
      }, {
        elementName: 'properties',
        typeInfo: '.Properties'
      }, {
        elementName: 'layer',
        typeInfo: '.Layer'
      }, {
        elementName: 'tileset',
        typeInfo: '.Tileset'
      }]
  };
  return {
    Map: Map
  };
};
if (typeof define === 'function' && define.amd) {
  define([], Map_Module_Factory);
}
else {
  var Map_Module = Map_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.Map = Map_Module.Map;
  }
  else {
    var Map = Map_Module.Map;
  }
}