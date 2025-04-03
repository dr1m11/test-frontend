import type { SvgProps } from "@/types";

export const FinancialServices = ({ ...props }: SvgProps) => {
	const { width = 26, height = 27, color = "inherit", className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 26 27"
			fill="inherit"
			className={className}
		>
			<path
				d="M3.69336 6.32057H22.3963L13.4729 1.08119C13.1579 0.896237 12.7671 0.897754 12.4535 1.08515L3.69336 6.32057Z"
				fill={color}
				stroke="none"
			/>
			<path
				d="M2.91016 21.2949C2.91016 20.7426 3.35787 20.2949 3.91016 20.2949H7.26953C7.82182 20.2949 8.26953 20.7426 8.26953 21.2949V21.9238H2.91016V21.2949Z"
				fill={color}
				stroke="none"
			/>
			<path
				d="M2.91016 10.166C2.91016 10.7183 3.35787 11.166 3.91016 11.166H7.26953C7.82182 11.166 8.26953 10.7183 8.26953 10.166V9.53711H2.91016V10.166Z"
				fill={color}
				stroke="none"
			/>
			<path
				d="M17.6758 21.2949C17.6758 20.7426 18.1235 20.2949 18.6758 20.2949H22.0352C22.5874 20.2949 23.0352 20.7426 23.0352 21.2949V21.9238H17.6758V21.2949Z"
				fill={color}
				stroke="none"
			/>
			<path
				d="M17.6758 10.166C17.6758 10.7183 18.1235 11.166 18.6758 11.166H22.0352C22.5874 11.166 23.0352 10.7183 23.0352 10.166V9.53711H17.6758V10.166Z"
				fill={color}
				stroke="none"
			/>
			<rect
				x="3.4375"
				y="11.6953"
				width="4.34375"
				height="8.10156"
				fill={color}
				stroke="white"
			/>
			<rect
				x="18.4375"
				y="11.6953"
				width="4.34375"
				height="8.10156"
				fill={color}
				stroke="white"
			/>
			<path
				d="M13.002 20.0684C15.3977 20.0684 17.3398 18.1262 17.3398 15.7305C17.3398 13.3347 15.3977 11.3926 13.002 11.3926C10.6062 11.3926 8.66406 13.3347 8.66406 15.7305C8.66406 18.1262 10.6062 20.0684 13.002 20.0684Z"
				fill={color}
				stroke="none"
			/>
			<path
				d="M11.668 16.6614C11.668 17.177 12.0637 17.5928 12.5554 17.5928H13.5587C13.9865 17.5928 14.3342 17.229 14.3342 16.7813C14.3342 16.2936 14.1224 16.1217 13.8066 16.0098L12.1956 15.4502C11.8798 15.3382 11.668 15.1663 11.668 14.6787C11.668 14.231 12.0157 13.8672 12.4435 13.8672H13.4468C13.9385 13.8672 14.3342 14.2829 14.3342 14.7986"
				stroke="white"
				strokeWidth="0.599609"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.998 13.332V18.1289"
				stroke="white"
				strokeWidth="0.599609"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<rect
				x="1.35352"
				y="5.74414"
				width="23.2949"
				height="3.48047"
				rx="1.5"
				fill={color}
				stroke="white"
			/>
			<rect
				x="1.35352"
				y="22.5078"
				width="23.2949"
				height="3.20898"
				rx="1.5"
				fill={color}
				stroke="white"
			/>
		</svg>
	);
};
