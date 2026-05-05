import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Gregorio World',
  description: 'Full Privacy Policy for Gregorio.world - GDPR Compliant',
};

const PrivacyPage = () => {
  return (
    <div className="bg-white py-20 min-h-screen">
      <div className="container mx-auto px-6 md:px-20 max-w-[1000px]">
        <h1 className="text-[42px] font-bold tracking-[2px] uppercase mb-12 text-[#1a1a1a]">Privacy Policy</h1>
        <p className="text-[13px] text-gray-500 mb-8 tracking-widest uppercase">– Art. 13 and 14 GDPR 679/2016 Compliant –</p>
        
        <div className="space-y-12 text-[#333] leading-relaxed text-[15px]">
          <section>
            <h2 className="text-[24px] font-bold uppercase mb-4 text-[#1a1a1a]">PREMISES</h2>
            <p className="mb-4">
              The Data Controller is required to provide precise information on the processing of your personal data, pursuant to art. 13 and 14 of EU Regulation 2016/679 “European regulation on the protection of personal data”, and to inform the user of this website about the methods of processing data concerning him. We therefore invite you to carefully read the following information in order to be able to consciously express your will regarding the processing of your data for the purposes and in the manner indicated below.
            </p>
            <p>
              The Data Controller, in line with the Legislative Decree 196/2003 – Privacy Code, and the EU Regulation No. 679/2016 – GDPR -, intends to guarantee the privacy and security of the personal data of each visitor, as established in the following information. The latter is to be considered valid for all purposes as information pursuant to art. 13 and 14 GDPR 679/2016.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-bold uppercase mb-4 text-[#1a1a1a]">TYPE OF DATA PROCESSED</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2 uppercase text-[14px]">1. Navigation data</h3>
                <p>
                  Like all websites, this site also https://gregorio.world/ makes use of log files and consequently acquires, while browsing it, some personal data whose transmission is implicit in the use of internet communication protocols. This category of data includes: IP addresses, the type of browser used and the parameters of the device used to connect to the site, the name of the internet service provider (ISP), web page of origin of the visitor (referral) and exit, information on the pages visited within the site, the time of access and exit, the time spent on the site and on the single page.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2 uppercase text-[14px]">2. Data provided voluntarily by the user</h3>
                <p>
                  In some sections of the site it is possible to fill in special forms in order to ask any question to the Owner, as well as make contact to ask questions relating to the services offered by the same. These forms provide the applicant’s personal details, their contact details and possibly also their curriculum vitae.
                </p>
                <p className="mt-4">
                  Furthermore, the site makes use of some Cookies and social plug-ins, and the user is invited to read our Cookie Policy, published at this link (<a href="/cookies" className="underline">https://gregorio.world/cookies</a>), in order to view the information and learn about its operation.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[24px] font-bold uppercase mb-4 text-[#1a1a1a]">PURPOSE AND LEGAL BASIS OF THE PROCESSING</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 border-b text-left uppercase text-[12px] font-bold">Purpose</th>
                    <th className="px-4 py-2 border-b text-left uppercase text-[12px] font-bold">Legal Basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border-b text-[14px]">1. Navigation on the site: detection of the user experience, monitoring of the regular functioning of the website, guaranteeing the security of the site.</td>
                    <td className="px-4 py-3 border-b text-[14px]">Legitimate interest of the Data Controller (Article 6.1 letter f – GDPR 679/2016).</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-b text-[14px]">2. Management of contacts, establishment of professional relationships related to the services offered on the site.</td>
                    <td className="px-4 py-3 border-b text-[14px]">Pre-contractual and contractual measures (Article 6.1 letter b – GDPR 679/2016).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-[24px] font-bold uppercase mb-4 text-[#1a1a1a]">SCOPE OF CIRCULATION & TRANSFER</h2>
            <p className="mb-4">
              <strong>SCOPE OF CIRCULATION OF DATA:</strong> The data processed referred to in purpose 1) will never be provided to third parties, for any reason, unless it is a legitimate request by the Judicial Authority. The data referred to in purpose 2) may only be disclosed to other members of the Firm.
            </p>
            <p>
              <strong>TRANSFER OF DATA OUTSIDE THE EU:</strong> The data processed will never be transferred outside the EU, for any reason, unless it is a legitimate request by the Judicial Authority and only in the cases provided for by law.
            </p>
          </section>

          <section className="bg-gray-50 p-8 border border-black/5">
            <h2 className="text-[24px] font-bold uppercase mb-4 text-[#1a1a1a]">ROLES AND RESPONSIBILITIES PRIVACY</h2>
            <p>Your data are processed by <strong>Gregorio</strong> as Data Controller.</p>
            <div className="mt-4 space-y-1">
              <p><strong>Email:</strong> <a href="mailto:hi@breathofone.com" className="font-bold underline">hi@breathofone.com</a></p>
              <p><strong>Phone:</strong> +39 349 412 5430</p>
            </div>
          </section>

          <section>
            <h2 className="text-[24px] font-bold uppercase mb-4 text-[#1a1a1a]">DATA STORAGE</h2>
            <p className="mb-4">
              We inform you that the data relating to the navigation logs, referred to in point 1), if registered, will be kept by the Data Controller for a period of 15 days.
            </p>
            <p>
              The data referred to in point 2) will be immediately deleted, once the request forwarded to the Data Controller has been processed.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-bold uppercase mb-4 text-[#1a1a1a]">RIGHTS OF THE INTERESTED PARTIES</h2>
            <ul className="space-y-4">
              <li><strong>Access:</strong> Confirm data processing and receive clarifications.</li>
              <li><strong>Rectification:</strong> Rectify or supplement inaccurate data.</li>
              <li><strong>Cancellation / oblivion:</strong> Delete data when no longer necessary.</li>
              <li><strong>Limitation:</strong> Request limitation of processing under specific conditions (Art. 18 GDPR).</li>
              <li><strong>Opposition:</strong> Object to processing based on legitimate interest.</li>
              <li><strong>Portability:</strong> Receive data in a structured, readable format.</li>
            </ul>
            <p className="mt-6">
              To exercise these rights, report problems or ask for clarification, you can send an email to <a href="mailto:hi@breathofone.com" className="font-bold underline">hi@breathofone.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-bold uppercase mb-4 text-[#1a1a1a]">RIGHT TO BE FORGOTTEN</h2>
            <p>
              If you want to assert the right to be forgotten with reference to your personal data that may be contained in the articles published on the site, you can refer to the same Data Controller.
            </p>
          </section>
          
          <div className="pt-10 text-[12px] text-gray-400 border-t border-black/5">
            Last updated: May 2026 • © GREGORIO
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
