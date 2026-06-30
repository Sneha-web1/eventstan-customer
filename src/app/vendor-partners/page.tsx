"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

// ─── Constants ────────────────────────────────────────────────────────────────

const SERVICE_CATEGORIES = [
  "Venue",
  "Catering",
  "Photography",
  "Videography",
  "Decor & Florals",
  "Entertainment",
  "DJ & Music",
  "Makeup & Hair",
  "Lighting",
  "Transportation",
  "Planning & Coordination",
  "Other",
];

// ─── Types ────────────────────────────────────────────────────────────────────

interface Step1Data {
  businessName: string;
  yourName: string;
  email: string;
  phone: string;
  website: string;
}

interface Step2Data {
  serviceCategory: string;
  cityArea: string;
  yearsOfExperience: string;
  description: string;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const page = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);

  const [step1, setStep1] = useState<Step1Data>({
    businessName: "",
    yourName: "",
    email: "",
    phone: "",
    website: "",
  });

  const [step2, setStep2] = useState<Step2Data>({
    serviceCategory: "",
    cityArea: "",
    yearsOfExperience: "",
    description: "",
  });

  const [errors1, setErrors1] = useState<Partial<Step1Data>>({});
  const [errors2, setErrors2] = useState<Partial<Step2Data>>({});

  const validateStep1 = () => {
    const errs: Partial<Step1Data> = {};
    if (!step1.businessName.trim()) errs.businessName = "Required";
    if (!step1.yourName.trim()) errs.yourName = "Required";
    if (!step1.email.trim() || !/\S+@\S+\.\S+/.test(step1.email))
      errs.email = "Valid email required";
    setErrors1(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Partial<Step2Data> = {};
    if (!step2.serviceCategory) errs.serviceCategory = "Required";
    if (!step2.cityArea.trim()) errs.cityArea = "Required";
    setErrors2(errs);
    return Object.keys(errs).length === 0;
  };

  const handleContinue = () => {
    if (validateStep1()) setStep(2);
  };

  const handleSubmit = () => {
    if (validateStep2()) setSubmitted(true);
  };

  const inputClass = (hasError?: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors bg-gray-50 focus:bg-white ${
      hasError
        ? "border-red-400 focus:border-red-500"
        : "border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
    }`;

  return (
    <div className="min-h-screen" style={{ background: "#fff5eb" }}>
      {/* Background blobs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-orange-300/30 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-300/25 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-16 sm:py-24">
        {submitted ? (
          /* ── Success State ── */
          <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg
                className="w-10 h-10 text-orange-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Application Submitted!
            </h2>
            <p className="text-gray-500 mb-2">
              Thanks, <strong>{step1.yourName}</strong>! We've received your
              application for <strong>{step1.businessName}</strong>.
            </p>
            <p className="text-gray-500 mb-8">
              Our team will review it and get back to you at{" "}
              <strong>{step1.email}</strong> within 2–3 business days.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
            >
              <FaArrowLeft />
              Back to Home
            </Link>
          </div>
        ) : (
          <>
            {/* ── Page Header ── */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-orange-100 rounded-full px-4 py-2 text-sm text-orange-600 font-medium mb-5 shadow-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 22V12h6v10"
                  />
                </svg>
                Vendor Partners
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                List Your{" "}
                <span className="text-orange-500 relative inline-block">
                  Service
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 200 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 6 Q100 0 200 6"
                      stroke="#f97316"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-gray-500 text-base max-w-md mx-auto">
                Join hundreds of trusted vendors on EventStan and connect with
                clients planning weddings, corporate events, birthdays, and
                more.
              </p>
            </div>

            {/* ── Card ── */}
            <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">
              {/* Header inside card */}
              <div className="flex items-center gap-3 mb-7">
                <div className="w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 22V12h6v10"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">
                    List Your Service
                  </h2>
                  <p className="text-sm text-gray-500">
                    Join EventStan as a vendor partner
                  </p>
                </div>
              </div>

              {/* Step Indicator */}
              <div className="flex items-center gap-2 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold bg-orange-500 text-white">
                    1
                  </div>
                  <span
                    className={`text-sm font-medium ${step === 1 ? "text-gray-900" : "text-gray-400"}`}
                  >
                    Business Info
                  </span>
                </div>
                <div
                  className="flex-1 h-px mx-1"
                  style={{ background: step === 2 ? "#f97316" : "#e5e7eb" }}
                />
                <div className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                      step === 2
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    2
                  </div>
                  <span
                    className={`text-sm font-medium ${step === 2 ? "text-gray-900" : "text-gray-400"}`}
                  >
                    Service Details
                  </span>
                </div>
              </div>

              {/* ── Step 1 ── */}
              {step === 1 && (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Business Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Bloom & Petal Events"
                        value={step1.businessName}
                        onChange={(e) =>
                          setStep1({ ...step1, businessName: e.target.value })
                        }
                        className={inputClass(!!errors1.businessName)}
                      />
                      {errors1.businessName && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors1.businessName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Full name"
                        value={step1.yourName}
                        onChange={(e) =>
                          setStep1({ ...step1, yourName: e.target.value })
                        }
                        className={inputClass(!!errors1.yourName)}
                      />
                      {errors1.yourName && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors1.yourName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="hello@yourbusiness.com"
                        value={step1.email}
                        onChange={(e) =>
                          setStep1({ ...step1, email: e.target.value })
                        }
                        className={inputClass(!!errors1.email)}
                      />
                      {errors1.email && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors1.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 555 000 0000"
                        value={step1.phone}
                        onChange={(e) =>
                          setStep1({ ...step1, phone: e.target.value })
                        }
                        className={inputClass()}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Website / Social Media
                    </label>
                    <input
                      type="text"
                      placeholder="https://yourwebsite.com or @handle"
                      value={step1.website}
                      onChange={(e) =>
                        setStep1({ ...step1, website: e.target.value })
                      }
                      className={inputClass()}
                    />
                  </div>

                  <button
                    onClick={handleContinue}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-full font-semibold text-sm transition-colors mt-2 shadow-md hover:shadow-lg"
                  >
                    Continue →
                  </button>
                </div>
              )}

              {/* ── Step 2 ── */}
              {step === 2 && (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Service Category <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={step2.serviceCategory}
                          onChange={(e) =>
                            setStep2({
                              ...step2,
                              serviceCategory: e.target.value,
                            })
                          }
                          className={`appearance-none ${inputClass(!!errors2.serviceCategory)} text-gray-700`}
                        >
                          <option value="">Select category</option>
                          {SERVICE_CATEGORIES.map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                      {errors2.serviceCategory && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors2.serviceCategory}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        City / Area <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. New York, NY"
                        value={step2.cityArea}
                        onChange={(e) =>
                          setStep2({ ...step2, cityArea: e.target.value })
                        }
                        className={inputClass(!!errors2.cityArea)}
                      />
                      {errors2.cityArea && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors2.cityArea}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Years of Experience
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 5 years"
                      value={step2.yearsOfExperience}
                      onChange={(e) =>
                        setStep2({
                          ...step2,
                          yearsOfExperience: e.target.value,
                        })
                      }
                      className={inputClass()}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Tell us about your service
                    </label>
                    <textarea
                      placeholder="Describe what makes your service special, the events you typically cover, your packages, etc."
                      value={step2.description}
                      onChange={(e) =>
                        setStep2({ ...step2, description: e.target.value })
                      }
                      rows={5}
                      className={`${inputClass()} resize-none`}
                    />
                  </div>

                  <div className="flex gap-3 mt-2">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 border-2 border-gray-200 text-gray-700 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-full font-semibold text-sm transition-colors shadow-md hover:shadow-lg"
                    >
                      Submit Application
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              {[
                { icon: "🏆", text: "500+ Trusted Vendors" },
                { icon: "⚡", text: "Quick Review — 2–3 Days" },
                { icon: "🔒", text: "Your Info is Safe" },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-gray-600 shadow-sm border border-white flex items-center gap-2"
                >
                  <span>{icon}</span>
                  {text}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default page;
