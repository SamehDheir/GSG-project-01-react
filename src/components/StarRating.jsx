import { useId } from "react";

const Star = ({ fill = 0, id }) => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden>
    <defs>
      <linearGradient id={id}>
        <stop offset={`${fill * 100}%`} stopColor="#FBBF24" />
        <stop offset={`${fill * 100}%`} stopColor="#D1D5DB" />
      </linearGradient>
    </defs>
    <path
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.043 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z"
      fill={`url(#${id})`}
    />
  </svg>
);

const StarRating = ({ rating = 0 }) => {
  const uid = useId();

  const roundedRating = Math.round((Number(rating) || 0) * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const hasHalf = roundedRating % 1 !== 0 ? 0.5 : 0;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center space-x-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`${uid}-full-${i}`} fill={1} id={`${uid}-grad-full-${i}`} />
      ))}
      {hasHalf === 0.5 && (
        <Star key={`${uid}-half`} fill={0.5} id={`${uid}-grad-half`} />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star
          key={`${uid}-empty-${i}`}
          fill={0}
          id={`${uid}-grad-empty-${i}`}
        />
      ))}
      <span className="ml-2 text-gray-500 text-lg font-semibold">
        ({rating})
      </span>
    </div>
  );
};

export default StarRating;
