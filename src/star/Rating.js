import { FaStar } from 'react-icons/fa'
import { useState } from 'react'
import { createArray } from '../lib'

const Star = ({ selected = false, onSelect = f => f }) => {
    return (
        <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
    )
}

function Rating({ style = {}, totalStars = 5, ...props }) {
    const [selectedStars, setSelectedStars] = useState(0)
    return (
        <div style={{ padding: 5, ...style }} {...props}>
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