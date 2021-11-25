const STYLES = ['home-btn--primary', 'home-btn--outline'];
const SIZES = ['home-btn--medium', 'home-btn--large'];

export const Button = ({
  children, 
  type, 
  onClick, 
  buttonStyle, 
  buttonSize,
  className
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0];

    return (
        <button
          className={`home-btn ${className} ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
    )
};
