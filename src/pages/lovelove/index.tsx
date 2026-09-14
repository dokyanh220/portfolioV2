import htmlContent from './index.html?raw';

const ForUPage = () => {
    return (
        <iframe 
            srcDoc={htmlContent} 
            style={{ width: '100vw', height: '100vh', border: 'none', display: 'block' }} 
            title="For U"
        />
    );
};

export default ForUPage;
