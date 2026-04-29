"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const API_URL =
    "https://api-arcmeninterior.webdadsprojects.com/api/v1/forms/landing-page/contact-us";

export default function LeadPopup() {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        project: "",
    });

    useEffect(() => {
        setMounted(true);
        const timer = setTimeout(() => setOpen(true), 12000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [open]);

    const onChange = (e) =>
        setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!/^[6-9]\d{9}$/.test(form.phone)) return;

        try {
            setLoading(true);

            const payload = {
                fullName: form.name,
                mobileNumber: form.phone,
                email: form.email,
                projectType: form.project || "Residential Interior",
            };

            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                    setOpen(false);
                }, 2000);
            }
        } finally {
            setLoading(false);
        }
    };

    if (!mounted || !open) return null;

    return createPortal(
        <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 animate-fadeIn"
            >
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-6 right-6 text-white text-xl bg-black/70 rounded-full px-3 py-1"
                >
                    ✕
                </button>

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
                        className="bg-[#4dbc15] text-white py-2 border rounded-lg mt-2"
                    >
                        {loading ? "Submitting..." : "Book Now"}
                    </button>

                    {success && (
                        <p className="text-green-600 text-sm text-center mt-2">
                            Submitted successfully!
                        </p>
                    )}
                </form>
            </div>
        </div>,
        document.body
    );
}