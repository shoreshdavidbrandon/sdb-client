import { EmailBanner } from 'components/EmailBanner';
import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import { Service } from 'components/Service';
import gql from 'graphql-tag';
import { tabData } from 'pages/ServiceListPage/tabs';
import * as React from 'react';
import { Query } from 'react-apollo';
// import { Link } from 'react-router-dom';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';

const query = gql`
  {
    services {
      title
      slug
      featuredImage
      content
      createdAt
    }
  }
`;

export const ServiceListPage = () => {
  return (
    <React.Fragment>
      <Container fluid>
        <Row className="padding-50">
          <Col lg="3">
            <ListGroup>
              {tabData.map(tab => (
                <ListGroupItem
                  key={tab.id}
                  action
                  tag="a"
                  style={{ marginBottom: 10 }}
                >
                  {tab.title}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col>
            <Row>
              <Query query={query}>
                {({ loading, error, data }) => {
                  if (loading) {
                    return <Loading />;
                  }
                  if (error) {
                    return <Error error={error} />;
                  }
                  return data.services.map(service => (
                    <Col lg="4" key={service.slug}>
                      <Service service={service} />
                    </Col>
                  ));
                }}
              </Query>
            </Row>
          </Col>
        </Row>
      </Container>
      <EmailBanner />
    </React.Fragment>
  );
};
