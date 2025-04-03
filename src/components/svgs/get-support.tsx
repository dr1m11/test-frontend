import type { SvgProps } from "@/types";

export const GetSupport = ({ ...props }: SvgProps) => {
	const { width = 24, height = 26, color = "inherit", className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 26"
			fill="inherit"
			className={className}
		>
			<path
				d="M22.8572 12.1041V12.1069V21.0356C22.8572 22.0208 22.4659 22.9655 21.7693 23.6621C21.0727 24.3587 20.128 24.75 19.1429 24.75H12.8928C12.8549 24.75 12.8185 24.7349 12.7917 24.7082C12.7649 24.6814 12.7499 24.645 12.7499 24.6071C12.7499 24.5692 12.7649 24.5329 12.7917 24.5061C12.8185 24.4793 12.8549 24.4643 12.8928 24.4643H19.1429C20.0522 24.4643 20.9243 24.103 21.5673 23.46C22.2102 22.8171 22.5715 21.945 22.5715 21.0356V20.2856H21.8215H19.1429C18.6314 20.2856 18.1408 20.0825 17.7791 19.7208C17.4174 19.3591 17.2142 18.8685 17.2142 18.357V13.8927C17.2142 13.3812 17.4174 12.8906 17.7791 12.529C18.1408 12.1673 18.6314 11.9641 19.1429 11.9641H21.7824H22.6038L22.5293 11.1461C22.3474 9.14822 21.6009 7.24335 20.3768 5.65396C19.1527 4.06458 17.5017 2.8563 15.6165 2.17025C13.7313 1.48421 11.6899 1.34873 9.73056 1.77963C7.77169 2.21044 5.97581 3.1896 4.55257 4.60279C2.78206 6.35031 1.69004 8.67008 1.4714 11.1482L1.39941 11.9641H2.2185H4.85693C5.36843 11.9641 5.85898 12.1673 6.22066 12.529C6.58235 12.8906 6.78554 13.3812 6.78554 13.8927V18.357C6.78554 18.8685 6.58235 19.3591 6.22066 19.7208C5.85898 20.0825 5.36843 20.2856 4.85693 20.2856H3.07119C2.55969 20.2856 2.06914 20.0825 1.70746 19.7208C1.34577 19.3591 1.14258 18.8685 1.14258 18.357V12.1074C1.14499 9.95667 1.78539 7.85501 2.98272 6.06839C4.18012 4.28166 5.88068 2.89034 7.86916 2.07054C9.85765 1.25073 12.0447 1.03929 14.1534 1.46299C16.262 1.88667 18.1976 2.92641 19.715 4.4506C20.7165 5.45691 21.5095 6.65093 22.0487 7.96426C22.5879 9.27758 22.8626 10.6844 22.8572 12.1041Z"
				fill="none"
				stroke={color}
				strokeWidth="1.5"
			/>
		</svg>
	);
};
