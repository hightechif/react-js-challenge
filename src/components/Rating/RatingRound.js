import React from 'react';

const RatingRound = () => {
    return (
        <div className="rating">
            <span><input type="radio" name="rating" id="str1" value="1"/><label htmlFor="str1"></label></span>
            <span><input type="radio" name="rating" id="str2" value="2"/><label htmlFor="str2"></label></span>
            <span><input type="radio" name="rating" id="str3" value="3"/><label htmlFor="str3"></label></span>
            <span><input type="radio" name="rating" id="str4" value="4"/><label htmlFor="str4"></label></span>
            <span><input type="radio" name="rating" id="str5" value="5"/><label htmlFor="str5"></label></span>
        </div>
    )
}

export default RatingRound;
