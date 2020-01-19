import React from 'react';
import { Breadcrumb, BreadcrumbItem, Icon } from '@chakra-ui/core';

import Modal from '../modal/modal';
import Heading from '../heading/heading';
import Button from '../button/button';
import Table from '../table/table';

const Products = () => {
  return (
    <div>
      <Heading header='Products' />
      <Breadcrumb
        spacing='8px'
        separator={<Icon color='gray.300' name='chevron-right' />}>
        <BreadcrumbItem>
          <Button name='All Products' />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Modal button='Add Products' title='Add Products' />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Button name='Refresh' />
        </BreadcrumbItem>
      </Breadcrumb>
      <Table />
    </div>
  );
};

export default Products;
