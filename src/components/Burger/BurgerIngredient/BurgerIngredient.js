import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.module.css';

const ingredient = {
    "bread-bottom": <div className={classes.BreadBottom} />,
    "bread-top": (
        <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
        </div>
    ),
    meat: <div className={classes.Meat} />,
    cheese: <div className={classes.Cheese} />,
    bacon: <div className={classes.Bacon} />,
    salad: <div className={classes.Salad} />,
};

class BurgerIngredient extends Component {
    render() {
        return ingredient[this.props.type] || null;
    }
}

BurgerIngredient.propTypes = {
    //type: PropTypes.oneOf(Object.keys(ingredient)).isRequired
    type: PropTypes.oneOf([
      "bread-bottom",
      "bread-top",
      "meat",
      "cheese",
      "bacon",
      "salad",
    ]).isRequired,
};

export default BurgerIngredient;