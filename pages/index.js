import MeetupList from "../components/meetups/MeetupList";
// import Photo from "../assets/photo-1.jpg";
// import Photo2 from "../assets/photo-2.jpg";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1598px-Stadtbild_M%C3%BCnchen.jpg",
    address: "New address 5, 12234 New City",
    description: "This is the first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1598px-Stadtbild_M%C3%BCnchen.jpg",
    address: "New address 5, 12234 New City",
    description: "This is the second meetup",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1598px-Stadtbild_M%C3%BCnchen.jpg",
    address: "New address 5, 12234 New City",
    description: "This is the third meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
export default HomePage;
