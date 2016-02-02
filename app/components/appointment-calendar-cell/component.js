import Ember from 'ember';
import moment from 'moment';

function isInBlock(blockStart, blockEnd, compare) {
  // if startTime is before compare AND endTime is after compare
  return blockStart.isBefore(compare) && blockEnd.isAfter(compare);
}

export default Ember.Component.extend({
  startTime: null,
  endTime: null,
  events: [],

  didReceiveAttrs() {
    this._super(...arguments);

    let startTime = this.get('startTime') || moment();
    let endTime = this.get('endTime') || moment();
    let events = this.get('events');

    let conflict = events.any((event) => {
      let eventStart = event.get('startTime');
      let eventLength = event.get('length');
      let eventEnd = moment(eventStart);
      eventEnd.add(eventLength, 'minute');

      return isInBlock(startTime, endTime, eventStart) ||
        isInBlock(startTime, endTime, eventEnd) ||
        isInBlock(eventStart, eventEnd, startTime);
    });

    this.set('conflict', conflict);
  },
});
