export type TermsSection = {
  heading: string;
  text: string;
};

export interface TermsData {
  title: string;
  sections: TermsSection[];
}

export const termsContent: TermsData = {
  title: "Terms and Conditions",
  sections: [
    {
      heading: "Intellectual Property",
      text: "All materials on this website—such as text, graphics, logos, images, and code—are either owned by me or are provided under free, open-source licenses. Unauthorized reproduction or commercial use is prohibited without prior consent. Non-commercial use is allowed provided proper attribution is given."
    },
    {
      heading: "Use License",
      text: "You are granted a non-exclusive, limited license to access and use the website content for personal, non-commercial purposes. Redistribution or modification of any content is prohibited without explicit permission."
    },
    {
      heading: "Disclaimer",
      text: "This website and its content are provided 'as is' without any warranties. I do not guarantee the accuracy, reliability, or fitness for a particular purpose, and shall not be held liable for any damages arising from the use of this website."
    },
    {
      heading: "Maintenance and Modifications",
      text: "I reserve the right to update, modify, or remove any content on this website at any time without prior notice. These terms are subject to change."
    },
    {
      heading: "Governing Law",
      text: "Any disputes arising from the use of this website shall be governed by and construed in accordance with the applicable laws."
    },
    {
      heading: "Contact",
      text: "For any inquiries regarding these Terms and Conditions, please reach out via the website's contact form."
    }
  ]
}; 