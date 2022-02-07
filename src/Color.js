import React from "react";
import Rating from "./star/Rating";

export default function Color({ title, color, rating }) {
    return (
        <section>
            <h1>{title}</h1>
            <div style={{ height: 50, backgroundColor: color }} />
            <Rating selectedStars={rating} />
        </section>
    );
}