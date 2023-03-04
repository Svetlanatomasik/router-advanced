import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Some event",
  },
  {
    id: "e2",
    title: "Some event",
  },
];

const EventsPage = () => {
  return (
    <>
      <h1>EventsPage</h1>;
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
            {/* convert it to a relative link by just navigating to event.id */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
