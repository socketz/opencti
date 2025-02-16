import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { compose } from 'ramda';
import inject18n from './i18n';

const styles = () => ({
  chip: {
    fontSize: 12,
    lineHeight: '12px',
    height: 25,
    marginRight: 7,
    textTransform: 'uppercase',
    borderRadius: '0',
    width: 120,
  },
  chipInList: {
    fontSize: 12,
    lineHeight: '12px',
    height: 20,
    float: 'left',
    textTransform: 'uppercase',
    borderRadius: '0',
    width: 120,
  },
});

const inlineStyles = {
  green: {
    backgroundColor: 'rgba(76, 175, 80, 0.08)',
    color: '#4caf50',
  },
  red: {
    backgroundColor: 'rgba(244, 67, 54, 0.08)',
    color: '#f44336',
  },
  blue: {
    backgroundColor: 'rgba(92, 123, 245, 0.08)',
    color: '#5c7bf5',
  },
};

class ItemBoolean extends Component {
  render() {
    const {
      classes, label, status, variant, t,
    } = this.props;
    const style = variant === 'inList' ? classes.chipInList : classes.chip;
    if (status === true) {
      return (
        <Chip
          classes={{ root: style }}
          style={inlineStyles.green}
          label={label}
        />
      );
    }
    if (status === null) {
      return (
        <Chip
          classes={{ root: style }}
          style={inlineStyles.blue}
          label={t('Not applicable')}
        />
      );
    }
    return (
      <Chip classes={{ root: style }} style={inlineStyles.red} label={label} />
    );
  }
}

ItemBoolean.propTypes = {
  classes: PropTypes.object.isRequired,
  status: PropTypes.bool,
  label: PropTypes.string,
  variant: PropTypes.string,
  reverse: PropTypes.boolean,
};

export default compose(inject18n, withStyles(styles))(ItemBoolean);
