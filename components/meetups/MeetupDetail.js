import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt="Meetup Image" />
      <h1>{props.title}</h1>
      <adddress>{props.address}</adddress>
      <p>{props.description}</p>
    </section>
  );
}
export default MeetupDetail;
