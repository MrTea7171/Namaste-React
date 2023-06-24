import { shimmer_card_unit } from "../constants";

// Shimmer card to display with animation
const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke"></div>
      <div className="shimmer-title stroke"></div>
      <div className="shimmer-tags stroke "></div>
      <div className="shimmer-details stroke "></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {new Array(shimmer_card_unit).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};
export default Shimmer;
