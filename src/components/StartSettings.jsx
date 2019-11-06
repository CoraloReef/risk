import React from 'react';
import faker from 'faker';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { I18n } from 'react-redux-i18n';
import { Row, Col } from 'react-bootstrap';

import connect from '../connect';

const colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];
const playersCount = 6;

const rowOptions = colors.map((c, i) => {
  const option = {
    id: i,
    color: c,
    name: faker.name.findName(),
  };
  return option;
});

const mapStateToProps = (state) => {
  const {
    i18n: { locale },
  } = state;

  return { locale };
};

export default @reduxForm({ form: 'players' })
@connect(mapStateToProps)

class StartSettings extends React.Component {
  handleSubmitStartSettings = (values) => {
    const { addPlayer, setGamePhase } = this.props;
    const phase = 'territory allocation';

    try {
      for (let i = 0, id = 0; i < playersCount; i += 1) {
        if (values[`player${i}Type`] !== 'disabled') {
          addPlayer({
            id,
            color: rowOptions[i].color,
            name: (values[`player${i}Name`] === undefined) ? rowOptions[i].name : values[`player${i}Name`],
            type: (values[`player${i}Type`] === undefined) ? 'human' : values[`player${i}Type`],
          });
          id += 1;
        }
      }

      setGamePhase({ phase });
    } catch (err) {
      throw new SubmissionError({ _error: err.message });
    }
  };

  generateRows = () => {
    const { submitting } = this.props;

    return rowOptions.map((el) => (
      <Row key={el.color}>
        <Col xs={1}>
          <div className={`player-color ${el.color}`} />
        </Col>
        <Col xs={8}>
          <div className="form-group">
            <Field
              name={`player${el.id}Name`}
              component="input"
              type="text"
              placeholder={el.name}
              className="form-control form-control-lg"
              disabled={submitting}
            />
          </div>
        </Col>
        <Col xs={3}>
          <div className="form-group">
            <Field
              name={`player${el.id}Type`}
              component="select"
              className="form-control form-control-lg"
            >
              <option value="human" checked>{I18n.t('forms.human')}</option>
              <option value="ai">{I18n.t('forms.ai')}</option>
              <option value="disabled">{I18n.t('forms.disabled')}</option>
            </Field>
          </div>
        </Col>
      </Row>
    ));
  }

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <Row className="justify-content-md-center">
        <Col sm={9}>
          <h2 className="mb-4">{I18n.t('phases.start')}</h2>

          <form onSubmit={handleSubmit(this.handleSubmitStartSettings)}>

            {this.generateRows()}

            <div className="text-center">
              <button className="btn btn-primary" type="submit">
                {submitting
                  ? I18n.t('forms.start-btn-submit-processing')
                  : I18n.t('forms.start-btn-submit')}
              </button>
            </div>

          </form>
        </Col>
      </Row>
    );
  }
}
