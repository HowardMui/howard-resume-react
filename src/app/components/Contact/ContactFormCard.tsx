import { Form, Formik } from 'formik';
import { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import { InputField } from '../Form';
import 'assets/scss/Components/Contact/ContactFormCard.scss';
import SendingGif from 'assets/gif/sending_trans_30.gif';

// form type
export type FormItem = {
  name: string;
  email: string;
  title: string;
  number: number;
  contact: string;
};

// form initialValues
const FORM_ITEM = {
  name: '',
  email: '',
  title: '',
  number: 0,
  contact: '',
};

const SCHEMA = Yup.object({
  // oldPassword: Yup.string().required('必填項目'),
  // newPassword: Yup.string().required('必填項目'),
  // confirmNewPassword: Yup.string()
  //   .required('必填項目')
  //   .oneOf([Yup.ref('newPassword')], '密碼不相同'),
});

const ContactFormCard = () => {
  const [form, setForm] = useState<FormItem>(FORM_ITEM);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = () => {};

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
              {/* <Col md={12}>
                <InputField name="title" placeholder="Subject" />
              </Col> */}
              <Col md={12}>
                <InputField
                  name="content"
                  type="textarea"
                  placeholder="Message"
                />
              </Col>
            </Row>
            <div className="mt-3 text-center">
              <Button type="submit" className="ms-1" disabled={loading}>
                {loading ? (
                  <div>Loading</div>
                ) : (
                  <img src={SendingGif} alt="sending" width={60} height={40} />
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
