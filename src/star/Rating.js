import { FaStar } from 'react-icons/fa'
import { useState } from 'react'
import { createArray } from '../lib'

const Star = ({ selected = false, onSelect = f => f }) => {
    return (
        <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
    )
}

function Rating({
    totalStars = 5,
    selectedStars = 0,
    onRate = f => f
}) {
    return (
        <>
            {createArray(totalStars).map((n, i) =>
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => onRate(i + 1)} />
            )}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    )
};

export default Rating