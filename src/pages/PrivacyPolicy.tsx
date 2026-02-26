import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose-custom">
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
        
        <p>At eDPICalc, we take your privacy seriously. This Privacy Policy outlines the types of information we collect and how we use it.</p>
        
        <h2>1. Information We Collect</h2>
        <p>We do not require users to create accounts or provide personal identification to use our calculator. However, we may collect non-personal information such as:</p>
        <ul>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Usage statistics (e.g., which game modes are most popular)</li>
        </ul>

        <h2>2. Cookies and Web Beacons</h2>
        <p>We use cookies to store information about visitors' preferences, to record user-specific information on which pages the site visitor accesses or visits, and to personalize or customize our web page content based upon visitors' browser type or other information that the visitor sends via their browser.</p>

        <h2>3. Google AdSense</h2>
        <p>Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on their visit to our site and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.</p>

        <h2>4. Third-Party Data Collection</h2>
        <p>Third-party ad servers or ad networks use technology in their respective advertisements and links that appear on eDPICalc, which are sent directly to your browser. They automatically receive your IP address when this occurs. Other technologies (such as cookies, JavaScript, or Web Beacons) may also be used by our site's third-party ad networks to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on the site.</p>

        <h2>5. Consent</h2>
        <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
      </div>
    </div>
  );
}
