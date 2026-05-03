import { Col, Row, Modal, Button } from 'react-bootstrap';
import ProjectCard from './project.card';
import { PROJECTS, type IProject } from 'helpers/data';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsGithub, BsCalendar3 } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';

const Project = () => {
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState<IProject | null>(null);

    const filteredProjects = PROJECTS
        .filter(p =>
            p.title.toLowerCase().includes(search.toLowerCase()) ||
            p.description.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            const parse = (d: string) => new Date(d.split('-').reverse().join('-')).getTime();
            return parse(b.date) - parse(a.date);
        });

    return (
        <>
            <Row>
                <Col xs={12}>
                    <h3 className="text-center">
                        My Recent <span className="brand-red">Works</span>{' '}
                    </h3>
                    <h6 className="text-center mb-md-5 mb-2">
                        Here are a few projects I've worked on recently.
                    </h6>
                </Col>
            </Row>
            <div className="search-wrapper">
                <input
                    type="text"
                    placeholder="Search projects..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="search-input"
                />
                <button className="search-btn">
                    <BiSearch size={18} />
                </button>
            </div>
            <Row
                style={{
                    justifyContent: 'flex-start',
                    paddingBottom: '10px',
                }}
            >
                {filteredProjects.map((item) => (
                    <Col md={4} className="project-card" key={item.id}>
                        <ProjectCard
                            imgPath={item.imgPath}
                            title={item.title}
                            description={item.description}
                            githubLink={item.githubLink}
                            demoLink={item.demoLink}
                            date={item.date}
                            onClick={() => setSelected(item)}
                        />
                    </Col>
                ))}
            </Row>
            <div className="mb-7"></div>

            {/* ========  Detail Modal  ======== */}
            <Modal
                show={!!selected}
                onHide={() => setSelected(null)}
                size="lg"
                centered
                contentClassName="project-detail-modal"
            >
                {selected && (
                    <>
                        <Modal.Header closeButton className="border-0">
                            <Modal.Title>{selected.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {selected.imgPath && (
                                <img
                                    src={selected.imgPath}
                                    alt={selected.title}
                                    className="w-100 rounded mb-3"
                                    style={{ maxHeight: 380, objectFit: 'cover' }}
                                />
                            )}
                            <p className="d-flex align-items-center gap-2 text-muted mb-2">
                                <BsCalendar3 /> {selected.date}
                            </p>
                            <p style={{ textAlign: 'justify', lineHeight: 1.7 }}>
                                {selected.description}
                            </p>
                        </Modal.Body>
                        <Modal.Footer className="border-0">
                            <Button
                                variant="outline-light"
                                href={selected.githubLink}
                                target="_blank"
                            >
                                <BsGithub /> &nbsp; Source
                            </Button>
                            {selected.demoLink && (
                                <Button
                                    variant="primary"
                                    href={selected.demoLink}
                                    target="_blank"
                                >
                                    <CgWebsite /> &nbsp; Demo
                                </Button>
                            )}
                        </Modal.Footer>
                    </>
                )}
            </Modal>
        </>
    );
};

export default Project;
