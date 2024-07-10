import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const REACT_APP_API_URL = `http://localhost:5000`;

const validationSchema = Yup.object({
  referrerName: Yup.string().required('Required'),
  referrerEmail: Yup.string().email('Invalid email').required('Required'),
  refereeName: Yup.string().required('Required'),
  refereeEmail: Yup.string().email('Invalid email').required('Required'),
});

const ModalForm = ({ onClose }) => {
  const formik = useFormik({
    initialValues: {
      referrerName: '',
      referrerEmail: '',
      refereeName: '',
      refereeEmail: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      fetch(`${REACT_APP_API_URL}/api/referrals`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          toast.success('Message sent successfully!');
          resetForm(); // Optionally reset the form after successful submission
          onClose(); // Close modal or perform any other action
        })
        .catch((error) => {
          console.error('Error:', error);
          toast.error('Failed to send message. Please try again.');
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        label="Referrer Name"
        name="referrerName"
        onChange={formik.handleChange}
        value={formik.values.referrerName}
        error={formik.touched.referrerName && Boolean(formik.errors.referrerName)}
        helperText={formik.touched.referrerName && formik.errors.referrerName}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Referrer Email"
        name="referrerEmail"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.referrerEmail}
        error={formik.touched.referrerEmail && Boolean(formik.errors.referrerEmail)}
        helperText={formik.touched.referrerEmail && formik.errors.referrerEmail}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Referee Name"
        name="refereeName"
        onChange={formik.handleChange}
        value={formik.values.refereeName}
        error={formik.touched.refereeName && Boolean(formik.errors.refereeName)}
        helperText={formik.touched.refereeName && formik.errors.refereeName}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Referee Email"
        name="refereeEmail"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.refereeEmail}
        error={formik.touched.refereeEmail && Boolean(formik.errors.refereeEmail)}
        helperText={formik.touched.refereeEmail && formik.errors.refereeEmail}
        required
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" fullWidth>
        Submit
      </Button>
      <ToastContainer />
    </form>
  );
};

export default ModalForm;
