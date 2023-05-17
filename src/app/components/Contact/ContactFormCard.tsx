import { Form, Formik } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import { Button, Col, Row, Spinner } from 'react-bootstrap';
import * as Yup from 'yup';
import { InputField } from '../Form';
import 'assets/scss/Components/Contact/ContactFormCard.scss';
// import SendingGif from 'assets/gif/sending_trans_30.gif';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

// form type
export type FormItem = {
  name: string;
  email: string;
  message: string;
};

// form initialValues
const FORM_ITEM = {
  name: '',
  email: '',
  message: '',
};

const SCHEMA = Yup.object({
  name: Yup.string().max(30, 'Maximum 30 characters').required('Required'),
  email: Yup.string().email('Please input valid email.').required('Required'),
  message: Yup.string()
    .min(10, 'At least 10 characters')
    .max(200, 'Maximum 200 characters')
    .required('Required'),
});

const ContactFormCard = () => {
  const [form, setForm] = useState<FormItem>(FORM_ITEM);
  const [loading, setLoading] = useState<boolean>(false);

  // const resetForm = useCallback(() => {
  //   setForm({
  //     name: '',
  //     email: '',
  //     message: '',
  //   });
  // }, []);

  // useEffect(() => {
  //   resetForm();
  // }, [resetForm]);

  const onSubmit = (values: FormItem) => {
    setLoading(true);

    const { name, email, message } = values;
    const params = {
      from_name: name,
      email_id: email,
      message,
    };

    emailjs
      .send('service_oipuaat', 'template_ovu66h6', params, 'qqkoKcjfSaGUgBB6e')
      .then(
        result => {
          toast.success('Submitted Successfully!');
          setLoading(false);
        },
        error => {
          console.log(error);
          toast.error('Failed to submit.  Please try again.');
          setLoading(false);
        },
      );
  };

  return (
    <div className="cus-card">
      <Formik
        initialValues={form}
        validationSchema={SCHEMA}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ values, errors, setFieldValue, setFieldError }) => (
          <Form>
            <Row>
              <Col md={12}>
                <InputField name="name" placeholder="Name" />
              </Col>
              <Col md={12}>
                <InputField name="email" placeholder="Email" />
              </Col>
              <Col md={12}>
                <InputField
                  name="message"
                  type="textarea"
                  placeholder="Message"
                />
              </Col>
            </Row>
            <div className="mt-3 text-center">
              <Button
                type="submit"
                className="ms-1 "
                disabled={loading}
                style={{ margin: 'auto', width: '80px' }}
              >
                {loading ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  'Submit'
                )}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactFormCard;
