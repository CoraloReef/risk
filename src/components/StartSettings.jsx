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
  handleSubmitStartSettings = async (values) => {
    const { reset, postChannel } = this.props;
    const { channelName } = values;
    const channelData = {
      name: channelName,
      removable: true,
    };

    try {
      await postChannel(channelData);
      reset();
    } catch (err) {
      throw new SubmissionError({ _error: err.message });
    }
  };

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <Row className="justify-content-md-center">
        <Col sm={8}>
          <h2 className="mb-4">{I18n.t('phases.start')}</h2>

          <form onSubmit={handleSubmit(this.handleSubmitStartSettings)}>

            <Row>
              <Col xs={1}>
                <div className="player-color red" />
              </Col>
              <Col xs={7}>
                <div className="form-group mb-3">
                  <Field
                    name="player1Name"
                    component="input"
                    type="text"
                    placeholder={I18n.t('forms.start-field-player')}
                    className="form-control form-control-lg"
                    disabled={submitting}
                    required
                  />
                </div>
              </Col>
              <Col xs={4}>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <span className="form-check-label">{I18n.t('forms.human')}</span>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <span className="form-check-label">{I18n.t('forms.ai')}</span>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <span className="form-check-label">
                    {I18n.t('forms.disabled')}
                  </span>
                </div>
              </Col>
            </Row>

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
