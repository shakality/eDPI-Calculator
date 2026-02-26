import React from 'react';

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose-custom">
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using eDPICalc, you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h2>2. Use License</h2>
        <p>Permission is granted to temporarily use the tools on eDPICalc for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>

        <h2>3. Disclaimer</h2>
        <p>The materials on eDPICalc are provided on an 'as is' basis. eDPICalc makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

        <h2>4. Limitations</h2>
        <p>In no event shall eDPICalc or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on eDPICalc.</p>

        <h2>5. Accuracy of Materials</h2>
        <p>The materials appearing on eDPICalc could include technical, typographical, or photographic errors. eDPICalc does not warrant that any of the materials on its website are accurate, complete or current.</p>

        <h2>6. Governing Law</h2>
        <p>Any claim relating to eDPICalc shall be governed by the laws of the jurisdiction in which the website owner resides without regard to its conflict of law provisions.</p>
      </div>
    </div>
  );
}
