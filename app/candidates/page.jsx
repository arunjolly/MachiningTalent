'use client';

import { useState } from 'react';

const STORAGE_KEY = 'machining_talent_repository_v1';

const roleOptions = [
  'CNC Programmer',
  'CNC Machinist',
  'CMM Programmer',
  'QA Engineer',
  'Production Scheduler',
  'Project Engineer',
  'Other',
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  location: '',
  role: '',
  resumeLink: '',
  linkedinUrl: '',
};

export default function CandidatesPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [resumeFile, setResumeFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  function onChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ''));
      reader.onerror = () => reject(new Error('Could not read file'));
      reader.readAsDataURL(file);
    });
  }

  async function onSubmit(event) {
    event.preventDefault();
    setStatus('idle');
    setErrorMessage('');

    try {
      if (!resumeFile && !form.resumeLink.trim()) {
        setStatus('error');
        setErrorMessage('Please upload a resume file or provide a Resume URL.');
        return;
      }

      let resumeData = '';
      let resumeFileName = '';

      if (resumeFile) {
        // Keep file size bounded to reduce localStorage overflow risk.
        if (resumeFile.size > 2 * 1024 * 1024) {
          setStatus('error');
          setErrorMessage('Resume file is too large (max 2MB). Please upload a smaller file or use Resume URL.');
          return;
        }
        resumeData = await fileToDataUrl(resumeFile);
        resumeFileName = resumeFile.name;
      }

      const raw = window.localStorage.getItem(STORAGE_KEY);
      const existing = raw ? JSON.parse(raw) : [];
      const safeExisting = Array.isArray(existing) ? existing : [];

      const newProfile = {
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        fullName: form.name.trim(),
        role: form.role,
        email: form.email.trim(),
        phone: form.phone.trim(),
        location: form.location.trim(),
        yearsExperience: '',
        source: 'Candidate Apply Form',
        skills: '',
        resumeLink: form.resumeLink.trim(),
        linkedinUrl: form.linkedinUrl.trim(),
        resumeFileName,
        resumeData,
        notes: 'Submitted via public candidate apply form.',
        status: 'New',
      };

      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([newProfile, ...safeExisting]));
      setForm(initialForm);
      setResumeFile(null);
      setStatus('success');
    } catch (error) {
      console.error('Could not save candidate profile', error);
      setStatus('error');
      setErrorMessage('Something went wrong saving your application. Please try again.');
    }
  }

  return (
    <section className="section-wrap">
      <p className="kicker">For Candidates</p>
      <h1 className="mt-4 font-[var(--font-space)] text-4xl font-bold text-white md:text-5xl">Apply</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-300">
        Submit your details and we will review your background for matching roles.
      </p>

      <div className="mt-8 panel p-6 md:p-8">
        <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">Name</span>
            <input name="name" value={form.name} onChange={onChange} required className="input" />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">Email</span>
            <input name="email" type="email" value={form.email} onChange={onChange} required className="input" />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">Telephone Number</span>
            <input name="phone" value={form.phone} onChange={onChange} required className="input" />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">Location</span>
            <input name="location" value={form.location} onChange={onChange} required className="input" />
          </label>

          <label className="block md:col-span-2">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">Type of Role</span>
            <select name="role" value={form.role} onChange={onChange} required className="input">
              <option value="">Select a role</option>
              {roleOptions.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </label>

          <label className="block md:col-span-2">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">Resume Upload</span>
            <input
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={(event) => setResumeFile(event.target.files?.[0] || null)}
              className="input file:mr-4 file:rounded-full file:border-0 file:bg-cyan-500/20 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-cyan-200 hover:file:bg-cyan-500/30"
            />
            <p className="mt-1 text-xs text-slate-400">Accepted: PDF, DOC, DOCX (max 2MB)</p>
          </label>

          <label className="block md:col-span-2">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">Resume URL (optional)</span>
            <input
              name="resumeLink"
              value={form.resumeLink}
              onChange={onChange}
              placeholder="Google Drive / Dropbox / LinkedIn / personal site"
              className="input"
            />
          </label>

          <label className="block md:col-span-2">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">LinkedIn URL (optional)</span>
            <input
              name="linkedinUrl"
              value={form.linkedinUrl}
              onChange={onChange}
              placeholder="https://www.linkedin.com/in/..."
              className="input"
            />
          </label>

          <div className="md:col-span-2">
            <button type="submit" className="rounded-full bg-spark-500 px-6 py-3 text-sm font-bold text-white hover:bg-spark-600">
              Submit Application
            </button>
          </div>
        </form>

        {status === 'success' ? (
          <p className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
            Application received. Thank you.
          </p>
        ) : null}

        {status === 'error' ? (
          <p className="mt-4 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {errorMessage || 'Something went wrong saving your application. Please try again.'}
          </p>
        ) : null}
      </div>
    </section>
  );
}
