import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import { setLocale } from 'react-redux-i18n';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  const { locale } = state.i18n;
  return { locale };
};

const mapDispatchToProps = (dispatch) => {
  const action = { setLocale };
  return {
    action: bindActionCreators(action, dispatch),
  };
};

class LanguagesSwitcher extends React.Component {
  handleSwitchLanguage = (language) => (e) => {
    e.preventDefault();

    const { action } = this.props;
    action.setLocale(language);
  }

  getLanguageClass = (lang) => {
    const { locale } = this.props;
    return cn({
      active: locale === lang,
    });
  }

  render() {
    return (
      <div className="lang-switcher links">
        <a href="#ru" className={this.getLanguageClass('ru')} onClick={this.handleSwitchLanguage('ru')}>RUS</a>
        <a href="#en" className={this.getLanguageClass('en')} onClick={this.handleSwitchLanguage('en')}>ENG</a>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguagesSwitcher);