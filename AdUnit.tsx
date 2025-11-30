import React, { useEffect } from 'react';
import { useData } from '../contexts/DataContext';

interface AdUnitProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
}

const AdUnit: React.FC<AdUnitProps> = ({ slot = "1234567890", format = "auto", className = "" }) => {
  const { settings } = useData();
  const isProd = process.env.NODE_ENV === 'production';

  useEffect(() => {
    // Attempt to push the ad to the Google Ads queue
    try {
      if (settings.googleAdSenseId && (window as any).adsbygoogle) {
        (window as any).adsbygoogle.push({});
      }
    } catch (e) {
      console.error("AdSense Error:", e);
    }
  }, [settings.googleAdSenseId]);

  if (!settings.googleAdSenseId) return null;

  return (
    <div className={`w-full flex justify-center my-8 ${className}`}>
        {/* Responsive Ad Unit */}
        <ins className="adsbygoogle"
             style={{ display: 'block', width: '100%', maxWidth: '100%' }}
             data-ad-client={settings.googleAdSenseId}
             data-ad-slot={slot}
             data-ad-format={format}
             data-full-width-responsive="true"></ins>
        
        {/* Placeholder for Development visualization */}
        {!isProd && (
             <div className="w-full h-32 bg-slate-100 dark:bg-white/5 border border-dashed border-slate-300 dark:border-white/10 rounded flex flex-col items-center justify-center text-xs text-slate-400">
                 <span className="font-bold text-slate-500">AdSense Unit</span>
                 <span>Client: {settings.googleAdSenseId}</span>
                 <span>Slot: {slot}</span>
             </div>
        )}
    </div>
  );
};

export default AdUnit;