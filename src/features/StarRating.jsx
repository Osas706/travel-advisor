import { Star } from 'lucide-react';

const StarRating = ({ value = 0, readOnly = true, size = 20 }) => {
  const stars = [];
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      // Full star
      stars.push(
        <Star
          key={i}
          size={size}
          className="fill-yellow-400 text-yellow-400"
        />
      );
    } else if (i === fullStars && hasHalfStar) {
      // Half star
      stars.push(
        <div key={i} className="relative inline-block">
          <Star size={size} className="text-gray-300" />
          <div className="absolute top-0 left-0 overflow-hidden" style={{ width: '50%' }}>
            <Star size={size} className="fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    } else {
      // Empty star
      stars.push(
        <Star
          key={i}
          size={size}
          className="text-gray-300"
        />
      );
    }
  }

  return (
    <div className="flex items-center gap-0.5">
      {stars}
    </div>
  );
};

export default StarRating;
