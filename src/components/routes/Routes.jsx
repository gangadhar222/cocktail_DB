import React from 'react';
import {Switch,Route} from 'react-router-dom';
import SearchForm from '../searchForm/SearchForm';
import Product from '../products/Products';

export default function Routes() {
    return (
            <Switch>
                <Route exact path="/" render={()=><SearchForm />} />
                <Route exact path="/product" render={()=><Product />} />
            </Switch>
    )
}