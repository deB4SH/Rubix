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
       this.width = self.attributes.width;
       this.height =  self.attributes.height;
       this.depth = self.attributes.depth;
       this.rubixX = self.attributes.rubixX;
       this.rubixY = self.attributes.rubixY;
       
       this.cubieGeometry = self.attributes.cubiegeom;
       this.cubieMat = self.attributes.cubiemat;
       
       
       console.log("Cube generated at ["+this.rubixX+"]["+this.rubixY+"]");
   },
});