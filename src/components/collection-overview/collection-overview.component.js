import React from 'react';
import CollectionPreview from '../preview-collection/collection.component';
import {selectShopCollections} from '../../redux/shop/shop.selectors';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './collections-overview.styles.scss';

const CollectionOverview = ({collections}) =>{
    return (
        <div>
        {Object.values(collections).map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
  })

export default connect(mapStateToProps)(CollectionOverview);
