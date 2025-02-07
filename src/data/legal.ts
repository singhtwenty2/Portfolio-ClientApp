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
    sections: PrivacySection[];
    cookies: {
        description: string;
        types: CookieInfo[];
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
    lastUpdated: "February 2, 2025",
    introduction: "Welcome to my personal portfolio website. I am committed to protecting your privacy and ensuring transparency about how I handle information collected through this website.",
    sections: [
        {
            title: "Information Collection",
            content: [
                "This website collects minimal data through Google Analytics to understand visitor behavior and improve user experience.",
                "We do not collect any personal information, sensor data, or hardware access (such as camera, microphone, etc.).",
                "No user registration or account creation is required to use this website."
            ]
        },
        {
            title: "Data Usage",
            content: [
                "Analytics data is used solely for website performance monitoring and user experience improvement.",
                "Your data is never sold or shared with third parties for marketing purposes.",
                "We use aggregated, anonymous data to understand website traffic patterns and user behavior."
            ]
        },
        {
            title: "Technical Information",
            content: [
                "We automatically collect standard server logs and anonymous usage statistics.",
                "This includes: IP addresses, browser type, device type, time spent on site, and pages visited.",
                "This information helps us maintain website security and optimize performance."
            ]
        }
    ],
    cookies: {
        description: "This website uses essential cookies for basic functionality and analytics purposes.",
        types: [
            {
                name: "Google Analytics",
                purpose: "Track website usage and user behavior",
                duration: "2 years"
            },
            {
                name: "Essential Cookies",
                purpose: "Enable basic website functionality",
                duration: "Session"
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