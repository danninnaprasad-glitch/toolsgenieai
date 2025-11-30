import React, { useState } from 'react';
import { useData } from '../../contexts/DataContext';
import { Button } from '../../components/Button';
import { Save } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { settings, updateSettings } = useData();
  const [formData, setFormData] = useState(settings);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(prev as any)[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    updateSettings(formData);
    alert('Settings Saved Successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Global Settings</h1>
        <Button onClick={handleSave} className="gap-2"><Save size={18} /> Save Changes</Button>
      </div>

      <div className="space-y-8">
        {/* General */}
        <div className="bg-surface p-6 rounded-xl border border-white/5">
          <h2 className="text-xl font-semibold mb-4 text-indigo-400">Home Hero Section</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-400 mb-1">Main Title</label>
              <input type="text" name="heroTitle" value={formData.heroTitle} onChange={handleChange} className="w-full bg-dark border border-slate-700 rounded p-2 text-white" />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Subtitle</label>
              <textarea name="heroSubtitle" value={formData.heroSubtitle} onChange={handleChange} className="w-full h-24 bg-dark border border-slate-700 rounded p-2 text-white" />
            </div>
          </div>
        </div>

        {/* SEO & Tracking */}
        <div className="bg-surface p-6 rounded-xl border border-white/5">
          <h2 className="text-xl font-semibold mb-4 text-fuchsia-400">SEO & Tracking</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-400 mb-1">Google Console ID (Meta Tag)</label>
              <input type="text" name="googleConsoleId" value={formData.googleConsoleId} onChange={handleChange} className="w-full bg-dark border border-slate-700 rounded p-2 text-white" placeholder="verification-code" />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Google Analytics ID</label>
              <input type="text" name="googleAnalyticsId" value={formData.googleAnalyticsId} onChange={handleChange} className="w-full bg-dark border border-slate-700 rounded p-2 text-white" placeholder="G-XXXXXXXX" />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Google AdSense ID</label>
              <input type="text" name="googleAdSenseId" value={formData.googleAdSenseId} onChange={handleChange} className="w-full bg-dark border border-slate-700 rounded p-2 text-white" placeholder="ca-pub-XXXXXXXX" />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Contact Email</label>
              <input type="text" name="contactEmail" value={formData.contactEmail} onChange={handleChange} className="w-full bg-dark border border-slate-700 rounded p-2 text-white" />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-surface p-6 rounded-xl border border-white/5">
          <h2 className="text-xl font-semibold mb-4 text-emerald-400">Social Media Links</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-400 mb-1">Twitter (X)</label>
              <input type="text" name="socials.twitter" value={formData.socials.twitter} onChange={handleChange} className="w-full bg-dark border border-slate-700 rounded p-2 text-white" />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Facebook</label>
              <input type="text" name="socials.facebook" value={formData.socials.facebook} onChange={handleChange} className="w-full bg-dark border border-slate-700 rounded p-2 text-white" />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">LinkedIn</label>
              <input type="text" name="socials.linkedin" value={formData.socials.linkedin} onChange={handleChange} className="w-full bg-dark border border-slate-700 rounded p-2 text-white" />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">GitHub</label>
              <input type="text" name="socials.github" value={formData.socials.github} onChange={handleChange} className="w-full bg-dark border border-slate-700 rounded p-2 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;