import type { SvgProps } from "@/types";

export const Blog = ({ ...props }: SvgProps) => {
	const { width = 22, height = 25, color = "inherit", className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 22 25"
			fill="inherit"
			className={className}
		>
			<path
				d="M13.7694 1.1543L13.7688 1.1543L2.69186 1.1543C2.40114 1.1543 2.12233 1.26978 1.91676 1.47535C1.71119 1.68092 1.5957 1.95973 1.5957 2.25045V22.5581C1.5957 22.8489 1.71119 23.1277 1.91676 23.3332C2.12233 23.5388 2.40114 23.6543 2.69186 23.6543H19.3072C19.598 23.6543 19.8768 23.5388 20.0823 23.3332C20.2879 23.1277 20.4034 22.8489 20.4034 22.5581V7.78891V7.78832C20.4034 7.76559 20.399 7.74307 20.3903 7.72206C20.3816 7.70118 20.369 7.68219 20.3531 7.66617L13.7694 1.1543ZM13.7694 1.1543C13.7921 1.15428 13.8146 1.15874 13.8356 1.16743C13.8566 1.17611 13.8757 1.18885 13.8918 1.20492L20.3528 7.66587L13.7694 1.1543ZM13.0188 7.78891C13.0188 8.20313 13.3546 8.53891 13.7688 8.53891H18.8457C19.149 8.53891 19.4225 8.35618 19.5386 8.07592C19.6547 7.79567 19.5905 7.47308 19.376 7.25858L14.2991 2.18166C14.0846 1.96716 13.762 1.90299 13.4818 2.01908C13.2015 2.13517 13.0188 2.40864 13.0188 2.71199V7.78891Z"
				fill="none"
				stroke={color}
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
			<path
				d="M14.6925 17.9428H7.30784C7.06303 17.9428 6.82824 17.8455 6.65513 17.6724C6.48202 17.4993 6.38477 17.2645 6.38477 17.0197C6.38477 16.7749 6.48202 16.5401 6.65513 16.367C6.82824 16.1939 7.06303 16.0966 7.30784 16.0966H14.6925C14.9373 16.0966 15.1721 16.1939 15.3452 16.367C15.5183 16.5401 15.6155 16.7749 15.6155 17.0197C15.6155 17.2645 15.5183 17.4993 15.3452 17.6724C15.1721 17.8455 14.9373 17.9428 14.6925 17.9428ZM14.6925 14.2505H7.30784C7.06303 14.2505 6.82824 14.1532 6.65513 13.9801C6.48202 13.807 6.38477 13.5722 6.38477 13.3274C6.38477 13.0826 6.48202 12.8478 6.65513 12.6747C6.82824 12.5015 7.06303 12.4043 7.30784 12.4043H14.6925C14.9373 12.4043 15.1721 12.5015 15.3452 12.6747C15.5183 12.8478 15.6155 13.0826 15.6155 13.3274C15.6155 13.5722 15.5183 13.807 15.3452 13.9801C15.1721 14.1532 14.9373 14.2505 14.6925 14.2505Z"
				fill={color}
				stroke="none"
			/>
		</svg>
	);
};
