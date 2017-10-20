import React from 'react';
import '../styles/common.css';


const ReviewItem = (props) => {

    return (
        <div className="review-item">
            <div className="sub-header">
                <span className="name">Carmen C.</span>
                <span className="separator">|</span>
                <span className="date">{props.date}</span>
            </div>
            <p className="title">{props.title}</p>
            <p className="review">{props.review}</p>
            <span>{props.stars}</span>
        </div>
    );
}

export const ReviewList = (props) => {
    console.log(props);
    return (
        <div>
            <h2>What our customers say</h2>
            {props.reviews.map(review => <ReviewItem {...review} key={review.title} /> )}
        </div>
    )
}

const ReviewInput = (props) => {
    return (
        <div>
            <label>{props.name}</label>
            <input 
                className="reviews"
                type={props.type} 
                name={props.name} 
                value={props.value}
            />
        </div>
    );
}

//inputs={this.state.inputs}

export const ReviewForm = (props) => {

    return (
        <div>
            <ReviewList reviews={props.reviews} />
            <form onSubmit={props.onSubmit}>
                {props.inputs.map(input => <ReviewInput {...input} key={input.name}/> )}
                <button type="submit" name="enviar" value="Enviar">Enviar</button>
            </form>
        </div>
    );
}

//export default ReviewForm;