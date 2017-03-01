import React, {Component} from 'react';

class EventCard extends Component {
  render() {
    const {party, eventType, firstName, lastName, district, date, time, location, street, city, state, directions} = this.props
    return (
      <section className='home-card'>
        <span className={party}>

        <h3 className='event-title'> {eventType} </h3>
        </span>

        <h5 className='rep-info'>
          <span className='rep-name'>{firstName} {lastName} </span><br/>
          {district}
        </h5>

        <article className='time-date'>
          <div  className='calendar-icon'>
          </div>
          <article className='date-details'>
            <div className='date-name'> {date} </div>
            <span> {time} </span>
          </article>
        </article>

        <article className='address-location'>
          <div  className='address-icon'>
          </div>
          <article className='address-details'>
            <div className='address-location-name'> {location} </div>
            <span> {street} </span> <br/>
            <span> {city}, {state} </span>
          </article>
        </article>

      </section>
    );
  };
}

module.exports = EventCard;
