import { Col, Row } from 'react-bootstrap';
import { CgWebsite } from 'react-icons/cg';
import { IoGameControllerOutline } from 'react-icons/io5';
import GlowCard from '@/components/share/glow-card';
import { useCurrentApp } from 'components/context/app.context';
import blurImg from 'assets/blur-23.svg';
import ResizeButton from '../resize.button';

const FeaturedProject = () => {
    const { theme } = useCurrentApp();

    return (
        <Row className="mb-5 justify-content-center">
            <Col xs={12} md={8}>
                <GlowCard identifier="featured-seachess">
                    <div className="p-4 relative">
                        {theme === 'dark' && (
                            <img
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    opacity: 0.8,
                                    borderRadius: 'inherit'
                                }}
                                src={blurImg}
                                alt="Background Blur"
                                width={'100%'}
                                height={200}
                            />
                        )}
                        <div className="d-flex flex-column align-items-center text-center position-relative" style={{ zIndex: 1 }}>
                            <div className="mb-3" style={{ color: 'var(--text-color)', opacity: 0.8 }}>
                                <IoGameControllerOutline size={40} />
                            </div>
                            <h4 className="fw-bold mb-3">
                                Dự án mới nhất: <span className="brand-red">SeaChess</span>
                            </h4>
                            <p className="mb-4" style={{ color: 'var(--text-color-secondary)' }}>
                                Khám phá tựa game cờ vua trực tuyến đa nền tảng thời gian thực với chế độ chơi cùng bạn bè và AI.
                            </p>
                            <ResizeButton
                                btnText="Truy cập SeaChess"
                                btnIcons={<CgWebsite size={20} />}
                                href="https://seachess.vercel.app"
                                target="_blank"
                            />
                        </div>
                    </div>
                </GlowCard>
            </Col>
        </Row>
    );
};

export default FeaturedProject;
