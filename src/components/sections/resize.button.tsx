interface Iprops {
    btnText?: string;
    btnIcons?: React.ReactNode;
    btnStyle?: React.CSSProperties;
    onClick?: () => void;
    href?: string;
    target?: string;
}

const ResizeButton = (props: Iprops) => {
    const { btnText, btnIcons, btnStyle, onClick, href, target } = props;

    if (href) {
        return (
            <a
                href={href}
                target={target || '_blank'}
                rel="noopener noreferrer"
                className="resize-button"
                style={{ ...btnStyle, textDecoration: 'none' }}
            >
                <span style={{ textTransform: 'uppercase' }}>{btnText}</span>
                <>{btnIcons}</>
            </a>
        );
    }

    return (
        <button className="resize-button" style={btnStyle} onClick={onClick}>
            <span style={{ textTransform: 'uppercase' }}>{btnText}</span>
            <>{btnIcons}</>
        </button>
    );
};

export default ResizeButton;
