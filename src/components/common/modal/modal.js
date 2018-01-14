import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './modal.scss';

const modal = props => {
  return (
    <div className={cx(
      'modal',
      { 'is-active': props.active }
    )}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{props.title}</p>
          <button className="delete" aria-label="close" onClick={props.onCancel} />
        </header>
        <section className="modal-card-body">
          {props.children}
        </section>
        <footer className="modal-card-foot">
          {
            props.submit &&
            <button
              className={cx(
                'button',
                'is-success',
                { 'is-loading': props.loading }
              )}
              onClick={props.onSubmit}
            >
              {props.submit}
            </button>
          }
          {
            props.cancel &&
            <button
              className={cx('button')}
              onClick={props.onCancel}
            >
              {props.cancel}
            </button>
          }
        </footer>
      </div>
    </div>
  );
};

modal.propTypes = {
  children: PropTypes.object,
  loading: PropTypes.bool,
  title: PropTypes.string,
  active: PropTypes.bool,
  submit: PropTypes.string,
  cancel: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default modal;
