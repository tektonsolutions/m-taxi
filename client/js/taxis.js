Template.addTaxi.events({
  'submit form': function(event){
    let taxiObj = {};
    taxiObj['plateNo'] = $('#plateInput').val();
    taxiObj['taxiNo'] = $('#taxiInput').val();
    taxiObj['currentOdo'] = $('#odoInput').val();
    taxiObj['type'] = $('#typeInput').val();
    taxiObj['variant'] = $('#variantInput').val();
    taxiObj['year'] = $('#yearInput').val();
    taxiObj['brand'] = $('#brandInput').val();
    alert(taxiObj);
    Meteor.call('createTaxi', taxiObj);
   }
});
Template.addTaxi.helpers({

});
