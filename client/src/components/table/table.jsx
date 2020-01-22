import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/actions/product';

import TableHeader from './table-header';
import TableRow from './table-row';

const header = ['Name', 'Price'];

const Table = ({ product: products, loading }) => {
  return (
    <Fragment>
      <table>
        <TableHeader header={header} />
        <tbody>
          {products.map(product => (
            <TableRow key={product._id} products={product} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

Table.propTypes = {
  product: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
