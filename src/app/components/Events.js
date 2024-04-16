"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ImArrowUpRight2 } from "react-icons/im";

// Define HTMLComponent outside the Events component
const HTMLComponent = ({ htmlContent }) => {
  return (
    <p dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

const Events = () => {
  const [events, setEvents] = useState([]);
  const [liveActive, setLiveActive] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        let endpoint = 'https://api.esummit.in/events/all';
        const response = await axios.get(endpoint);
        // If liveActive is true, slice the response data to get only the first 5 events
        const limitedEvents = liveActive ? response.data.slice(0, 5) : response.data;
        setEvents(limitedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, [liveActive]);

  const handleLiveClick = () => {
    setLiveActive(true);
  };

  const handleAllClick = () => {
    setLiveActive(false);
  };

  return (
    <section className="content">
      <div className="upper-div">
        <div className="left-div">
          <h1>Events</h1>
          <p>Challenge your limits with events full of uncertainties</p>
        </div>
        <div className="button-container">
          <button onClick={handleAllClick} className={`${liveActive ? 'live' : 'all'}`}>All</button>
          <button onClick={handleAllClick} className={`${liveActive ? 'all' : 'live'}`}>Live</button>
          <button>Upcoming</button>
        </div>
      </div>
      <div className="container">
        <div className="lower-div">
          <div className="card-container">
            {events.map(event => (
              <div className="card" style={{ backgroundImage: `url(${event.card_image})` }} key={event.id}>
                <div className='card-content'>
                  <h1>{event.event_name}</h1>
                  {/* Use the HTMLComponent to render HTML content */}
                  <HTMLComponent htmlContent={event.card_description} />
                </div>
                <div className='card-footer'>
                  <p>Apply Now <ImArrowUpRight2 /></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
