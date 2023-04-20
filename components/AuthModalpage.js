import React from 'react'
import { Formik, Form } from 'formik';
import { useEffect,useState,Fragment } from 'react';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { Dialog, Transition } from '@headlessui/react';
import * as Yup from 'yup';
import Input from '../components/Input';
import { SparklesIcon, MailOpenIcon, XIcon } from '@heroicons/react/outline';

const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .email('Invalid email')
      .required('This field is required'),
  });
  
  const Confirm = ({ show = false, email = '' }) => (
    <Transition appear show={show} as={Fragment}>
      <div className="fixed inset-0 z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white" />
        </Transition.Child>
  
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="flex items-center justify-center h-full p-8">
            <div className="overflow-hidden transition-all transform">
              <h3 className="text-center text-lg font-medium leading-6">
                <div className="flex flex-col justify-center items-center space-y-4">
                  <MailOpenIcon className="w-12 h-12 shrink-0 text-rose-500" />
                </div>
                <p className="text-2xl font-semibold mt-2">Confirm your email</p>
              </h3>
  
              <p className="text-lg text-center mt-4">
                We emailed a magic link to <strong>{email ?? ''}</strong>.
                <br />
                Check your inbox and click the link in the email to login or sign
                up.
              </p>
            </div>
          </div>
        </Transition.Child>
      </div>
    </Transition>
  );
  
const form = ({ show = false, onClose = () => null }) => {
    const [disabled, setDisabled] = useState(false);
    const [showConfirm, setConfirm] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);
  
    const signInWithEmail = async ({ email }) => {
      let toastId;
      try {
        toastId = toast.loading('Loading...');
        setDisabled(true);
        // Perform sign in
        const { error } = await signIn('email', {
          redirect: false,
          callbackUrl: window.location.href,
          email,
        });
        // Something went wrong
        if (error) {
          throw new Error(error);
        }
        setConfirm(true);
        toast.dismiss(toastId);
      } catch (err) {
        toast.error('Unable to sign in', { id: toastId });
      } finally {
        setDisabled(false);
      }
    };
  
    const signInWithGoogle = () => {
      toast.loading('Redirecting...');
      setDisabled(true);
      // Perform sign in
      signIn('google', {
        callbackUrl: window.location.href,
      });
    };
  
    const closeModal = () => {
      if (typeof onClose === 'function') {
        onClose();
      }
    };
  
    // Reset modal
    useEffect(() => {
      if (!show) {
        // Wait for 200ms for aniamtion to finish
        setTimeout(() => {
          setDisabled(false);
          setConfirm(false);
          setShowSignIn(false);
        }, 200);
      }
    }, [show]);
  
    // Remove pending toasts if any
    useEffect(() => {
      toast.dismiss();
    }, []);
  return (
       <>
       <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
  <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
    <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
      <div className="my-3 text-4xl font-bold tracking-wider text-center">
        <a href="#">K-WD</a>
      </div>
      <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
        With the power of K-WD, you can now focus only on functionaries for your
        digital products, while leaving the UI design on us!
      </p>
      <p className="flex flex-col items-center justify-center mt-10 text-center">
        <span>Don't have an account?</span>
        <a href="#" className="underline">
          Get Started!
        </a>
      </p>
      <p className="mt-6 text-sm text-center text-gray-300">
        Read our{" "}
        <a href="#" className="underline">
          terms
        </a>{" "}
        and{" "}
        <a href="#" className="underline">
          conditions
        </a>
      </p>
    </div>
    <div className="md:flex-1 p-5 ">
  <h2 className="text-2xl font-bold text-[#002D74]">Login</h2>
  <p className="text-sm mt-4 text-[#002D74]">
    If you have an account, please login
  </p>
  <div className="mt-10">
                    {/* Sign with Google */}
                    <button
                      disabled={disabled}
                      onClick={() => signInWithGoogle()}
                      className="h-[46px] w-full mx-auto border rounded-md p-2 flex justify-center items-center space-x-2 text-gray-500 hover:text-gray-600 hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:text-gray-500 disabled:hover:bg-transparent disabled:hover:border-gray-200 transition-colors"
                    >
                      <Image
                        src="/google.svg"
                        alt="Google"
                        width={32}
                        height={32}
                      />
                      <span>Sign {showSignIn ? 'in' : 'up'} with Google</span>
                    </button>

                    {/* Sign with email */}
                    <Formik
                      initialValues={{ email: '' }}
                      validationSchema={SignInSchema}
                      validateOnBlur={false}
                      onSubmit={signInWithEmail}
                    >
                      {({ isSubmitting, isValid, values, resetForm }) => (
                        <Form className="mt-4">
                          <Input
                            name="email"
                            type="email"
                            placeholder="elon@spacex.com"
                            disabled={disabled}
                            spellCheck={false}
                          />

                          <button
                            type="submit"
                            disabled={disabled || !isValid}
                            className="mt-6 w-full bg-rose-600 text-white py-2 px-8 rounded-md focus:outline-none focus:ring-4 focus:ring-rose-600 focus:ring-opacity-50 hover:bg-rose-500 transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-rose-600"
                          >
                            {isSubmitting
                              ? 'Loading...'
                              : `Sign ${showSignIn ? 'in' : 'up'}`}
                          </button>

                          <p className="mt-2 text-center text-sm text-gray-500">
                            {showSignIn ? (
                              <>
                                Don&apos;t have an account yet?{' '}
                                <button
                                  type="button"
                                  disabled={disabled}
                                  onClick={() => {
                                    setShowSignIn(false);
                                    resetForm();
                                  }}
                                  className="underline underline-offset-1 font-semibold text-rose-500 hover:text-rose-600 disabled:hover:text-rose-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                  Sign up
                                </button>
                                .
                              </>
                            ) : (
                              <>
                                Already have an account?{' '}
                                <button
                                  type="button"
                                  disabled={disabled}
                                  onClick={() => {
                                    setShowSignIn(true);
                                    resetForm();
                                  }}
                                  className="underline underline-offset-1 font-semibold text-rose-500 hover:text-rose-600 disabled:hover:text-rose-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                  Log in
                                </button>
                                .
                              </>
                            )}
                          </p>

                          <Confirm
                            show={showConfirm}
                            email={values?.email ?? ''}
                          />
                        </Form>
                      )}
                    </Formik>
</div>
 

</div>

  </div>
</div>

       </>
)}

export default form
