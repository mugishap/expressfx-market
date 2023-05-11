import { IMetadata, INavbarLink } from "../types"
import { RiFacebookFill } from 'react-icons/ri'
import { BsTwitter } from 'react-icons/bs'
import { ImGooglePlus } from 'react-icons/im'
import { FaLinkedinIn } from 'react-icons/fa'
import { AmericanExpress, Maestro, MasterCard, Paypal, Visa } from "../assets"

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
                href: "#"
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