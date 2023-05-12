import { IContact, IMetadata, INavbarLink, ITermOfService } from "../types"
import { RiFacebookFill } from 'react-icons/ri'
import { BsFillTelephoneFill, BsShareFill, BsTwitter } from 'react-icons/bs'
import { ImGooglePlus } from 'react-icons/im'
import { FaLinkedinIn } from 'react-icons/fa'
import { AmericanExpress, Maestro, MasterCard, Paypal, Visa } from "../assets"
import { AiFillHome } from "react-icons/ai"
import { MdEmail } from 'react-icons/md'

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