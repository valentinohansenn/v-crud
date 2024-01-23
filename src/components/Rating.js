"use client";
import * as React from "react";
import Rating from "@mui/material/Rating";

export default function HalfRating(props) {
  const { rating } = props;
  return (
    <span className="flex flex-row font-sans">
      <Rating
        name="half-rating-readsos"
        defaultValue={rating}
        precision={0.1}
        size="medium"
        readOnly
      />
      <div className={`ml-2 text-base flex items-center font-medium`}>
        {rating}
      </div>
    </span>
  );
}
