import { Helmet } from "react-helmet-async";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Book Fair 2025",
      date: "January 20, 2025",
      time: "10:00 AM - 5:00 PM",
      location: "StudyShelf Library Hall, Level 2",
      description:
        "Explore a wide range of books at our Annual Book Fair. Enjoy discounts, meet authors, and participate in book giveaways.",
    },
    {
      id: 2,
      title: "Storytelling Workshop",
      date: "February 10, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Conference Room, Level 4",
      description:
        "Join a storytelling workshop hosted by renowned authors. Learn the art of crafting compelling stories.",
    },
    {
      id: 3,
      title: "New Arrivals Showcase",
      date: "March 5, 2025",
      time: "11:00 AM - 1:00 PM",
      location: "Main Lobby, StudyShelf Library",
      description:
        "Get a first look at the newest additions to our library collection. A special Q&A session with our librarians will follow.",
    },
    {
      id: 4,
      title: "Book Club Meetup",
      date: "March 15, 2025",
      time: "5:00 PM - 6:30 PM",
      location: "Reading Room, StudyShelf Library",
      description:
        "Discuss the book of the month with fellow readers. This month's book is '1984' by George Orwell.",
    },
    {
      id: 5,
      title: "Children's Story Hour",
      date: "April 2, 2025",
      time: "10:30 AM - 11:30 AM",
      location: "Kids' Section, StudyShelf Library",
      description:
        "A fun storytelling session for children aged 5-10. Featuring classic and modern tales.",
    },
    {
      id: 6,
      title: "Library Open Day",
      date: "April 15, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "StudyShelf Library",
      description:
        "Tour the library, meet our staff, and learn more about our services. Free memberships for new visitors on this day!",
    },
    {
      id: 7,
      title: "Poetry Reading Night",
      date: "May 5, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Auditorium, StudyShelf Library",
      description:
        "Enjoy an evening of poetry reading by local poets and enthusiasts. Open mic slots available for participants.",
    },
    {
      id: 8,
      title: "Digital Resources Workshop",
      date: "May 20, 2025",
      time: "3:00 PM - 4:30 PM",
      location: "Computer Lab, StudyShelf Library",
      description:
        "Learn how to access and use the library's digital resources, including e-books and online journals.",
    },
    {
      id: 9,
      title: "Summer Reading Challenge Kickoff",
      date: "June 1, 2025",
      time: "11:00 AM - 12:00 PM",
      location: "StudyShelf Library",
      description:
        "Kick off the summer reading challenge with activities, games, and book sign-ups for all age groups.",
    },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <Helmet>
        <title>Events - Study Shelf</title>
      </Helmet>
      <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-center">
        Events & Announcements
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 max-w-7xl mx-auto">
        {events.map((event) => (
          <div
            key={event.id}
            className="event-card bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition animate__animated animate__zoomIn"
          >
            <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
              {event.title}
            </h2>
            <div>
              <p className="text-black mb-1">
                <strong>Date:</strong> {event.date}
              </p>
              <p className="text-black mb-1">
                <strong>Time:</strong> {event.time}
              </p>
              <p className="text-black mb-1">
                <strong>Location:</strong> {event.location}
              </p>
            </div>
            <p className="text-gray-900 mt-4 first-letter:text-2xl">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
