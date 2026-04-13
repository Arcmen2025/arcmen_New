"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import { motion } from "framer-motion";

const API_URL =
    "https://api-arcmeninterior.webdadsprojects.com/api/v1/forms/landing-page/contact-us";

export default function LeadPopup() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        project: "",
    });

    useEffect(() => {
        const timer = setTimeout(() => setOpen(true), 10000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    const onChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!/^[6-9]\d{9}$/.test(form.phone)) {
            alert("Enter valid mobile number");
            return;
        }

        try {
            setLoading(true);

            const payload = {
                fullName: form.name,
                mobileNumber: form.phone,
                email: form.email,
                city: form.city,
                projectType: form.project || "Residential Interior",
            };

            const res = await axios.post(API_URL, payload);

            if (res.status === 200 || res.status === 201) {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                    setOpen(false);
                }, 2000);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (!open) return null;

    return createPortal(
        <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 landing-font">
            <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-white text-xl bg-black/70 rounded-full px-3 py-1"
            >
                ✕
            </button>
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6"
            >
                <h5 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                    Book Free Consultation
                </h5>
                <form onSubmit={onSubmit} className="flex flex-col gap-3">

                    <input
                        name="name"
                        placeholder="Full Name"
                        onChange={onChange}
                        className="border rounded-lg px-4 py-2 text-sm"
                        required
                    />

                    <input
                        name="phone"
                        placeholder="Mobile Number"
                        onChange={onChange}
                        className="border rounded-lg px-4 py-2 text-sm"
                        required
                    />

                    <input
                        name="email"
                        placeholder="Email"
                        onChange={onChange}
                        className="border rounded-lg px-4 py-2 text-sm"
                    />

                    <input
                        name="city"
                        placeholder="Location"
                        onChange={onChange}
                        className="border rounded-lg px-4 py-2 text-sm"
                    />

                    <select
                        name="project"
                        onChange={onChange}
                        className="border rounded-lg px-4 py-2 text-sm"
                    >
                        <option value="">Project Type</option>
                        <option>2 BHK</option>
                        <option>3 BHK</option>
                        <option>4 BHK+</option>
                        <option>Villa</option>
                    </select>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-[#4dbc15] hover:bg-[#3a9c10] text-white py-2 border rounded-lg mt-2"
                    >
                        {loading ? "Submitting..." : "Book Now"}
                    </button>

                    {success && (
                        <p className="text-green-600 text-sm text-center mt-2">
                            Submitted successfully!
                        </p>
                    )}
                </form>
            </motion.div>

        </div>,
        document.body
    );
}