import React, { useEffect, useCallback, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import Spinner from '../../components/spinner/spinner.component';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);
const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();
  const fetchCollectionsStartHandler = useCallback(
    () => dispatch(fetchCollectionsStart()),
    [dispatch]
  );

  useEffect(() => {
    fetchCollectionsStartHandler();
    // dispatch(fetchCollectionsStart()); // better?
  }, [fetchCollectionsStartHandler]); // fetchCollectionsStart will not change.

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

export default ShopPage;
