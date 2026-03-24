import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useController, useForm } from "react-hook-form";
import type { Control } from "react-hook-form";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  LoaderCircle,
  Send,
} from "lucide-react";

const ADMIN_EMAIL = "admin@bookmentorglobal.com";

const GOALS = [
  { value: "book-planning", label: "Book Planning" },
  { value: "writing-support", label: "Writing Support" },
  { value: "marketing-strategy", label: "Marketing Strategy" },
  { value: "launch-support", label: "Launch Support" },
];

const GoalSelect = ({
  control,
  hasError,
}: {
  control: Control<FormValues>;
  hasError: boolean;
}) => {
  const { field } = useController({
    name: "goal",
    control,
    rules: { required: "Please select a goal" },
  });
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = GOALS.find((g) => g.value === field.value);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (open && ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        field.onBlur();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [field, open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`${inputBase} flex items-center justify-between pr-10 text-left ${
          hasError ? inputError : inputValid
        } ${!selected ? "text-muted" : ""}`}
      >
        {selected ? selected.label : "Select one"}
        <ChevronDown
          size={16}
          className={`absolute right-4 top-1/2 -translate-y-1/2 text-muted transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <ul className="absolute z-50 mt-1 w-full rounded-xl border border-subtle bg-[var(--color-bg)] shadow-xl overflow-hidden">
          {GOALS.map((g) => {
            const isSelected = field.value === g.value;
            return (
              <li
                key={g.value}
                onMouseDown={() => {
                  field.onChange(g.value);
                  field.onBlur();
                  setOpen(false);
                }}
                className={`flex items-center justify-between px-4 py-3 text-sm cursor-pointer transition-colors ${
                  isSelected
                    ? "bg-purple-600 text-white font-semibold"
                    : "text-fg hover:text-purple-600 hover:font-semibold"
                }`}
              >
                {g.label}
                {isSelected && <Check size={14} />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

type FormValues = {
  name: string;
  email: string;
  phone: string;
  goal: string;
  message: string;
};

const inputBase =
  "w-full rounded-xl border bg-[var(--color-bg)] px-4 py-3 text-fg outline-none focus:ring-2 focus:ring-purple-500/40 transition-colors";
const inputValid = "border-subtle";
const inputError = "border-red-500 focus:ring-red-400/40";
const errMsg = "text-xs text-red-500 mt-1 font-medium";

const BookCallPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onTouched" });

  const onSubmit = async (data: FormValues) => {
    setSubmitError("");
    setIsSubmitting(true);

    const formData = new FormData();
    Object.entries(data).forEach(([k, v]) => formData.append(k, v));
    formData.append("_subject", "New Mentor Call Request - BookMentor Global");
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${ADMIN_EMAIL}`,
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        },
      );
      if (!response.ok) throw new Error();
      setIsSubmitted(true);
      reset();
    } catch {
      setSubmitError("Something went wrong while sending. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-full bg-[var(--color-bg)] text-fg px-6 pt-32 pb-16 md:pb-24">
      <div className="mx-auto max-w-3xl">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 rounded-full border border-subtle bg-surface px-4 py-2 text-sm font-semibold text-fg hover:bg-purple-600/10 mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>

        <section className="rounded-[2rem] border border-subtle bg-surface p-6 md:p-10 shadow-xl">
          <h1 className="text-3xl md:text-5xl font-black leading-tight text-fg">
            Book a Mentor Call
          </h1>
          <p className="mt-3 text-muted text-base md:text-lg">
            Tell us about your goals and our team will email you at the
            earliest.
          </p>

          {isSubmitted && (
            <div className="mt-6 rounded-2xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm font-medium text-green-700 dark:text-green-300">
              Thank you. Your request has been sent to {ADMIN_EMAIL}.
            </div>
          )}

          {submitError && (
            <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-700 dark:text-red-300">
              {submitError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
            {/* Honeypot */}
            <input
              type="text"
              name="_honey"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Row 1: Name + Email */}
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="space-y-2 block">
                  <span className="text-sm font-semibold text-fg">
                    Full Name
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className={`${inputBase} ${errors.name ? inputError : inputValid}`}
                    {...register("name", { required: "Full name is required" })}
                  />
                </label>
                {errors.name && <p className={errMsg}>{errors.name.message}</p>}
              </div>

              <div>
                <label className="space-y-2 block">
                  <span className="text-sm font-semibold text-fg">
                    Email Address
                  </span>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className={`${inputBase} ${errors.email ? inputError : inputValid}`}
                    {...register("email", {
                      required: "Email address is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                </label>
                {errors.email && (
                  <p className={errMsg}>{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Row 2: Phone + Goal */}
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="space-y-2 block">
                  <span className="text-sm font-semibold text-fg">
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    placeholder="+1 555 010 100"
                    className={`${inputBase} ${errors.phone ? inputError : inputValid}`}
                    {...register("phone", {
                      pattern: {
                        value: /^[+\d\s\-().]{7,20}$/,
                        message: "Enter a valid phone number",
                      },
                    })}
                  />
                </label>
                {errors.phone && (
                  <p className={errMsg}>{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="space-y-2 block">
                  <span className="text-sm font-semibold text-fg">
                    Primary Goal
                  </span>
                  <GoalSelect control={control} hasError={!!errors.goal} />
                </label>
                {errors.goal && <p className={errMsg}>{errors.goal.message}</p>}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="space-y-2 block">
                <span className="text-sm font-semibold text-fg">Message</span>
                <textarea
                  rows={6}
                  placeholder="Share your timeline, challenges, and what you want from the mentor call."
                  className={`${inputBase} ${errors.message ? inputError : inputValid}`}
                  {...register("message", {
                    required: "Please write a short message",
                    minLength: {
                      value: 20,
                      message: "Message must be at least 20 characters",
                    },
                  })}
                />
              </label>
              {errors.message && (
                <p className={errMsg}>{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full bg-purple-600 px-7 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <LoaderCircle size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send size={16} /> Send Request
                </>
              )}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default BookCallPage;
