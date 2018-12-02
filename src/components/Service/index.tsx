import * as React from 'react';
import { Link } from 'react-router-dom';

import { Image } from 'components/Image';

export const Service = ({ service }) => {
  return (
    <React.Fragment>
      <div className="card-item">
        <div className="card-thumb">
          <a>
            <Image
              src={service.featuredImage}
              className="lazyload attachment-large size-large"
              alt={service.slug}
            />
          </a>
          {service.parts.length > 1 ? (
            <Link to={`/services/${service.slug}`}>
              <button className="btn btn-primary btn-sm card-series">
                Series
              </button>
            </Link>
          ) : null}
        </div>
        <div className="card-information">
          <div className="card-content">
            <h4 className="card-title">
              <Link to={`/services/${service.slug}`}>{service.title}</Link>
            </h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
