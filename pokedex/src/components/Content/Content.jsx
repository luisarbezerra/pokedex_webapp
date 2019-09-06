import React from 'react';
import './Content.scss';
import Card from "../Card/Card"

export default class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount () {
        this.props.fetchPokemon();
    }

    render() {
        return (
            <div className="content">
                <div className="cards-table"> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                </div>
            </div>
        );
    }
}   
