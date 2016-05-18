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
    var call = Meteor.call('createTaxi', taxiObj);
    console.log(call);

   }
});
Template.taxis.helpers({
    'taxi':function(){
        return Taxis.find({});
    }
});
