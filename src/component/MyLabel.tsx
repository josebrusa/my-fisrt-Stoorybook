import "./MyLabel.css";

interface Props {
    /**
     * Text to display
     */ 
    label: string;
    /**
     * Label size
     */
    size?: "normal" | "h1" | "h2" | "h3";
    /**
     * Capitalizar todas las letras
     */
    allCaps?: boolean;

    /**
   * Label color
   */
    color?: "text-primary" | "text-secondary" | "text-tertiary";

    /**
     *  Font Color
     */
    fontColor?: string;

    /**
     * 
     * background Color
     * 
     */

    backgroundColor?: string;
}
    



    export const MyLabel = ({
    label,
    size = "normal",
    allCaps = false,
    color,
    fontColor,
    backgroundColor,
    }: Props) => {
    return (
        <span 
            className={`
                ${size}
                ${color}
                label
            `}
            style={{ color: fontColor, backgroundColor }}>
        {allCaps ? label.toUpperCase() : label}
        </span>
    );
};
