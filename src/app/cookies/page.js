import React from 'react';

export const metadata = {
  title: 'Cookie Policy | Gregorio World',
  description: 'Full Cookie Policy for Gregorio.world - GDPR Compliant',
};

const CookiePolicyPage = () => {
  return (
    <div className="bg-white py-20 min-h-screen">
      <div className="container mx-auto px-6 md:px-20 max-w-[1000px]">
        <h1 className="text-[42px] font-bold tracking-[2px] uppercase mb-12 text-[#1a1a1a]">Cookie Policy</h1>
        <p className="text-[13px] text-gray-500 mb-8 tracking-widest uppercase">– Art. 13 and 14 GDPR 679/2016 Compliant –</p>
        
        <div className="space-y-12 text-[#333] leading-relaxed text-[15px]">
          <section>
            <h2 className="text-[24px] font-bold uppercase mb-4 text-[#1a1a1a]">PREMISES</h2>
            <p className="mb-4">
              The Data Controller is required to provide precise information on the processing of your personal data, pursuant to art. 13 and 14 of EU Regulation 2016/679 “European regulation on the protection of personal data”, and to inform the user of this website https://gregorio.world about the functioning of the cookies present within it. We therefore invite you to carefully read the following information in order to be able to consciously express your will regarding the processing of your data for the purposes and in the manner indicated below.
            </p>
            <p>
              The Data Controller, in line with the Legislative Decree 196/2003 – Privacy Code, and the EU Regulation No. 679/2016 – GDPR -, intends to guarantee the privacy and security of the personal data of each visitor, as established in the following information. The latter is to be considered valid for all purposes as information pursuant to art. 13 Legislative Decree 196/2003 and art. 13 and 14 GDPR 679/2016.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-bold uppercase mb-4 text-[#1a1a1a]">WHAT ARE COOKIES?</h2>
            <p className="mb-4">
              Cookies are packets of information sent by a web server (eg the site) to the user’s Internet browser, which are automatically stored on the computer and automatically sent back to the server at each subsequent access to the site. By default, almost all web browsers are set to automatically accept cookies.
            </p>
            <p className="mb-4">Typically cookies can be installed:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Directly from the owner and / or manager of the website (so-called first-party cookies);</li>
              <li>By managers unrelated to the website visited by the user (so-called third-party cookies). Unless otherwise specified, please note that these cookies fall under the direct and exclusive responsibility of the manager himself. Further information on privacy and their use can be found directly on the websites of the respective operators.</li>
            </ul>
            <p className="mb-4">This website may use the following types of cookies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Session:</strong> are cookies that are not stored permanently and are deleted when the browser is closed.</li>
              <li><strong>Persistent:</strong> remain stored on the hard drive until they expire or are canceled.</li>
              <li><strong>Technicians:</strong> used to authenticate or allow the choice of navigation language. Informed consent is generally not necessary.</li>
              <li><strong>Non-technical:</strong> used for profiling and marketing purposes. User terminal use is prohibited without prior informed consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[24px] font-bold uppercase mb-4 text-[#1a1a1a]">PAYMENT METHODS & EXTERNAL SITES</h2>
            <p className="mb-4">
              On the https://gregorio.world site there are two payment methods, namely PayPal and Stripe. If the user makes the payment using one of the aforementioned methods, he will be redirected to the relevant website. These external sites may insert cookies; we invite you to consult their relative Cookie Policies.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-bold uppercase mb-4 text-[#1a1a1a]">SOCIAL PLUG-IN</h2>
            <p className="mb-4">
              Our site uses social plug-ins to allow content sharing. These plug-ins are visible as icons (Facebook, Linkedin, etc.). Clicking these links may place third-party cookies on your terminal.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px]">
              <div className="border-l-2 border-[#7dc6db] pl-4">
                <p className="font-bold">Facebook</p>
                <p className="text-gray-500">Facebook Inc., Palo Alto, USA</p>
              </div>
              <div className="border-l-2 border-[#7dc6db] pl-4">
                <p className="font-bold">Linkedin</p>
                <p className="text-gray-500">Linkedin Corp., Sunnyvale, USA</p>
              </div>
              <div className="border-l-2 border-[#7dc6db] pl-4">
                <p className="font-bold">Twitter</p>
                <p className="text-gray-500">Twitter Inc., San Francisco, USA</p>
              </div>
              <div className="border-l-2 border-[#7dc6db] pl-4">
                <p className="font-bold">Google +</p>
                <p className="text-gray-500">Google LLC, Mountain View, USA</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[24px] font-bold uppercase mb-4 text-[#1a1a1a]">ROLES AND RESPONSIBILITIES PRIVACY</h2>
            <p>Your data are processed by the Data Controller, in the person of the pro tempore legal representative.</p>
            <div className="mt-4 space-y-1">
              <p><strong>Email:</strong> <a href="mailto:hi@breathofone.com" className="underline">hi@breathofone.com</a></p>
              <p><strong>Phone:</strong> +39 349 412 5430</p>
            </div>
          </section>

          <section>
            <h2 className="text-[24px] font-bold uppercase mb-4 text-[#1a1a1a]">RIGHT TO BE FORGOTTEN</h2>
            <p>
              If the interested party wishes to assert the right to be forgotten with reference to any personal data contained in the articles uploaded to the site, he or she may refer to the same Data Controller.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-bold uppercase mb-4 text-[#1a1a1a]">CHANGES TO THE INFORMATION</h2>
            <p>
              The possible entry into force of new sector regulations, as well as the constant updating of the services and the site, could lead to the need to change the methods and terms of this information. We will publish any changes to this document on this page.
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

export default CookiePolicyPage;
