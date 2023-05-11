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
    showPassword: boolean
}

export interface INavbarLink {
    name: string,
    href: string,
    pathname: "/" | "/about" | "/market-data" | "/faq" | "/contact" | "/auth/signup" | "/auth/login"
}