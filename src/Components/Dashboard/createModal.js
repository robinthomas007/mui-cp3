import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '../Common/TextField';
import { Box, Grid, Modal } from '@mui/material';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


function CustomizedDialogs(props) {
  const { open, handleClose, param } = props

  const formSubmit = (values) => {
    if (param) {
      props.updateRow(values)
    } else {
      values['id'] = Math.floor(Math.random() * 10);
      props.addRow(values)
    }
  }

  React.useEffect(() => {
    if (param)
      props.initialize(param.row)
  }, [param]);


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={props.handleSubmit(formSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={11}>
                <Typography variant="h6" gutterBottom component="div">
                  {param ? 'Edit Record' : 'Create Record'}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer' }} />
              </Grid>
              <Grid item xs={6}>
                <Field name="track_title" component={TextField} label="Title" />
                <Field name="artist" component={TextField} label="Artist" />
                <Field name="isrc" component={TextField} label="ISRC" />
                <Field name="label" component={TextField} label="Label" />
                <Field name="policy" component={TextField} label="Policy" />
              </Grid>
              <Grid item xs={6}>
                <Field name="leak_date" type="date" component={TextField} label="Leak Date" />
                <Field name="release_date" type="date" component={TextField} label="Release Date" />
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={2}>
                <Button type="submit" variant="contained">Submit</Button>
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" onClick={handleClose} sx={{ bgcolor: 'button.primary', color: 'text.primary', borderRadius: '2px', '&:hover': { bgcolor: '#ddd' }, }}>Cancel</Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}


CustomizedDialogs.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const CustomizedDialogsComp = reduxForm({
  form: 'CustomizedDialogsForm',
})(CustomizedDialogs);

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CustomizedDialogsComp);
