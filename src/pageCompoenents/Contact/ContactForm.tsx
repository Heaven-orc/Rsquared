import React from 'react';
import dynamic from 'next/dynamic'
import styled from 'styled-components';
import { TFunction, useTranslation } from 'next-i18next';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from "yup";

import { deviceMedia } from 'common/media';
import AssetsImage from 'pageCompoenents/Home/assets';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';


const DynamicPopupThankyou = dynamic(() => import("./PopupThankyou"), {
    ssr: false,
})

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const SignupSchema = (t: TFunction) => Yup.object().shape({
    fullName: Yup.string()
        .required(t("form.schema.text1")),
    email: Yup.string()
        .required(t("form.schema.text1"))
        .email(t("form.schema.text2")),
    phone: Yup.string()
        .required(t("form.schema.text1"))
        .matches(phoneRegExp, t("form.schema.text3")),
});


const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    countryRegion: "",
    message: "",
}

type TInitialValues = typeof initialValues

const ContactForm = () => {
    const { t } = useTranslation('r2Contact');
    const [popupOpen, setPopupOpen] = React.useState<boolean>(false)

    const handleSubmit = (values: TInitialValues, actions: FormikHelpers<TInitialValues>) => {
        alert(JSON.stringify(values))
        setPopupOpen(!popupOpen)
        actions.resetForm()
    }

    return (
        <>
            <Section>
                <InnerContainer data-aos="fade-up">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={SignupSchema(t)}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <FormGrid>
                                    <Field
                                        errors={errors.fullName && touched.fullName ? <div>{errors.fullName}</div> : null}
                                        placeholder={t("form.field.text1")}
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        as={FormInput}
                                    />
                                    <Field
                                        errors={errors.email && touched.email ? <div>{errors.email}</div> : null}
                                        placeholder={t("form.field.text2")}
                                        id="email"
                                        name="email"
                                        type="email"
                                        as={FormInput}
                                    />
                                    <Field
                                        errors={errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
                                        placeholder={t("form.field.text3")}
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        as={FormInput}
                                    />
                                    <Field
                                        errors={errors.companyName && touched.companyName ? <div>{errors.companyName}</div> : null}
                                        placeholder={t("form.field.text4")}
                                        id="companyName"
                                        name="companyName"
                                        type="text"
                                        as={FormInput}
                                    />
                                    <Field
                                        errors={errors.countryRegion && touched.countryRegion ? <div>{errors.countryRegion}</div> : null}
                                        placeholder={t("form.field.text5")}
                                        id="countryRegion"
                                        name="countryRegion"
                                        type="text"
                                        as={FormInput}
                                    />
                                    <Field
                                        errors={errors.message && touched.message ? <div>{errors.message}</div> : null}
                                        placeholder={t("form.field.text6")}
                                        id="message"
                                        name="message"
                                        type="text"
                                        maxLength={1200}
                                        as={FormTextarea}
                                    />
                                </FormGrid>
                                <ButtonWrapInner>
                                    <SubmitButton type='submit'>
                                        <span>{t("form.button.text")}</span>
                                        <img width="67" height="67" src={AssetsImage.heroArrowSubBtn} alt="arr" />
                                    </SubmitButton>
                                </ButtonWrapInner>
                            </Form>
                        )}
                    </Formik>
                </InnerContainer>
            </Section >
            <DynamicPopupThankyou popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
        </>
    );
}

export default ContactForm;

const Section = styled.section`
    overflow: hidden;
    padding-bottom: 127px;
    position: relative;
    
    &:after {
        content: '';
        width: 100%;
        height: 1px;
        background-color: ${props => props.theme.black};
        bottom: 127px;
        left: 0;
        position: absolute;
    }
`;
const InnerContainer = styled.div`
    width: min(100%, ${props => props.theme.maxWidth});
    margin: 0 auto;
    padding: 60px 41px 70px;
    ${deviceMedia.media1440} {
        padding: 60px 6px 70px;
        padding: 60px
        calc(6px + (35 - 6) * ((100vw - 428px) / (${props => props.theme.maxWidth?.replace("px", '')} - 428)))
        70px;
    }
`;
const FormGrid = styled.div`
    display: grid;
    label {
        padding: 12px;
    }
    
    grid-template-columns: 1fr;
    ${deviceMedia.minMedia768}{
        grid-template-columns: 1fr 1fr;
        label:nth-child(5) {
            grid-column: span 2 / span 2;
        }
        label:nth-child(6) {
            grid-column: span 2 / span 2;
        }
    }
`;
const ButtonWrapInner = styled.div`
    margin-top: 43px;
    display: inline-block;
`;
const SubmitButton = styled.button`
    font-family: ${props => props.theme.PublicSansBold};
    
    background: transparent;
    border: 0;
    margin: 0;
    padding: 0 12px;
    cursor: pointer;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: .2px;
    color: ${props => props.theme.white};
    display: flex;
    align-items: center;
    
    &:hover {
        span {
            background-color: ${props => props.theme.lime};
            color: ${props => props.theme.black};
        }
        
        img {
            transform: translateX(13px) rotate(45deg);
        }
    }
    
    span,
    img {
        transition: .2s ease-in-out;
    }
   
    span {
        padding: 20px 24px;
        border-radius: 8px;
        background-color: ${props => props.theme.black};
        margin-right: 9px;
    }
`;
