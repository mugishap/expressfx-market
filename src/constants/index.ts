import { AiFillHome } from "react-icons/ai"
import { BsFillTelephoneFill, BsShareFill, BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { ImGooglePlus } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import { RiFacebookFill } from 'react-icons/ri'
import { AddBitcoins, AmericanExpress, BuySellBitcoins, CostEfficieny, DownloadBitcoins, HighLiquidity, Maestro, MasterCard, PaymentOptions, Paypal, Post1, StrongSecurity, Visa, WorldCoverage } from "../assets"
import { IContact, IFrequentlyAskedQuestion, IMetadata, INavbarLink, ITermOfService } from "../types"
import { Post2 } from "../assets"
import { Post3 } from "../assets"

export const metadata: IMetadata[] = [
    {
        name: "Last trade price",
        value: "9, 450 USD"
    },
    {
        name: "24 hour price",
        value: "+5.26%"
    },
    {
        name: " 24 hour volume",
        value: "12.820BTC"
    },
    {
        name: "Active traders",
        value: "2,231,775"
    },
]

export const navbarLinks: INavbarLink[] = [
    {
        name: "Home",
        href: "/",
        pathname: "/"
    },
    {
        name: "About Us",
        href: "/about",
        pathname: "/about"
    },
    {
        name: "Market Data",
        href: "/market-data",
        pathname: "/market-data"
    },
    {
        name: "Faqs",
        href: "/faq",
        pathname: "/faq"
    },
    {
        name: "Contact Us",
        href: "/contact",
        pathname: "/contact"
    },
    {
        name: "Register Now",
        href: "/auth/signup",
        pathname: "/auth/signup"
    },
    {
        name: "Login Now",
        href: "/auth/login",
        pathname: "/auth/login"
    },

]

export const footerLinks = [
    {
        heading: "our company",
        links: [
            {
                name: "home",
                href: "/"
            },
            {
                name: "about us",
                href: "/about"
            },
            {
                name: "contact us",
                href: "/contact"
            },
        ]
    },
    {
        heading: "help & support",
        links: [
            {
                name: "faq",
                href: "/faq"
            },
            {
                name: "terms of services",
                href: "/terms"
            },
            {
                name: "register",
                href: "/auth/signup"
            },
            {
                name: "login",
                href: "/auth/login"
            },
        ]
    },
    {
        heading: "contact us",
        links: [
            {
                name: "SUPPORT@EXPRESSFXMARKET.COM",
                href: "mailto:support@expressfxmarket.com"
            },
            {
                name: "+14782272523",
                href: "tel:+14782272523"
            },
            {
                name: "18TH FLOOR, 22 BISHOPSGATE, LIME STREET, LONDON, UK",
                href: "#"
            },
            {
                name: "24/7 TRADING TIME",
                href: "#"
            },
        ],
        icons: [
            { icon: RiFacebookFill },
            { icon: BsTwitter },
            { icon: ImGooglePlus },
            { icon: FaLinkedinIn }
        ]
    },
]

export const statistics: IMetadata[] = [
    {
        name: "Market Cap",
        value: "$198.76B"
    },
    {
        name: "ACTIVE ACCOUNTS",
        value: "369K"
    },
    {
        name: "DAILY TRANSACTIONS",
        value: "243K"
    },
    {
        name: "SUPPORTED COUNTRIES",
        value: "127"
    },
]

export const paymentMethods = [
    {
        name: "American Express",
        image: AmericanExpress,
    },
    {
        name: "Master Card",
        image: MasterCard,
    },
    {
        name: "Visa",
        image: Visa,
    },
    {
        name: "PayPal",
        image: Paypal,
    },
    {
        name: "Mastro",
        image: Maestro,
    },


]

export const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands"
]

export const facts: IMetadata[] = [
    {
        name: "MARKET CAP",
        value: "$77.45B"
    },
    {
        name: "DAILY TRANSACTIONS",
        value: "165k"
    },
    {
        name: "ACTIVE ACCOUNTS",
        value: "1726"
    },
    {
        name: "YEARS ON THE MARKET",
        value: "17"
    },
]

export const terms: ITermOfService[] = [
    {
        title: "Risk Notice",
        description: "Bitcoin is a not backed or value guaranteed by any financial institution; when purchasing bitcoins the customer assumes all risk the bitcoins may become worthless in value. Customers should research and consider the risks before purchasing any bitcoins. The company makes absolutely no guarantee about the future value of the bitcoins purchased."
    },
    {
        title: "Severability",
        description: "In the event any court shall declare any section or sections of this Agreement invalid or void, such declaration shall not invalidate the entire Agreement and all other paragraphs of the Agreement shall remain in full force and effect."
    },
    {
        title: "Customer input errors",
        description: "It is the sole responsibility of the customer to check the accuracy of information entered and saved on the website. Account details displayed on the order summary webpage will be the final transfer destination. In the case that this information is incorrect, and funds are transferred to an unintended destination, the company shall not reimburse the customer and shall not transfer additional funds. As such customers must ensure the Bitcoin address and bank information they enter is completely correct."
    },
    {
        title: "Binding Agreement",
        description: "The terms and provisions of this Agreement are binding upon Your heirs, successors, assigns, and other representatives. This Agreement may be executed in counterparts, each of which shall be considered to be an original, but both of which constitute the same Agreement."
    },
    {
        title: "Expired orders",
        description: "If the company receives payment for an order that has already expired, the company reserves the right to recalculate the Bitcoin to Thai Baht exchange rate at the time of processing the transfer to the customer. This may result in the customer receiving less bitcoins or Thai Baht than the original ordered amount."
    },
    {
        title: "Choice of Law",
        description: "This Agreement, and its application and interpretation, shall be governed exclusively by the laws of the State of Georgia, without regard to its conflict of law rules. You consent to the exclusive jurisdiction of the federal and state courts located in or near Atlanta, Georgia for any dispute arising under this Agreement."
    },
    {
        title: "Security",
        description: "We have implemented security measures designed to secure your information from accidental loss and from unauthorized access, use, alteration or disclosure. However, we cannot guarantee that unauthorized persons will never gain access to your information, and you acknowledge that you provide your information at your own risk, except as otherwise provided by applicable law."
    },
]

export const contacts: IContact[] = [
    {
        title: "Address",
        icon: AiFillHome,
        data: "18th floor, 22 Bishopsgate, Lime Street, London, UK",
    },
    {
        title: "Phone (Whatsapp)",
        icon: BsFillTelephoneFill,
        data: "+14782272523",
    },
    {
        title: "Email Address",
        icon: MdEmail,
        data: "support@Expressfxmarket.com",
    },
    {
        title: "Social Profiles",
        icon: BsShareFill,
        data: "",
        socials: [
            { background: "orange", icon: RiFacebookFill, href: "https://www.facebook.com" },
            { background: "orange", icon: BsTwitter, href: "https://www.twitter.com" },
            { background: "orange", icon: ImGooglePlus, href: "https://www.google.com" },
        ]
    },
]

export const frequentlyAskedQuestions: IFrequentlyAskedQuestion[] = [
    {
        question: "WHAT IS BITCOIN ?",
        answer: "Bitcoin is a form of digital currency which is based on an open source code that was created and is held electronically. Bitcoin is a decentralized form of currency, meaning that it does not belong to any form of government and is not controlled by anyone."
    },
    {
        question: "WHO DEVELOPED BITCOIN ?",
        answer: "The original Bitcoin code was designed by Satoshi Nakamoto under MIT open source credentials. In 2008 Nakamoto outlined the idea behind Bitcoin in his White Paper, which scientifically described how the cryptocurrency would function. Bitcoin is the first successful digital currency designed with trust in cryptography over central authorities. Satoshi left the Bitcoin code in the hands of developers and the community in 2010. Thus far hundreds of developers have added to the core code throughout the years."
    },
    {
        question: "WHAT IS BITCOIN MINING ?",
        answer: "Bitcoin mining is analogous to the mining of gold, but its digital form. The process involves specialized computers solving algorithmic equations or hash functions. These problems help miners to confirm blocks of transactions held within the network. Bitcoin mining provides a reward for miners by paying out in Bitcoin in turn the miners confirm transactions on the blockchain. Miners introduce new Bitcoin into the network and also secure the system with transaction confirmation. They are also rewarded network fees for when they harvest new coin and a time when the last bitcoin is found mining will continue."
    },
    {
        question: "IS BITCOIN USED FOR ILLEGAL ACTIVITIES ?",
        answer: "This is a yet another controversial topic. Because of the freedom and the degree of anonymity that the use of Bitcoin offers, many users who were seeking to purchase or solicit illegal goods or services initially turned to the use of Bitcoin as a method of payment."
    },
    {
        question: "CAN BITCOIN BE REGULATED IN ANY WAY ?",
        answer: "Again, when a user decides to use a specific type of software for their Bitcoin wallet, they are deciding what direction the Bitcoin network is heading towards. In other words, you need the cooperation of nearly every single user in order to modify any aspect of the Bitcoin protocol."
    },
    {
        question: "IS BITCOIN ANONYMOUS ?",
        answer: "Participants in Bitcoin transactions are identified by public addresses - those are the long strings of around 30 characters you see in a person's Bitcoin address, usually starting with the numerals '1' or '3'. For every transaction, the sending and receiving addresses are publicly-viewable."
    },
    {
        question: "HOW CAN I SELL BITCOINS ?",
        answer: "Bitcoins can be sold locally using LocalBitcoins, on Bitcoin brokerages / exchanges, using two-way Bitcoin Teller Machines (BTM's) or you can pay for a good or service with them. Bitcoins can be sold to just about anyone as long as they have a Bitcoin address, and can be sold for any fiat currency in the world or traded for a physical good. Feel free to check out our recommended list of exchanges and brokerage services to sell your bitcoins online."
    },
    {
        question: "WHO CAN BE A CLIENT OF EXPRESSFXMARKET LTD ?",
        answer: "Anyone can be a client of ExpressFxMarket LTD, but he/she must be not less 18 years old.",
    },
    {
        question: "HOW CAN I BECOME A CLIENT OF EXPRESSFXMARKET LTD ?",
        answer: "You can become a client of ExpressFxMarket LTD and it is totally free of charge. All you need is to Create an account by submitting all required information."
    },
    {
        question: "IS IT FREE OF CHARGE TO OPEN AN ACCOUNT ?",
        answer: "Yes, it is totally free of charge"
    },
    {
        question: "I HAVE TROUBLE DURING REGISTERING. WHAT SHALL I DO ?",
        answer: "Check if the data you entered on the registration is correct. Displayed errors mesages can help you resolve these issues. Sometimes it could be browser issue. Try to change your browser or turn off any translator. If you need further assistance don't hesitate to contact us"
    },
    {
        question: "HOW MAY I ACCESS MY ACCOUNT ?",
        answer: "You may log into your account by clicking the login link on our website homepage and entering your email address and password in the login form"
    },

]

export const steps = [
    {
        image: DownloadBitcoins,
        heading: "Create Your Account",
        description: "Create your trading account with few and easy steps."
    },
    {
        image: AddBitcoins,
        heading: "Fund your trading account",
        description: "Fund your account by making payment to the stated wallet address in the website."
    },
    {
        image: BuySellBitcoins,
        heading: "Withdraw your profit securedly",
        description: "Place a withdraw and get it without delay via any means of payout."
    },
]

export const siteData = [
    {
        name: "OUR MISSION",
        label: "mission",
        description: "Bitcoin is based on a protocol known as the blockchain, which allows to create, transfer and verify ultra-secure financial data without interference of third parties."
    },
    {
        name: "OUR ADVANTAGES",
        label: "advantages",
        description: "Our mission as an official partner of Bitcoin Foundation is to help you enter and better understand the world of #1 cryptocurrency and avoid any issues you may encounter."
    },
    {
        name: "OUR GUARANTEES",
        label: "guarantees",
        description: "We are here because we are passionate about open, transparent markets and aim to be a major driving force in widespread adoption, we are the first and the best in cryptocurrency."
    },
]

export const characteristics = [
    {
        image: StrongSecurity,
        heading: "Strong Security",
        description: "Protection against DDoS attacks, &nbsp; full data encryption"
    },
    {
        image: WorldCoverage,
        heading: "World Coverage",
        description: "Providing services in 99% countries &nbsp; around all the globe"
    },
    {
        image: PaymentOptions,
        heading: "Payment Options",
        description: "Popular methods: Visa, MasterCard, &nbsp; bank transfer, cryptocurrency"
    },
    {
        image: StrongSecurity,
        heading: "Mobile App",
        description: "Trading via our Mobile App, Available &nbsp; in Play Store & App Store"
    },
    {
        image: CostEfficieny,
        heading: "Cost Efficiency",
        description: "Reasonable trading fees for takers &nbsp; and all market makers"
    },
    {
        image: HighLiquidity,
        heading: "High Liquidity",
        description: "Fast access to high liquidity orderbook &nbsp; for top currency pairs"
    },
]

export const reviews = [
    {
        review:
            "I laugh a lot when I see people doubting. This company please enjoy your money with your family and thanks for trusting this company with your hard earn",
        image: "https://picsum.photos/500/500",
        name: "PAULINA C.",
        role: "Media Analyst",
        workplace: "Quora Inc.",
        rating: 4
    },
    {
        review:
            "Thanks for the feedback and the trust keep it up. New investors can still send in there investment, this is the best platform for you ,and feel free from financial bondage",
        image: "https://picsum.photos/500/500",
        name: "GRACIE MOORE",
        role: "Man. Director",
        workplace: "Wluxin Inc.",
        rating: 4
    },
    {
        review:
            "I'm so excited, I give gratitude to the entire staff of expressfxmarket for I have received my profit of $4000...thank you all especially to my manager.",
        image: "https://picsum.photos/500/500",
        name: "RAUL GARCIA",
        role: "Media Analyst",
        workplace: "USA",
        rating: 4
    },
    {
        review:
            "Trading with a professional broker: solves a lot of stress and hassle, expressfxmarket.com is the best.",
        image: "https://picsum.photos/500/500",
        name: "PAULA WILSON",
        role: "Athlete",
        workplace: "Canada",
        rating: 4
    },
    {
        review:
            "😁 congrats 🍾 Mitchell like we have said no worries 😉 when you trade with this platform the end result is profit 💯 I can see you are very happy now ... I wish most investors can be like her but fear is killing them some of them due to their past with scammers ... all I can say is try us and see if you don't get a return at no extra cost .. with us profit must be made to get started 💵🥂",
        image: "https://picsum.photos/500/500",
        name: "ANTONIO MORENO",
        role: "Web Developer",
        workplace: "Circle Ltd",
        rating: 4
    },
    {
        review:
            "This is one of the best companies I've invested in, they give high profits and they are responsible for any loss. Thank you expressfxmarket.com",
        image: "https://picsum.photos/500/500",
        name: "GREGOR MARTIN.",
        role: "Finance Analyst",
        workplace: "Orion Ltd",
        rating: 4
    },
    {
        review:
            "Thanks very much for your feedback congrats keep doing business with this company thanks so much for trusting me God bless you wish you more to come",
        image: "https://picsum.photos/500/500",
        name: "MICHAEL HOLZ",
        role: "Seo Analyst",
        workplace: "Oscorp Tech",
        rating: 4
    },
    {
        review:
            "Thanks for the feedback and the trust keep it up. New investors can still send in their investment, this is the best platform for you, and feel free from financial",
        image: "https://picsum.photos/500/500",
        name: "KEN RICHARD",
        role: "COO",
        workplace: "Skynet Inc.",
        rating: 4
    },

];

export const highlights = [
    {
        date: "01 JAN",
        title: "How Cryptocurrency Begun and Its Impact To Financial Transactions",
        image: Post1
    },
    {
        date: "17 MAR",
        title: "Cryptocurrency - Who Are Involved With It? Words about members",
        image: Post2
    },
    {
        date: "25 FEB",
        title: "Risks & Rewards Of Investing In Bitcoin. Pros and Cons",
        image: Post3
    },
]

export const topInvestors = [
    {
        id: "#8LNSV",
        asset: "Ethereum",
        invested: "$ 1,000",
        profit: "$ 1,500",
        date: "01 JAN 2021",
        status: "pending"
    },
    {
        id: "#8LNSV",
        asset: "Ethereum",
        invested: "$ 1,000",
        profit: "$ 1,500",
        date: "01 JAN 2021",
        status: "invested"
    },
    {
        id: "#8LNSV",
        asset: "Ethereum",
        invested: "$ 1,000",
        profit: "$ 1,500",
        date: "01 JAN 2021",
        status: "invested"
    },
    {
        id: "#8LNSV",
        asset: "Ethereum",
        invested: "$ 1,000",
        profit: "$ 1,500",
        date: "01 JAN 2021",
        status: "invested"
    },
    {
        id: "#8LNSV",
        asset: "Ethereum",
        invested: "$ 1,000",
        profit: "$ 1,500",
        date: "01 JAN 2021",
        status: "pending"
    },
    {
        id: "#8LNSV",
        asset: "Ethereum",
        invested: "$ 1,000",
        profit: "$ 1,500",
        date: "01 JAN 2021",
        status: "pending"
    },
    {
        id: "#8LNSV",
        asset: "Ethereum",
        invested: "$ 1,000",
        profit: "$ 1,500",
        date: "01 JAN 2021",
        status: "pending"
    },
    {
        id: "#8LNSV",
        asset: "Ethereum",
        invested: "$ 1,000",
        profit: "$ 1,500",
        date: "01 JAN 2021",
        status: "invested"
    },
    {
        id: "#8LNSV",
        asset: "Ethereum",
        invested: "$ 1,000",
        profit: "$ 1,500",
        date: "01 JAN 2021",
        status: "invested"
    },
    {
        id: "#8LNSV",
        asset: "Ethereum",
        invested: "$ 1,000",
        profit: "$ 1,500",
        date: "01 JAN 2021",
        status: "invested"
    },
    {
        id: "#8LNSV",
        asset: "Ethereum",
        invested: "$ 1,000",
        profit: "$ 1,500",
        date: "01 JAN 2021",
        status: "invested"
    },
    {
        id: "#8LNSV",
        asset: "Ethereum",
        invested: "$ 1,000",
        profit: "$ 1,500",
        date: "01 JAN 2021",
        status: "pending"
    },
    {
        id: "#8LNSV",
        asset: "Ethereum",
        invested: "$ 1,000",
        profit: "$ 1,500",
        date: "01 JAN 2021",
        status: "invested"
    },
    {
        id: "#8LNSV",
        asset: "Ethereum",
        invested: "$ 1,000",
        profit: "$ 1,500",
        date: "01 JAN 2021",
        status: "pending"
    },
]

export const otherMarketData = [
    {
        date: "13-05-2023",
        price: "$ 26,747.8",
        volume: "$ 103.96 M",
        change: "-0.22%"
    },
    {
        date: "13-05-2023",
        price: "$ 26,747.8",
        volume: "$ 103.96 M",
        change: "-0.22%"
    },
    {
        date: "13-05-2023",
        price: "$ 26,747.8",
        volume: "$ 103.96 M",
        change: "-0.22%"
    },
    {
        date: "13-05-2023",
        price: "$ 26,747.8",
        volume: "$ 103.96 M",
        change: "-0.22%"
    },
    {
        date: "13-05-2023",
        price: "$ 26,747.8",
        volume: "$ 103.96 M",
        change: "-0.22%"
    },
    {
        date: "13-05-2023",
        price: "$ 26,747.8",
        volume: "$ 103.96 M",
        change: "-0.22%"
    },
    {
        date: "13-05-2023",
        price: "$ 26,747.8",
        volume: "$ 103.96 M",
        change: "-0.22%"
    },

]
