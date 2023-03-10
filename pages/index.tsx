import Head from "next/head";
import Image from "next/image";
import formImage from "../public/form.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";

export default function Home() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "Canada",
      terms: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .max(20, "Name should be less than 20 characters")
        .required("Your name is required"),
      email: yup
        .string()
        .email("Invalid Email Address")
        .required("Your email is required"),
      terms: yup.array().required("Terms of service must be chekced"),
    }),

    onSubmit: (values) => {
      console.log(values);
      router.push({ pathname: "/success", query: values });
    },
  });

  console.log(formik.values);
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute w-full"
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" h-screen items-center flex justify-center  ">
        <form
          className="bg-white flex rounded-lg  font-latoRegular"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex-1 text-gray-700  p-20 ">
            <h1 className="text-3xl pb-2 font-latoBold">Lets get started 👋</h1>
            <p className="text-lg  text-gray-500">
              Join our E-learning platform today and unlock over 500+ courses
              and digital assets ready to download.
            </p>
            <div className="mt-6">
              {/* Name input field */}
              <div className="pb-4">
                <label
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.name && formik.errors.name
                      ? "text-red-400"
                      : ""
                  } `}
                  htmlFor="name"
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Name"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder="Enter your name here"
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* Email input field */}
              <div className="pb-4">
                <label
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.email && formik.errors.email
                      ? "text-red-400"
                      : ""
                  }`}
                  htmlFor="email"
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Enter your email here"
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className="pb-4">
                <label
                  className="block text-sm pb-2 font-latoBold"
                  htmlFor="country"
                >
                  Country
                </label>
                <select
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                >
                  <option>United States</option>
                  <option>Germany</option>
                  <option>Italy</option>
                  <option>Canada</option>
                  <option>Malaysia</option>
                </select>
              </div>

              <div className="pb-4">
                <label
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.terms && formik.errors.terms
                      ? "text-red-400"
                      : ""
                  }`}
                  htmlFor="terms"
                >
                  {formik.touched.terms && formik.errors.terms
                    ? formik.errors.terms
                    : "Terms of service"}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    className="h-5 w-5 text-teal-500 border-2 focus: border-teal-500 focus:ring-teal-500"
                    type="checkbox"
                    name="terms"
                    value="checked"
                    onChange={formik.handleChange}
                  />
                  <p className="text-sm font-latoBold text-gray-500">
                    I agree to the Terms and Service that my data will be taken
                    and sold.
                  </p>
                </div>
              </div>
              <button
                className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
                type="submit"
              >
                Start learning today!
              </button>
            </div>
          </div>
          <div className="relative flex-1">
            <Image
              className=" object-cover rounded-lg"
              src={formImage}
              alt=""
              fill
            />
          </div>
        </form>
      </main>
    </m.div>
  );
}
