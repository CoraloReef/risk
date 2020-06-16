import React, { Suspense } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import LanguagesSwitcher from './LanguagesSwitcher';
import Loader from './Loader';

const Component = () => {
  const { t } = useTranslation();

  return (
    <header className="mb-4">
      <Container>
        <Row className="justify-content-between">
          <Col>
            <h1 className="heading">{t('app.heading')}</h1>
          </Col>
          <Col>
            <LanguagesSwitcher />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

const Header = () => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

export default Header;
