import { useParams } from "react-router-dom";

const EditDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>EditDetailPage</h1>
      <p>Event ID: {params.eventId}</p>
    </>
  );
};

export default EditDetailPage;
