
'use strict';
angular.module('serviceApp',[])
.controller('ShoppingAdd',ShoppingAdd)
.controller('ShoppingShow',ShoppingShow)
.service('ItemsProc',ItemsProc);

//Add objects
ShoppingAdd.$inject = ['ItemsProc'];
function ShoppingAdd(ItemsProc){
  var self = this;
  self.name='';
  self.quan='';
  self.addItem = function(){
  ItemsProc.addItem(self.name,self.quan);
  }
  console.log('item added');
}

//Show or remove Items
ShoppingShow.$inject = ['ItemsProc'];
function ShoppingShow(ItemsProc){
   var self=this;
   self.items = ItemsProc.getItems();
   self.removeItem = function(itemIndex){
     ItemsProc.removeItem(itemIndex);
   };
}


function ItemsProc(){
  var service = this;
  var objs = [];
  service.addItem = function (ItemName,quant){
    var item = {
      name: ItemName,
      quantity: quant
    };
    objs.push(item);
  };

  service.getItems = function(){
    return objs;
  };

  service.removeItem = function(itemIndex){
    objs.splice(itemIndex,1);
  };
}
