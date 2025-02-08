import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 pt-[120px] lg:pt-[150px]">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-wide">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#035bff] via-white to-[#4c70b3] leading-tight">
            Privacy Policy
          </span>
        </h1>
        <p className="text-lg sm:text-xl mb-8 font-medium">
          Your Privacy is Important to Us
        </p>
      </div>

      {/* Information We Collect Section */}
      <div className="mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="text-base sm:text-lg">
          When you log in to our website, we collect the following personal information:
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
        </ul>
      </div>

      {/* How We Use Your Information Section */}
      <div className="mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="text-base sm:text-lg">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>To send you updates, newsletters, and other information related to Team Techies.</li>
          <li>To communicate with you regarding your account or any support queries you may have.</li>
          <li>To improve our services and user experience.</li>
          <li>To provide you with access to the content and services on our platform.</li>
        </ul>
      </div>

      {/* Data Storage and Security Section */}
      <div className="mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">3. Data Storage and Security</h2>
        <p className="text-base sm:text-lg">
          We take the security of your personal information seriously. We use industry-standard encryption methods to protect your data from unauthorized access, alteration, or destruction. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure.
        </p>
      </div>

      {/* Sharing Your Information Section */}
      <div className="mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
        <p className="text-base sm:text-lg">
          We do not sell, trade, or share your personal information with third parties except as required by law or with trusted partners who assist us in operating our website and providing services to you.
        </p>
      </div>

      {/* Cookies Section */}
      <div className="mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">5. Cookies</h2>
        <p className="text-base sm:text-lg">
          Our website may use cookies to enhance your experience. Cookies are small text files stored on your device that help us recognize you and provide a more personalized experience. You can set your browser to refuse cookies, but this may limit some functionality of the site.
        </p>
      </div>

      {/* Access to Your Information Section */}
      <div className="mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">6. Access to Your Information</h2>
        <p className="text-base sm:text-lg">
          You have the right to access, correct, or delete your personal information stored on our platform. If you wish to do so, please contact us at <a href="mailto:jointeamtechies@gmail.com" className="text-[#035bff]">jointeamtechies@gmail.com</a>.
        </p>
      </div>

      {/* Changes to this Privacy Policy Section */}
      <div className="mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">7. Changes to this Privacy Policy</h2>
        <p className="text-base sm:text-lg">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the updated policy will take effect immediately upon posting.
        </p>
      </div>

      {/* Contact Us Section */}
      <div className="mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">8. Contact Us</h2>
        <p className="text-base sm:text-lg">
          If you have any questions or concerns about this Privacy Policy or how your information is used, please contact us at <a href="mailto:jointeamtechies@gmail.com" className="text-[#035bff]">jointeamtechies@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
