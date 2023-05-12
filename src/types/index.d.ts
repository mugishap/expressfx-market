import { IconType } from "react-icons"

export interface ISignupData {
    fullName: string,
    email: string,
    phone: string,
    sex: "MALE" | "FEMALE" | "OTHER" | "",
    country: string,
    password: string,
    confirmPassword: string,
}

export interface IMetadata {
    name: string,
    value: string
}

export interface ILoginData {
    email: string,
    password: string,
}

export interface INavbarLink {
    name: string,
    href: string,
    pathname: "/" | "/about" | "/market-data" | "/faq" | "/contact" | "/auth/signup" | "/auth/login"
}

export interface ITermOfService {
    title: string,
    description: string
}

export interface IContact {
    title: string,
    icon: IconType,
    data: string
    socials?: {
        icon: IconType,
        background: string,
        href: string
    }[]
}