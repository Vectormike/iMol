import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/actions/product';

import TableHeader from './table-header';
import TableRow from './table-row';

const header = ['Name', 'Price'];

const Table = ({ getProducts, products: { products } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <Fragment>
      <table>
        <TableHeader header={header} />
        <tbody>
          {products.map((product, i) => (
            <TableRow key={i} products={product} />
          ))}
          <TableRow />
        </tbody>
      </table>
    </Fragment>
  );
};

Table.propTypes = {
  products: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: state.product
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
