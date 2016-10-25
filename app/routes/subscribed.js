import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('customer')
      .then(customers => customers.filterBy('isSubscribed', true));
  }
});
