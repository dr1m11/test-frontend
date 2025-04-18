import type { HTMLAttributes, MouseEventHandler } from "react";

import type { ComponentProps } from "@/types";
import {
	Arrow,
	ArrowUp,
	ArrowRight,
	Bullet,
	Close,
	Github,
	Linkedin,
	Menu,
	Slack,
	X,
	Youtube,
	AgentOperationsDirector,
	TetrateServiceBridge,
	TetrateIstioSubscription,
	TetrateIstioSubscriptionPlus,
	TetrateEnterpriseEnvoyGateway,
	FinancialServices,
	FIPS,
	Government,
	Kubernetes,
	ZeroTrust,
	Blog,
	ZeroTrustCenter,
	Documentation,
	FAQ,
	EbooksAndReports,
	Whitepapers,
	Video,
	All,
	AboutUs,
	Leadership,
	Investors,
	Partners,
	Newsroom,
	Careers,
	GetSupport,
	ContactUs,
} from "@/components/svgs";

export const icons = {
	arrow: Arrow,
	"arrow-up": ArrowUp,
	close: Close,
	menu: Menu,
	"arrow-right": ArrowRight,
	bullet: Bullet,
	x: X,
	slack: Slack,
	youtube: Youtube,
	github: Github,
	linkedin: Linkedin,
	"m-products-agent-operations-director": AgentOperationsDirector,
	"m-products-tetrate-service-bridge": TetrateServiceBridge,
	"m-products-tetrate-istio-subscription": TetrateIstioSubscription,
	"m-products-tetrate-istio-subscription-plus": TetrateIstioSubscriptionPlus,
	"m-products-tetrate-enterprise-envoy-gateway": TetrateEnterpriseEnvoyGateway,
	"m-solutions-financial-services": FinancialServices,
	"m-solutions-fips": FIPS,
	"m-solutions-government": Government,
	"m-solutions-kubernetes": Kubernetes,
	"m-solutions-zero-trust": ZeroTrust,
	"m-learn-blog": Blog,
	"m-learn-zero-trust-center": ZeroTrustCenter,
	"m-learn-documentation": Documentation,
	"m-learn-faq": FAQ,
	"m-learn-ebooks-and-reports": EbooksAndReports,
	"m-learn-white-papers": Whitepapers,
	"m-learn-video": Video,
	"m-learn-all": All,
	"m-company-about-us": AboutUs,
	"m-company-leadership": Leadership,
	"m-company-investors": Investors,
	"m-company-partners": Partners,
	"m-company-newsroom": Newsroom,
	"m-company-careers": Careers,
	"m-company-get-support": GetSupport,
	"m-company-contact-us": ContactUs,
};
export type IconType = keyof typeof icons;
export interface IconProps
	extends ComponentProps,
		Omit<HTMLAttributes<SVGSVGElement>, "onClick"> {
	name: IconType;
}

export const Icon = ({ name, className, ...props }: IconProps) => {
	if (!icons[name]) return null;

	const ReactIcon = icons[name];

	return <ReactIcon {...props} className={className} />;
};
