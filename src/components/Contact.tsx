import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { profile } from '../data/content.ts';

type Field = 'name' | 'email' | 'subject' | 'message';
type Errors = Partial<Record<Field, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const empty = { name: '', email: '', subject: '', message: '' };

export function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(next = values): Errors {
    const found: Errors = {};
    const name = next.name.trim();
    const email = next.email.trim();
    const subject = next.subject.trim();
    const message = next.message.trim();

    if (name.length < 2) found.name = 'Enter your name.';
    else if (name.length > 80) found.name = 'Use 80 characters or fewer.';

    if (!EMAIL.test(email)) found.email = 'Enter a valid email address.';

    if (subject.length < 3) found.subject = 'Add a short subject.';
    else if (subject.length > 120) found.subject = 'Use 120 characters or fewer.';

    if (message.length < 20) found.message = 'Write at least 20 characters so the note is useful.';
    else if (message.length > 2000) found.message = 'Keep the message under 2000 characters.';

    return found;
  }

  function update(field: Field, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!(field in current)) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    const first = (Object.keys(found) as Field[])[0];
    if (first) {
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }
    setSent(true);
  }

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(
    `${values.message.trim()}\n\n— ${values.name.trim()}\n${values.email.trim()}`,
  )}`;

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <p className="section-index">05 — Correspondence</p>
          <h2 className="section-title" id="contact-title">
            Let&apos;s collaborate.
          </h2>
          <p>
            I am interested in agri-business software, practical automation, and AI that has to
            survive a real counter. Write with a specific problem.
          </p>
          <address className="address">
            <ul className="contact-links">
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <a href={`mailto:${profile.dealershipEmail}`}>
                  {profile.dealershipEmail}
                  <span className="link-note">Dealership</span>
                </a>
              </li>
              {profile.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                    <ArrowUpRight size={15} aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </address>
        </div>

        {sent ? (
          <div className="form-success" role="status">
            <h3>The note is ready.</h3>
            <p>
              This demonstration keeps the message in your browser. It has not been stored or sent.
              Open your mail app to deliver it, or write another note.
            </p>
            <a className="btn btn-ink" href={mailto}>
              Email this message
            </a>
            <button
              className="btn btn-line"
              type="button"
              onClick={() => {
                setSent(false);
                setValues(empty);
                setErrors({});
              }}
            >
              Write another note
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={onSubmit} noValidate>
            <p className="form-note">
              Demonstration only. The form checks the fields here and does not send them to a
              server. All fields are required.
            </p>
            {Object.keys(errors).length > 0 && (
              <p className="form-alert" role="alert">
                Please correct the highlighted fields.
              </p>
            )}
            <Field
              id="contact-name"
              label="Name"
              error={errors.name}
              value={values.name}
              autoComplete="name"
              onChange={(value) => update('name', value)}
            />
            <Field
              id="contact-email"
              label="Email"
              type="email"
              error={errors.email}
              value={values.email}
              autoComplete="email"
              onChange={(value) => update('email', value)}
            />
            <Field
              id="contact-subject"
              label="Subject"
              error={errors.subject}
              value={values.subject}
              onChange={(value) => update('subject', value)}
            />
            <Field
              id="contact-message"
              label="Message"
              error={errors.message}
              value={values.message}
              multiline
              onChange={(value) => update('message', value)}
            />
            <button className="btn btn-ink" type="submit">
              Prepare message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = 'text',
  autoComplete,
  multiline = false,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
}) {
  const errorId = `${id}-error`;
  const shared = {
    id,
    value,
    required: true,
    'aria-invalid': Boolean(error) || undefined,
    'aria-describedby': error ? errorId : undefined,
    onChange: (event: { target: { value: string } }) => onChange(event.target.value),
  };

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {multiline ? (
        <textarea {...shared} rows={6} />
      ) : (
        <input {...shared} type={type} autoComplete={autoComplete} />
      )}
      {error && (
        <p className="field-error" id={errorId}>
          {error}
        </p>
      )}
    </div>
  );
}
