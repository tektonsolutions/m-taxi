Template.addTaxi.events({
  'submit form': function(event){
    let taxiObj = {};
    taxiObj['plateNo'] = $('#plateInput').val();
    taxiObj['taxiNo'] = $('#taxiInput').val();
    taxiObj['currentOdo'] = parseInt($('#odoInput').val());
    taxiObj['type'] = $('#typeInput').val();
    taxiObj['variant'] = $('#variantInput').val();
    taxiObj['year'] = $('#yearInput').val();
    taxiObj['brand'] = $('#brandInput').val();
    var call = Meteor.call('createTaxi', taxiObj);
    console.log(taxiObj);
   }
});
Template.taxis.helpers({
    'taxi':function(){
        return Taxis.find({});
    }
});
