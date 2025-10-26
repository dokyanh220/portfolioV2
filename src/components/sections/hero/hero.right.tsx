import { useState, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';
import './hero.scss';
import { FaCode } from 'react-icons/fa6';
import { IoReturnDownBack } from 'react-icons/io5';

const defaultSkills = `\`\`\`js
export const dokyanhDEV = {
  name: "Đỗ Kỳ Anh",
  alias: "Bin / KyAnh",
  role: "Fullstack Developer",
  location: "VietNam.HoChiMinh",
  
  programmingLanguages: ["C/C++", "ESMAScript", "HTML/Css", "PHP", "Python"],

  stack: {
    frontend: ["React", "Next.js", "TailwindCSS", "MaterialUI"],
    backend: ["Node.js", "ExpressJS", "Axios", "Payload CMS", "NestJS"],
    database: ["MongoDB", "MSSQL", "SQL Server"]
  },

  tools: ["VS Code", "Postman", "SQL Server", "MongoDB Compass", "Figma",  "Git", "Vercel"],

  currentlyLearning: [
    "Advanced Website Development",
    "Next.js 15 & React Server Components",
    "AI + API Integration",
  ],

  experience: {
    yearsOfCoding: 1,
  },

  motto: "Make things work on internet. Then make them more beautiful.",

  strengths: ["Problem Solving", "Fast Learning", "System Thinking"],

  introduce() {
    console.log(\`
        Hi there! I'm \${this.name}, a passionate \${this.role} based in \${this.location}.
        I love turning ideas into reality using code.
    \`);
  },

  goal() {
    console.log("🚀 Goal: Build useful, scalable apps that make people’s lives easier.");
  },
};

dokyanhDEV.introduce();
dokyanhDEV.goal();
\`\`\``;

const HeroRight: React.FC = () => {
    const [colorMode, setColorMode] = useState<'dark' | 'light'>(
        window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
    );

    useEffect(() => {
        const listener = (e: MediaQueryListEvent) => {
            setColorMode(e.matches ? 'dark' : 'light');
        };
        const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
        matchMedia.addEventListener('change', listener);
        return () => matchMedia.removeEventListener('change', listener);
    }, []);

    const [value, setValue] = useState<string>(defaultSkills);
    const [editMode, setEditMode] = useState(false);
    const [hovered, setHovered] = useState(false);

    return (
        <div className={`hero-right mode-${colorMode}`}>
            <div className="border-top"></div>
            <div className="first">
                <div className="circle bg-first"></div>
                <div className="circle bg-second"></div>
                <div className="circle bg-third"></div>
            </div>
            <div
                className="second md-editor-hover-area"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{ position: 'relative' }}
            >
                {hovered && !editMode && (
                    <button
                        className="edit-btn"
                        onClick={() => setEditMode(true)}
                        aria-label="Edit Markdown"
                        type="button"
                    >
                        <FaCode size={16} />
                    </button>
                )}
                <MDEditor
                    value={value}
                    onChange={(val) => setValue(val || '')}
                    height={400}
                    visiableDragbar={false}
                    data-color-mode={colorMode}
                    preview={editMode ? 'edit' : 'preview'}
                    hideToolbar={!editMode}
                    style={{
                        background: 'transparent',
                        color: 'inherit',
                        border: 'none',
                        fontSize: 15,
                        minHeight: 250,
                    }}
                />
                {/* Khi ở chế độ edit, hiển thị nút "Đóng" để quay lại preview */}
                {editMode && (
                    <button
                        className="close-btn"
                        onClick={() => setEditMode(false)}
                        aria-label="Close Edit"
                        type="button"
                    >
                        <IoReturnDownBack size={16} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default HeroRight;
