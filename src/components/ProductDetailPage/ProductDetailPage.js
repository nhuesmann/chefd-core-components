import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from '../../axios-products';

import styles from './ProductDetailPage.scss';

import ImageGallery from './ImageGallery/ImageGallery';
import ProductDetail from './ProductDetail/ProductDetail';

export default class ProductDetailPage extends Component {
  static propTypes = {
    productId: PropTypes.string,
  };

  state = {
    product: null,
  };

  async componentDidMount() {
    const { data } = await axios.get(`/products/${this.props.productId}.json`);

    this.setState({ product: data });
  }

  render() {
    return (
      <div className={styles.productDetailPage}>
        <ImageGallery />
        {this.state.product ? (
          <ProductDetail product={this.state.product} />
        ) : null}
      </div>
    );
  }
}
