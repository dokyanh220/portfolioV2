import portfolioV1IMG from 'assets/project/portfolioV1IMG.png';
import chatbot from 'assets/project/chatbot.jpg';
import crud from 'assets/project/crud.webp';
import trello from 'assets/project/trello-1.jpg';
import cv from 'assets/project/cv.png';
import moji from 'assets/project/moji.png';
import caro from 'assets/project/caro.png';
import kpik from 'assets/project/kpik.png';
import ocr from 'assets/project/ocr.png';
import seachess from 'assets/project/seachess.jpg';

export const APP_DATA = {
    YOUTUBE_URL: 'https://www.youtube.com/@dokyanh220',
    TIKTOK_URL: 'https://www.tiktok.com/@dokyanh220',
    GITHUB_URL: 'https://github.com/dokyanh220',
    FACEBOOK_URL: 'https://www.facebook.com/dokyanh220/',
};

export const EXPERIENCES = [
    {
        id: 1,
        title: {
            vi: ' Sinh Viên Lập Trình',
            en: 'Programming student',
        },
        company: {
            vi: 'Aptech Computer Education',
            en: 'Aptech Computer Education',
        },
        duration: {
            vi: 'Tháng 3/2025 - Hiện tại',
            en: 'March 2025 - Present',
        },
    },
    {
        id: 2,
        title: {
            vi: 'Lập Trình Viên',
            en: 'Fullstack Developer',
        },

        company: {
            vi: 'Công ty F (freelancer)',
            en: 'F (freelancer)',
        },
        duration: {
            vi: 'Tháng 6/2022 - Tháng 1/2024',
            en: 'Jun 2022 - Jan 2024',
        },
    },
    {
        id: 3,
        title: {
            vi: 'Dự án tự làm',
            en: 'Self Employed',
        },
        company: {
            vi: 'Học kiến thức mới mỗi ngày',
            en: 'Code and build something in everyday.',
        },
        duration: {
            vi: 'Tháng 6/2023 - Hiện tại',
            en: 'April 2023 - Present',
        },
    },
];

export interface IProject {
    id: number;
    imgPath: string;
    title: string;
    description: string;
    githubLink: string;
    demoLink: string;
    date: string;
}

export const PROJECTS: IProject[] = [
    {
        id: 5,
        imgPath: cv,
        title: 'My CV',
        description:
            "I'm just a newbie who likes to learn and is passionate about programming",
        githubLink: 'https://github.com/dokyanh220/cv-dokyanh',
        demoLink: 'https://cv.anhdo.io.vn/',
        date: '20-11-2025'
    },
    {
        id: 4,
        imgPath: trello,
        title: 'Trello web clone',
        description: 'Build a plan, drag-and-drop operation',
        githubLink: 'https://github.com/dokyanh220/trelloWeb',
        demoLink: 'https://trello-dokkyanh.vercel.app/',
        date: '01-10-2025'
    },
    {
        id: 3,
        imgPath: crud,
        title: 'CRUD with MERN',
        description: 'Create, Read, Update, Delete',
        githubLink: 'https://github.com/dokyanh220/crud-mern',
        demoLink: '',
        date: '10-09-2025'
    },
    {
        id: 2,
        imgPath: chatbot,
        title: 'Chat bot Ahihi',
        description:
            `Chat Ahihi is a fun and friendly AI chatbot application. It's designed to create natural conversations, support learning, entertainment, and quick Q&A. With a simple and modern interface, the app makes chatting with an AI feel like talking to a witty and helpful virtual friend.`,
        githubLink: 'https://github.com/dokyanh220/chatAhihi',
        demoLink: '',
        date: '19-08-2025'
    },
    {
        id: 1,
        imgPath: portfolioV1IMG,
        title: 'Portfolio with HTML/CSS & JAVASCRIPT',
        description:
            'This is the first personal project I created right after learning HTML, CSS, and JavaScript.',
        githubLink: 'https://github.com/dokyanh220/portfolio',
        demoLink: '',
        date: '06-05-2025'
    },
    {
        id: 6,
        title: "WebApp RealTime MOJI",
        description: "MOJI là ứng dụng nhắn tin realtime với giao diện hiện đại, được xây dựng bằng React + Tailwind CSS ở frontend và Node.js + Socket.IO ở backend. Ứng dụng cho phép gửi/nhận tin nhắn tức thì, hiển thị trạng thái online và mang lại trải nghiệm trò chuyện mượt mà, gần như không độ trễ.",
        imgPath: moji,
        githubLink: "https://github.com/dokyanh220/Moji",
        demoLink: "",
        date: "2025-10-31"
    },
    {
        id: 7,
        title: "Game cờ caro",
        description: "Caro Game là ứng dụng trò chơi cờ caro (tic-tac-toe mở rộng) được phát triển bằng Java, hỗ trợ cả chế độ chơi 2 người và chơi với AI. Người chơi có thể thi đấu trực tiếp trên cùng một máy hoặc thử thách với máy tính được tích hợp thuật toán xử lý nước đi thông minh. Ứng dụng có giao diện trực quan, dễ sử dụng, cho phép đánh dấu lượt chơi rõ ràng và kiểm tra thắng/thua theo luật 5 quân liên tiếp.",
        imgPath: caro,
        githubLink: "https://github.com/dokyanh220/caro_game",
        demoLink: "",
        date: "2026-03-10"
    },
    {
        id: 8,
        title: "K-PIK Tải xuống video ảnh",
        description: "K-PIK là công cụ tải xuống video và hình ảnh từ nhiều nền tảng mạng xã hội như Instagram, Facebook, TikTok, YouTube và Pinterest.",
        imgPath: kpik,
        githubLink: "https://github.com/dokyanh220/K-PIK-web",
        demoLink: "",
        date: "2026-04-24"
    },
    {
        id: 9,
        title: "ImageToText OCR",
        description: "ImageToText là ứng dụng chuyển đổi hình ảnh sang văn bản và PDF, sử dụng Spring Boot và React, tích hợp OCR Tesseract.",
        imgPath: ocr,
        githubLink: "https://github.com/dokyanh220/ImageToText_OCR",
        demoLink: "",
        date: "2026-06-08"
    },
    {
        id: 10,
        title: "SeaChess - Strategy Meets The Tide",
        description: "Chinh phục đại dương cờ vua! Đấu online thời gian thực, leo hạng Elo, luyện tập với AI Stockfish và trở thành Grand Master trong cộng đồng SeaChess toàn cầu. Một ứng dụng đa nền tảng tuyệt đẹp.",
        imgPath: seachess,
        githubLink: "https://github.com/dokyanh220/SeaChess",
        demoLink: "https://seachess.vercel.app",
        date: "2026-07-19"
    }
];

// --- CRUD helpers that mutate PROJECTS directly ---

function persistProjects() {
    localStorage.setItem('projects', JSON.stringify(PROJECTS));
}

export function addProject(project: IProject) {
    PROJECTS.push(project);
    persistProjects();
}

export function updateProject(id: number, data: Partial<IProject>) {
    const idx = PROJECTS.findIndex(p => p.id === id);
    if (idx !== -1) {
        PROJECTS[idx] = { ...PROJECTS[idx], ...data };
        persistProjects();
    }
}

export function removeProject(id: number) {
    const idx = PROJECTS.findIndex(p => p.id === id);
    if (idx !== -1) {
        PROJECTS.splice(idx, 1);
        persistProjects();
    }
}

// Load any previously persisted projects on app startup
(function loadPersistedProjects() {
    try {
        const stored = localStorage.getItem('projects');
        if (stored) {
            const parsed: IProject[] = JSON.parse(stored);
            PROJECTS.length = 0;           // clear the default entries
            parsed.forEach(p => PROJECTS.push(p)); // fill with persisted data
        }
    } catch (e) {
        console.error('Failed to load persisted projects', e);
    }
})();

export const SKILLS_DATA = [
    'PHP',
    'Javascript',
    'Typescript',
    'React',
    'Next JS',
    'Tailwind',
    'MongoDB',
    'MSSQL',
    'Git',
    'Bootstrap',
    'Figma',
    'MaterialUI',
];

// Choose your skills from below. Make sure it's in the same format and spelled correctly.
// Couldn't find the required skills? Raise an issue on github at https://github.com/hhhrrrttt222111/developer-portfolio/issues/new

// AVAILABLE SKILLS

/* 
    HTML
    CSS
    JS 
    React
    Next JS
    Nuxt JS
    Node JS
    Vue
    Angular
    Docker
    Photoshop
    Illustrator
    Svelte
    GCP
    Azure
    Fastify
    Haxe
    Ionic
    Markdown
    Microsoft Office
    Picsart
    Sketch
    Unity
    WolframAlpha
    Adobe XD
    After Effects
    Bootstrap
    Bulma
    CapacitorJs
    Coffeescript
    MemSQL
    C
    C++
    C#
    Python
    Java
    Julia
    Matlab
    Swift
    Ruby
    Kotlin
    Go
    PHP
    Flutter
    Dart
    Typescript
    Swift
    Git
    Figma
    Canva
    Ubuntu
    Bootstrap
    MongoDB
    Tailwind
    ViteJS
    VuetifyJS
    MySQL
    PostgreSQL
    AWS
    Firebase
    Blender
    Premiere Pro
    Adobe Audition
    Deno
    Django
    Gimp
    Graphql
    Lightroom
    MaterialUI
    Nginx
    Numpy
    OpenCV
    Pytorch
    Selenium
    Strapi
    Tensorflow
    Webex
    Wordpress
  */
