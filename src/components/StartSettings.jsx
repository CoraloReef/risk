import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { I18n } from 'react-redux-i18n';
import { Row, Col } from 'react-bootstrap';

import connect from '../connect';

const mapStateToProps = (state) => {
  const {
    i18n: { locale },
  } = state;

  return { locale };
};

export default @reduxForm({ form: 'newChannel' })
@connect(mapStateToProps)

class StartSettings extends React.Component {
  handleSubmitStartSettings = (values) => {
    const { setGamePhase } = this.props;
    const phase = 'territory allocation';

    try {
      setGamePhase({ phase });
    } catch (err) {
      throw new SubmissionError({ _error: err.message });
    }
  };

  generateRows = () => {
    const rowOptions = [
      { id: 1, color: 'red' },
      { id: 2, color: 'blue' },
      { id: 3, color: 'yellow' },
      { id: 4, color: 'green' },
      { id: 5, color: 'purple' },
      { id: 6, color: 'orange' },
    ];

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
              placeholder={I18n.t('forms.start-field-player')}
              className="form-control form-control-lg"
              disabled={submitting}
              required
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
              <option value="human">{I18n.t('forms.human')}</option>
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
