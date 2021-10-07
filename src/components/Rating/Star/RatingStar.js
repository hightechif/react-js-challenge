import React from 'react';
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
import 'RatingStar.css';

function RatingStar() {
    return (
        <div className="rating">
            <span><input type="radio" name="rating" id="str1" value="1"/><label htmlFor="str1" className="fa fa-star"></label></span>
            <span><input type="radio" name="rating" id="str2" value="2"/><label htmlFor="str2" className="fa fa-star"></label></span>
            <span><input type="radio" name="rating" id="str3" value="3"/><label htmlFor="str3" className="fa fa-star"></label></span>
            <span><input type="radio" name="rating" id="str4" value="4"/><label htmlFor="str4" className="fa fa-star"></label></span>
            <span><input type="radio" name="rating" id="str5" value="5"/><label htmlFor="str5" className="fa fa-star"></label></span>
        </div>
    )
}

export default RatingStar
