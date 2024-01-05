export interface Address {
	line1?: string,
	line2?: string,
	line3?: string,
	sublocality?: string,
	city?: string,
	region?: string,
	postalCode?: string,
	extraDescription?: string,
	countryCode?: string,
}

export enum C_clientFocuses {
	FINANCIAL_PLANNING = "College Education Planning",
	PERSONAL_RETIREMENT = "Corporate Benefits",
	SAVING_FOR_EDUCATION = "Corporate Executive Services",
	ESG_INVESTING = "Corporate Retirement Plan Services",
	PHILANTHROPHY___CHARITABLE_GIVING = "Divorce Transition Planning",
	INVESTING_ADVICE = "Education Planning",
	EMPLOYEE_BENEFITS_PLANNING = "Employee Benefits Planning",
	EXECUTIVE_COMPENSATION = "Executive Compensation",
	EQUITY_COMPENSATION_SERVICES = "Equity Compensation Services",
	FAMILY_WEALTH_MANAGEMENT_STRATEGIES = "Family Wealth Management Strategies",
	INSTITUTIONAL_AND_CORPORATE_BENEFIT_SERVICES = "Institutional and Corporate Benefit Services",
	INSTITUTIONAL_CONSULTING = "Institutional Consulting",
	INSTITUTIONAL_INVESTMENT_CONSULTING = "Institutional Investment Consulting",
	SERVICES_FOR_ENDOWMENTS__FOUNDATIONS__AND_NON_PROFITS = "Services for Endowments, Foundations, and Non-profits",
	SERVICES_FOR_DEFINED_BENEFIT_PLANS = "Services for Defined Benefit Plans",
	INVESTMENT_CONSULTING_FOR_DEFINED_CONTRIBUTION_PLANS = "Investment Consulting for Defined Contribution Plans",
	EMPLOYEE_FINANCIAL_HEALTH = "Employee Financial Health",
	INTERNATIONAL_WEALTH_MANAGEMENT = "International Wealth Management",
	LEGACY_PLANNING = "Legacy Planning",
	LGBT_WEALTH_PLANNING = "LGBT Wealth Planning",
	LIQUIDITY_MANAGEMENT = "Liquidity Management",
	MANAGING_NEW_WEALTH = "Managing New Wealth",
	PERSONAL_RETIREMENT_PLANNING = "Personal Retirement Planning",
	PHILANTHROPIC_PLANNING = "Philanthropic Planning",
	PORTFOLIO_MANAGEMENT_SERVICES = "Portfolio Management Services",
	SMALL_BUSINESS_STRATEGIES = "Small Business Strategies",
	SOCIALLY_RESPONSIBLE__VALUES_BASED__AND_ESG_INVESTING_ = "Socially Responsible, Values Based, and ESG Investing*",
	SPECIAL_NEEDS_PLANNING_STRATEGIES = "Special Needs Planning Strategies",
	WOMEN_AND_WEALTH = "Women and Wealth",
	SPORTS___ENTERTAINMENT = "Sports & Entertainment",
	INDIVIDUAL_AND_CORPORATE_INVESTMENT_STRATEGY = "Individual and Corporate Investment Strategy",
	TAX_MINIMIZATION = "Tax Minimization",
	RETIREMENT_INCOME = "Retirement Income",
}

export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export default interface FinancialProfessional {
	yearsOfExperience?: number,
	address: Address,
	description?: string,
	name: string,
	certifications?: string[],
	c_clientFocuses?: C_clientFocuses[],
	c_jobTitle?: string[],
	headshot?: Image,
	languages?: string[],
	mainPhone?: any,
}
