import React from 'react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/core';

const BreadCrumb = () => (
  <div>
    <Breadcrumb separator='-'>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to='/profile'>
          Profile
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to='/about'>
          About
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink as={Link} to='/logout'>
          Logout
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
);

export default BreadCrumb;
