import type { SvgProps } from "@/types";

export const Partners = ({ ...props }: SvgProps) => {
	const { width = 26, height = 26, color = "inherit", className = "" } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 26 26"
			fill="inherit"
			className={className}
		>
			<path
				d="M24.998 12.998C24.998 19.6255 19.6255 24.998 12.998 24.998M24.998 12.998C24.998 6.37063 19.6255 0.998047 12.998 0.998047M24.998 12.998H0.998047M12.998 24.998C6.37063 24.998 0.998047 19.6255 0.998047 12.998M12.998 24.998C15.6903 24.998 17.8728 19.6255 17.8728 12.998C17.8728 6.37063 15.6903 0.998047 12.998 0.998047M12.998 24.998C10.3058 24.998 8.12333 19.6255 8.12333 12.998C8.12333 6.37063 10.3058 0.998047 12.998 0.998047M0.998047 12.998C0.998047 6.37063 6.37063 0.998047 12.998 0.998047"
				fill="none"
				stroke={color}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
