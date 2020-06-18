import React, { useState, Suspense } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import faker from 'faker';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { actions } from '../slices';

import Loader from './Loader';

const mapStateToProps = () => ({});
const actionCreators = {
  addPlayer: actions.addPlayer,
  setGamePhase: actions.setGamePhase,
};

const colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];
const playersCount = 6;

const rowOptions = colors.map((color, i) => {
  const option = {
    id: i,
    color,
    name: faker.name.findName(),
  };

  return option;
});

const Component = (props) => {
  const { t } = useTranslation();

  const compareFormState = rowOptions.reduce(
    (acc, el) => ({
      ...acc,
      [`player${el.id}Name`]: el.name,
      [`player${el.id}Type`]: 'human',
    }),
    {},
  );

  const [form, setForm] = useState(compareFormState);

  const handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setForm({ ...form, [target.name]: value });
  };

  const handleSubmitSettings = (event) => {
    event.preventDefault();

    const { addPlayer, setGamePhase } = props;

    const phase = 'territoryAllocation';

    for (let i = 0, id = 0; i < playersCount; i += 1) {
      if (form[`player${i}Type`] !== 'disabled') {
        const player = {
          id,
          color: rowOptions[i].color,
          name: form[`player${i}Name`] === undefined ? rowOptions[i].name : form[`player${i}Name`],
          type: form[`player${i}Type`] === undefined ? 'human' : form[`player${i}Type`],
        };

        addPlayer({ player });

        id += 1;
      }
    }

    setGamePhase({ phase });
  };

  const generateRows = () => {
    return rowOptions.map((el) => (
      <Row key={el.color}>
        <Col xs={1}>
          <div className={`player-color ${el.color}`} />
        </Col>
        <Col xs={8}>
          <Form.Control
            name={`player${el.id}Name`}
            value={form[`player${el.id}Name`]}
            onChange={handleChange}
            type="text"
            placeholder={el.name}
          />
        </Col>
        <Col xs={3}>
          <Form.Control as="select" name={`player${el.id}Type`} onChange={handleChange}>
            <option value="human" checked>
              {t('forms.human')}
            </option>
            <option value="ai">{t('forms.ai')}</option>
            <option value="disabled">{t('forms.disabled')}</option>
          </Form.Control>
        </Col>
      </Row>
    ));
  };

  return (
    <Row className="justify-content-md-center">
      <Col sm={9}>
        <h2 className="mb-4">{t('phases.start')}</h2>

        <Form>
          {generateRows()}

          <div className="text-center">
            <Button variant="primary" type="submit" onClick={handleSubmitSettings}>
              {t('forms.start-btn-submit')}
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

const ConnectComponent = connect(mapStateToProps, actionCreators)(Component);

const StartSettings = () => (
  <Suspense fallback={<Loader />}>
    <ConnectComponent />
  </Suspense>
);

export default StartSettings;
