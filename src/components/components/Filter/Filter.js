import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFilters } from '../../../services/Filter/action';
import Checkbox from './components/CheckBox/CheckBox';

import './Filter.scss';

const category = ['A', 'B', 'C', 'D', 'E'];

class Filter extends Component {

    componentDidMount() {
        this.selectedCheckboxes = new Set();
    }

    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }

        this.props.updateFilters(Array.from(this.selectedCheckboxes));
    };

    createCheckbox = label => (
        <Checkbox
            classes="filters-available-size"
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
    );

    createCheckboxes = () => category.map(this.createCheckbox);

    render() {
        return (
            <div className="filters">
                <h4 className="title">category:</h4>
                {this.createCheckboxes()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    filters: state.filters.items
});

export default connect(
    mapStateToProps,
    { updateFilters }
)(Filter);
