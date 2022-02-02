import { FaStar } from 'react-icons/fa'
import { useState } from 'react'

const Star = ({ selected = false, onSelect = f => f }) => {
    return (
        <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
    )
}

const createArray = length => [...Array(length)]

function Rating({ totalStars = 5 }) {
    const [selectedStars, setSelectedStars] = useState(0)
    return (
        <div>
            {createArray(totalStars).map((n, i) =>
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1)} />
            )}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    )
};

export default Rating