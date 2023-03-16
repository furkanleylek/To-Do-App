'use client'
import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCrudContext } from '@/components/context';

function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.random() * n);
    }
    return retVal;
}

function Create() {

    const { setAllJobs } = useCrudContext()
    const [emailState, setEmailState] = useState('')
    const [titleState, setTitleState] = useState('')
    const [dateState, setDateState] = useState('')

    let key = generatePassword()
    return (
        <div>
            <Formik
                initialValues={{
                    title: '',
                    description: '',
                    password: '',
                    check: false,
                    gender: 2,
                    location: []
                }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={values => {
                    handleReset
                }}
            >
                {({ values, handleReset }) => (
                    <Form className='flex flex-col justify-center items-center bg-greyBlue pt-20'>
                        <div className='relative w-[250px] h-full'>
                            <Field type="text-area" name="description" id="description" className="w-full p-4 border-2 border-greyWhite text-white bg-greyBlue outline-none rounded " /><br />
                            <span className='absolute p-[14px] top-0 left-0 pointer-events-none text-md text-greyWhite uppercase transition-all duration-300 ' id='emailSpan'>Description</span>
                        </div>
                        <div className='relative w-[250px] h-full mt-10'>
                            <Field type="text" name="title" id="tel" className="w-full p-4 border-2 border-greyWhite text-white bg-greyBlue outline-none rounded" /><br />
                            <span className='absolute p-[14px] top-0 left-0 pointer-events-none text-md text-greyWhite uppercase transition-all duration-300 opacity-30 ' id='telSpan'>Telefon Numarası</span>
                        </div>
                        <ErrorMessage name="description" component="div" />
                        {/* <Field type="password" name="password" className="border-2 w-full my-4" /><br />
                        <ErrorMessage name="password" component="div" /> */}
                        <label>
                            <Field type="checkbox" name="check" />
                            Kabul Ediyorum
                        </label><br />
                        {/* <Field component="select" name="gender" className="border-2 rounded bg-grey my-8">
                            <option value={1}>BİR</option>
                            <option value={2}>iki</option>
                        </Field><br />
                        <Field
                            component="select"
                            id="location"
                            name="location"
                            multiple={true}
                        >
                            <option value="NY">New York</option>
                            <option value="SF">San Francisco</option>
                            <option value="CH">Chicago</option>
                            <option value="OTHER">Other</option>
                        </Field> */}
                        <button className='border-2 p-2 rounded-xl disabled:opacity-60' disabled={!values.check} type='submit' onClick={() => { setAllJobs(oldArray => [...oldArray, { id: key, email: values.email, title: values.title, date: values.password }]), handleReset }}>Create</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Create