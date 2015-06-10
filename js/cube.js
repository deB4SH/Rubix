//
console.log("[DEBUG]:[CUBE.JS]");

/*
 * CUBE CLASS
 */

var Cube = Backbone.Model.extend({
   
   initialize: function() {
       var self = this;
       this.x = self.attributes.x;
       this.y = self.attributes.y;
       this.z = self.attributes.z;
       this.width = self.attributes.width;
       this.height =  self.attributes.height;
       this.depth = self.attributes.depth;
       this.element = self.attributes.element;
   },
});