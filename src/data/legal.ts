export interface PrivacySection {
    title: string;
    content: string[];
}

export interface CookieInfo {
    name: string;
    purpose: string;
    duration: string;
}

export interface PrivacyPolicyData {
    lastUpdated: string;
    introduction: string;
    sections: {
        title: string;
        content: string[];
    }[];
    cookies: {
        description: string;
        types: {
            name: string;
            purpose: string;
            duration: string;
        }[];
    };
}

export interface TermsSection {
    title: string;
    content: string[];
}

export interface TermsData {
    lastUpdated: string;
    introduction: string;
    sections: TermsSection[];
}

export const privacyPolicyData: PrivacyPolicyData = {
    lastUpdated: "February 21, 2025",
    introduction: "Welcome to my personal portfolio website. I am committed to maintaining the trust and confidence of visitors to my website by adhering to the highest standards of privacy protection and data transparency. This privacy policy outlines the limited ways in which this website handles information.",
    sections: [
        {
            title: "Information Collection and Analytics",
            content: [
                "This website employs Cloudflare Web Analytics, a privacy-first analytics solution that helps understand website performance and user engagement without compromising visitor privacy.",
                "Cloudflare Web Analytics operates without using cookies or collecting personal information, providing only aggregated metrics about website traffic and performance.",
                "We explicitly do not collect, store, or process any personal identifiable information (PII), and no user registration is required to access this website.",
                "The analytics implementation respects Do Not Track (DNT) browser settings and complies with major privacy regulations."
            ]
        },
        {
            title: "Data Processing and Usage",
            content: [
                "All analytics data is processed anonymously and aggregated, focusing solely on essential metrics such as page views, visit duration, and referral sources.",
                "Your data is never sold, shared, or used for marketing purposes. The collected information serves exclusively to improve website performance and user experience.",
                "We maintain a strict no-sharing policy with third parties, except where required by law.",
                "The website operates with minimal data collection principles, adhering to data minimization practices."
            ]
        },
        {
            title: "Technical Information and Security",
            content: [
                "Our hosting infrastructure automatically logs basic server information required for security and operational purposes.",
                "This includes anonymized IP addresses, browser types, device categories, and basic visit timestamps - all processed in compliance with privacy regulations.",
                "We employ industry-standard security measures to protect against unauthorized access, alteration, or destruction of the limited data we collect.",
                "All data transmission occurs over secure HTTPS connections, encrypted using current security standards."
            ]
        },
        {
            title: "Your Rights and Choices",
            content: [
                "You maintain full control over your privacy while visiting this website, including the right to use browser privacy features and tracking prevention tools.",
                "No account creation or personal information submission is required to access any part of this website.",
                "The website respects all privacy-related browser settings and provides full functionality without requiring the acceptance of tracking or analytics."
            ]
        }
    ],
    cookies: {
        description: "This website operates with minimal cookie usage, implementing only essential technical cookies required for basic website functionality. We do not use any tracking or marketing cookies.",
        types: [
            {
                name: "Essential Technical Cookies",
                purpose: "Enable core website functionality and security features",
                duration: "Session only"
            },
            {
                name: "Cloudflare Security Cookies",
                purpose: "Provide security and performance optimization through Cloudflare's infrastructure",
                duration: "Session only"
            }
        ]
    }
};

export const termsData: TermsData = {
    lastUpdated: "February 2, 2025",
    introduction: "Welcome to my portfolio website. By accessing and using this website, you agree to be bound by these Terms and Conditions.",
    sections: [
        {
            title: "Intellectual Property",
            content: [
                "This website and its content are built using free and open-source software.",
                "All images used are copyright-free, sourced from Pexels and Unsplash.",
                "The website's source code is publicly available under an open-source license.",
                "You may use the website content for non-commercial purposes with appropriate attribution."
            ]
        },
        {
            title: "Usage License",
            content: [
                "Content may be freely used for non-commercial purposes with proper attribution.",
                "Commercial use requires explicit written permission.",
                "Modification and distribution of the website's source code must comply with the original open-source licenses."
            ]
        },
        {
            title: "Disclaimers",
            content: [
                "This website is provided 'as is' without any warranties.",
                "We are not responsible for any errors or omissions in the content.",
                "We reserve the right to modify these terms at any time without notice."
            ]
        },
        {
            title: "Limitations",
            content: [
                "The website may contain links to external sites that we don't control or endorse.",
                "We are not responsible for the content or privacy practices of linked sites.",
                "Use of this website is at your own risk."
            ]
        }
    ]
};