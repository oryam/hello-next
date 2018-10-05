import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

// import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment);

export class Events extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  handlerSelectEvent(event) {
    console.log('event', event);
    alert(event.title);
  }

  handleSelectSlot({ start, end }) {
    console.log('slot', start, end);
    alert('New event');
  }

  render() {
    return (
      <div>
        <BigCalendar
          selectable
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.props.events}
          style={{ height: '100vh' }}
          onSelectEvent={this.handlerSelectEvent}
          onSelectSlot={this.handleSelectSlot}
        />
        <style jsx>
          {`
            @import '../static/scss/react-big-calendar.css';
          `}
        </style>
      </div>
    );
  }
}

Events.getInitialProps = async function() {
  const events = await [
    {
      start: new Date(),
      end: new Date(moment().add(1, 'days')),
      title: 'Some title'
    }
  ];

  console.log(`Show data fetched. Count: ${events.length}`);

  return {
    events
  };
};

export default Events;
