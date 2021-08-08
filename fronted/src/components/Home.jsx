import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const Home = (userData, handleFetch) => {
  const history = useHistory();
  const [id, setId] = useState({});
  const [event, setEvent] = useState({
    title: "",
    imgUrl: "",
    description: "",
  });
  const [events, setEvents] = useState(null);
  const handlChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await fetch("http://localhost:3001/get-event", {
        headers: {
          Authorization: `somesupersecretsecret ${userData.token}`,
        },
      });
      const events = await data.json();
      setEvents(events);
    };
    fetchEvents();
  }, [userData]);

  const handlDelete = async (e) => {
    const settings = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userData.token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    };
    try {
      const fetchResponse = await fetch(
        `http://localhost:3001/delete-event`,
        settings
      );
      const data = await fetchResponse.json();
      return data;
    } catch (e) {
      return e;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const settings = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userData.token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    };
    try {
      const fetchResponse = await fetch(
        `http://localhost:3001/add-event`,
        settings
      );
      const data = await fetchResponse.json();
      console.log(data);
      return data;
    } catch (e) {
      return e;
    }
  };
  console.log(id);
  return (
    <div>
      {userData.name ? (
        <div>
          <h1>Welcome {userData.name}</h1>
          {events ? (
            <div>
              <h3>Your Events</h3>
              <ul>
                {events.map((event) => (
                  <>
                    <li className="text-green-600">{event.title}</li>

                    <button
                      className="font-bold py-2 px-4 rounded-md bg-green-600"
                      onClick={() => {
                        setId({ id: event.id });
                        handlDelete();
                      }}>
                      <img
                        src="https://www.svgrepo.com/show/79440/delete-button.svg"
                        className="w-5"
                      />
                    </button>
                  </>
                ))}
              </ul>
            </div>
          ) : (
            <h3>You have no events yet</h3>
          )}
          <h3>Add new Event</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">
                Title
                <input
                  className="border-2 ml-2"
                  type="text"
                  name="title"
                  required
                  value={event.title}
                  onChange={handlChange}
                />
              </label>
              <label htmlFor="password">
                Description
                <input
                  className="border-2 ml-2"
                  type="description"
                  name="description"
                  value={event.description}
                  onChange={handlChange}
                />
              </label>
              <label htmlFor="date">Date</label>
              <input
                className="border-2 ml-2"
                type="date"
                name="date"
                value={event.date}
                onChange={handlChange}
              />
            </div>
            <button
              className="text-white font-bold py-2 px-4 rounded-md bg-green-600 my-5"
              type="submit">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <h1>Please sign in</h1>
      )}
    </div>
  );
};
export default Home;
